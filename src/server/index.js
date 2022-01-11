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

import PlayerExperience from './PlayerExperience.js';
import ControllerExperience from './ControllerExperience.js';

import getConfig from '../utils/getConfig.js';
import player from './schemas/player.js';
const ENV = process.env.ENV || 'default';
const config = getConfig(ENV);
const server = new Server();

// html template and static files (in most case, this should not be modified)
server.templateEngine = { compile };
server.templateDirectory = path.join('.build', 'server', 'tmpl');
server.router.use(serveStatic('public'));
server.router.use('build', serveStatic(path.join('.build', 'public')));
server.router.use('vendors', serveStatic(path.join('.vendors', 'public')));

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

    const score = await server.stateManager.create('score');
    const globalMasterControls = await server.stateManager.create('globalBusControls');
    const sineMasterControls = await server.stateManager.create('sineBusControls');
    const amMasterControls = await server.stateManager.create('amBusControls');
    const fmMasterControls = await server.stateManager.create('fmBusControls');

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
    const playersIds = new Array();

    server.stateManager.observe(async (schemaName, stateId, nodeId) => {
      switch (schemaName) {
        case 'player':
          const playerState = await server.stateManager.attach(schemaName, stateId);
          const plId = playerState.get('id');
          playerState.onDetach(() => {
            // clean things
            players.delete(playerState);
            playersIds.splice(playersIds.indexOf(plId), 1);
          });
          players.add(playerState);
          playersIds.push(plId);
          break;
      }
    });


    //Receiving notes from Max by OSC
    score.subscribe(async updates => {
      if (updates.hasOwnProperty('notes')) {
        // console.log("note received", updates.notes.length);
        const dispatchStrategy = score.get('dispatchStrategy');
        const syncTime = sync.getSyncTime() + 0.1;
        
        switch (dispatchStrategy) {
          case 'sendAll':
            players.forEach(playerState => {
              playerState.set({ note: updates.notes, playTime: syncTime });
            });    
            break;
          case 'randomSpread':
            const nNotes = updates.notes.length;
            const playersArray = Array.from(players);
            shuffleArray(playersArray);

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


function randomGrouping(nGroups, nPlayers) {
  const assignment = Array.from(new Array(nPlayers), () => []);
  if (nGroups <= nPlayers) {
    // Mettre players dans un array et randomiser l'ordre puis ranger les premiers dans la première note etc
    const players = Array.from(Array(nPlayers).keys());
    let gp = 0;
    while (players.length > nPlayers%nGroups) {
      const randomIdx = Math.floor(Math.random() * players.length);
      const player = players[randomIdx];
      assignment[player].push(gp);
      players.splice(randomIdx, 1);
      gp = (gp + 1) % nGroups;
    }
    const groups = Array.from(Array(nGroups).keys());
    while (players.length > 0) {
      const randomIdxPl = Math.floor(Math.random() * players.length);
      const randomIdxGp = Math.floor(Math.random() * groups.length);
      const player = players[randomIdxPl];
      const group = groups[randomIdxGp];
      assignment[player].push(group);
      players.splice(randomIdxPl, 1);
      groups.splice(randomIdxGp, 1);
    }
  } else {
    const groups = Array.from(Array(nGroups).keys());
    let pl = 0;
    while (groups.length > nGroups%nPlayers) {
      const randomIdx = Math.floor(Math.random() * groups.length);
      const group = groups[randomIdx];
      assignment[pl].push(group);
      groups.splice(randomIdx, 1);
      pl = (pl + 1) % nPlayers;
    }
    const players = Array.from(Array(nPlayers).keys());
    while (groups.length > 0) {
      const randomIdxPl = Math.floor(Math.random() * players.length);
      const randomIdxGp = Math.floor(Math.random() * groups.length);
      const player = players[randomIdxPl];
      const group = groups[randomIdxGp];
      assignment[player].push(group);
      players.splice(randomIdxPl, 1)  ;
      groups.splice(randomIdxGp, 1);
    }
  }
  return assignment;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

process.on('unhandledRejection', (reason, p) => {
  console.log('> Unhandled Promise Rejection');
  console.log(reason);
});

