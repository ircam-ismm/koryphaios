import 'source-map-support/register';
import { Server } from '@soundworks/core/server';
import path from 'path';
import serveStatic from 'serve-static';
import compile from 'template-literal';

import { StateManagerOsc } from '@soundworks/state-manager-osc';

import scoreSchema from './schemas/score.js';
import playerSchema from './schemas/player.js';
import masterControlsSchema from './schemas/masterControls.js';

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
server.stateManager.registerSchema('masterControls', masterControlsSchema);



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

    const ngroups = 6;

    const score = await server.stateManager.create('score');
    const globalMasterControls = await server.stateManager.create('masterControls', {group: 0});
    const groupMasterControls = new Set();
    for (let i = 1; i <= ngroups; i++){
      const groupControls = await server.stateManager.create('masterControls', { group: i });
      groupMasterControls.add(groupControls);
    } 

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

    const players = new Set();
    let noteCounter = 0;
    const modCounter = 3;

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
      if (updates.hasOwnProperty('note')) {
        const noteDict = updates.note;
        if (Array.isArray(noteDict)) {
          for (let i = 0; i < noteDict.length; i++) {
            //Parsing Max list into smth readable by js
            const splitStr = noteDict[i].enveloppe.split(' ');
            const env = [];
            let i = 1;
            while (i < splitStr.length - 1) {
              const bp = [];
              bp.push(parseFloat(splitStr[i + 1]));
              bp.push(parseFloat(splitStr[i + 2]));
              bp.push(parseFloat(splitStr[i + 3]));
              env.push(bp);
              i += 5;
            }
            noteDict[i].enveloppe = env;
          }

        } else {
          //Parsing Max list into smth readable by js
          const splitStr = noteDict.enveloppe.split(' ');
          const env = [];
          let i = 1;
          while (i < splitStr.length - 1) {
            const bp = [];
            bp.push(parseFloat(splitStr[i + 1]));
            bp.push(parseFloat(splitStr[i + 2]));
            bp.push(parseFloat(splitStr[i + 3]));
            env.push(bp);
            i += 5;
          }
          noteDict.enveloppe = env;
        }
        
        //Dispatch note among players
        players.forEach(playerState => {
          const id = playerState.get('id');
          if (id % modCounter === noteCounter) {
            playerState.set({ note: noteDict, playTime: sync.getSyncTime() + 0.2 });
          }
        });    
        noteCounter = (noteCounter+1) % modCounter;
      }
    });


  } catch (err) {
    console.error(err.stack);
  }
})();

process.on('unhandledRejection', (reason, p) => {
  console.log('> Unhandled Promise Rejection');
  console.log(reason);
});

