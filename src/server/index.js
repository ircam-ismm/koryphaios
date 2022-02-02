import 'source-map-support/register';
import { Server } from '@soundworks/core/server';
import path from 'path';
import serveStatic from 'serve-static';
import compile from 'template-literal';

import { StateManagerOsc } from '@soundworks/state-manager-osc';

import scoreSchema from './schemas/score.js';
import playerSchema from './schemas/player.js';
import busControlsSchema from './schemas/busControls.js';

import pluginPlatformFactory from '@soundworks/plugin-platform/server';
import pluginSyncFactory from '@soundworks/plugin-sync/server';
import pluginCheckinFactory from '@soundworks/plugin-checkin/server';
import pluginAudioBufferLoaderFactory from "@soundworks/plugin-audio-buffer-loader/server";
import pluginFilesystemFactory from '@soundworks/plugin-filesystem/server';

import PlayerExperience from './PlayerExperience.js';
import ControllerExperience from './ControllerExperience.js';

import getConfig from '../utils/getConfig.js';

const ENV = process.env.ENV || 'default';
const config = getConfig(ENV);
const server = new Server();

// html template and static files (in most case, this should not be modified)
server.templateEngine = { compile };
server.templateDirectory = path.join('.build', 'server', 'tmpl');
server.router.use(serveStatic('public'));
server.router.use('build', serveStatic(path.join('.build', 'public')));
server.router.use('vendors', serveStatic(path.join('.vendors', 'public')));
server.router.use('soundbank', serveStatic('soundbank'));

console.log(`
--------------------------------------------------------
- launching "${config.app.name}" in "${ENV}" environment
- [pid: ${process.pid}]
--------------------------------------------------------
`);

// -------------------------------------------------------------------
// register plugins
// -------------------------------------------------------------------
// server.pluginManager.register(pluginName, pluginFactory, [pluginOptions], [dependencies])
server.pluginManager.register('platform', pluginPlatformFactory, {}, []);
server.pluginManager.register('sync', pluginSyncFactory, {}, []);
server.pluginManager.register('checkin', pluginCheckinFactory, {}, []);
server.pluginManager.register('audio-buffer-loader', pluginAudioBufferLoaderFactory, {}, []);
server.pluginManager.register('filesystem', pluginFilesystemFactory, {
  directories: [{
    name: 'soundbank',
    path: 'soundbank',
    publicDirectory: 'soundbank',
  }],
}, []);


// -------------------------------------------------------------------
// register schemas
// -------------------------------------------------------------------
// server.stateManager.registerSchema(name, schema);
server.stateManager.registerSchema('score', scoreSchema);
server.stateManager.registerSchema('player', playerSchema);
server.stateManager.registerSchema('globalBusControls', busControlsSchema);
server.stateManager.registerSchema('sineBusControls', busControlsSchema);
server.stateManager.registerSchema('amBusControls', busControlsSchema);
server.stateManager.registerSchema('fmBusControls', busControlsSchema);


(async function launch() {
  try {
    await server.init(config, (clientType, config, httpRequest) => {
      return {
        clientType: clientType,
        app: {
          name: config.app.name,
          author: config.app.author,
        },
        env: {
          type: config.env.type,
          websockets: config.env.websockets,
          subpath: config.env.subpath,
        }
      };
    });

    const sync = server.pluginManager.get('sync');

    const score = await server.stateManager.create('score', {piece: config.app.piece, composer: config.app.composer});
    const globalMasterControls = await server.stateManager.create('globalBusControls', {synthType: 'global'});
    const sineMasterControls = await server.stateManager.create('sineBusControls', {synthType: 'sine'});
    const amMasterControls = await server.stateManager.create('amBusControls', {synthType: 'am'});
    const fmMasterControls = await server.stateManager.create('fmBusControls', {synthType: 'fm'});

    const playerExperience = new PlayerExperience(server, 'player');
    const controllerExperience = new ControllerExperience(server, 'controller');

    // start all the things
    await server.start();
    playerExperience.start();
    controllerExperience.start();

    const oscConfig = { // these are the defaults
      localAddress: '0.0.0.0',
      localPort: 57121,
      remoteAddress: '127.0.0.1',
      remotePort: 57122,
    };
    
    const oscStateManager = new StateManagerOsc(server.stateManager, oscConfig);
    await oscStateManager.init();

    //Observe players connections
    const players = new Set();

    server.stateManager.observe(async (schemaName, stateId, nodeId) => {
      switch (schemaName) {
        case 'player':
          const playerState = await server.stateManager.attach(schemaName, stateId);
          playerState.onDetach(() => {
            // clean things
            players.delete(playerState);
          });
          players.add(playerState);
          break;
      }
    });


    //Receiving notes from Max by OSC
    score.subscribe(async updates => {
      if (updates.hasOwnProperty('notes')) {
        // console.log("note received", updates.notes.length);
        const dispatchStrategy = score.get('dispatchStrategy');
        const syncTime = sync.getSyncTime() + score.get('offsetSyncTime');
        
        switch (dispatchStrategy) {
          case 'sendAll':
            players.forEach(playerState => {
              playerState.set({ note: updates.notes, playTime: syncTime });
            });    
            break;
          case 'randomSpread':
            const nNotes = updates.notes.length;
            const playersArray = Array.from(players);
            playersArray.sort((a, b) => Math.random() < 0.5 ? 1 : -1)

            if (nNotes <= playersArray.length){  
              let note = 0;
              while (playersArray.length > 0) {
                const player = playersArray.pop();
                player.set({ note: updates.notes[note], playTime: syncTime });
                note = (note + 1) % nNotes;
              }
            } else {
              let pl = 0;
              for (let note = 0; note < nNotes; note++) {
                const player = playersArray[pl];
                player.set({ note: updates.notes[note], playTime: syncTime });
                pl = (pl + 1)%playersArray.length;
              }
            }
            break;
        }
      }
    });


  } catch (err) {
    console.error(err.stack);
  }
})();


// Keep in case the other method doesn't work
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

process.on('unhandledRejection', (reason, p) => {
  console.log('> Unhandled Promise Rejection');
  console.log(reason);
});

