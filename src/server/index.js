import 'source-map-support/register';
import { Server } from '@soundworks/core/server';
import path from 'path';
import { readdir } from 'fs/promises';
import JSON5 from 'json5';
import serveStatic from 'serve-static';
import compile from 'template-literal';

import { StateManagerOsc } from '@soundworks/state-manager-osc';

import scoreSchema from './schemas/score.js';
import playerSchema from './schemas/player.js';
import scriptSchema from './schemas/script.js';
import busControlsSchema from './schemas/busControls.js';

import pluginPlatformFactory from '@soundworks/plugin-platform/server';
import pluginSyncFactory from '@soundworks/plugin-sync/server';
import pluginCheckinFactory from '@soundworks/plugin-checkin/server';
import pluginAudioBufferLoaderFactory from "@soundworks/plugin-audio-buffer-loader/server";
import pluginFilesystemFactory from '@soundworks/plugin-filesystem/server';
import pluginScriptingFactory from '@soundworks/plugin-scripting/server';


import PlayerExperience from './PlayerExperience.js';
import ControllerExperience from './ControllerExperience.js';

import dispatchStrategies from './dispatchStrategies.js';

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
server.pluginManager.register('synth-scripting', pluginScriptingFactory, {
  // default to `.data/scripts`
  directory: 'src/clients/player/audio/user_scripts', //also written in script schema
}, []);


// -------------------------------------------------------------------
// register schemas
// -------------------------------------------------------------------
// server.stateManager.registerSchema(name, schema);
server.stateManager.registerSchema('score', scoreSchema);
server.stateManager.registerSchema('player', playerSchema);
server.stateManager.registerSchema('script', scriptSchema);
server.stateManager.registerSchema('masterBusControls', busControlsSchema);
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
    const synthScripting = server.pluginManager.get('synth-scripting');

    const score = await server.stateManager.create('score', {
      piece: config.app.piece, 
      composer: config.app.composer,
      concertMode: false,
      dispatchStrategies: Object.keys(dispatchStrategies),
    });

    const synthScript = await server.stateManager.create('script');

    const busStates = {};
    // this is a good example for state-manager-osc improvements
    const masterBusControls = await server.stateManager.create('masterBusControls', {
      name: 'master',
    });
    busStates['master'] = masterBusControls;

    const sineBusControls = await server.stateManager.create('sineBusControls', {
      name: 'sine',
    });
    busStates['sine'] = sineBusControls;

    const amBusControls = await server.stateManager.create('amBusControls', {
      name: 'am',
    });
    busStates['am'] = amBusControls;

    const fmBusControls = await server.stateManager.create('fmBusControls', {
      name: 'fm',
    });
    busStates['fm'] = fmBusControls;


    const playerExperience = new PlayerExperience(server, 'player');
    const controllerExperience = new ControllerExperience(server, 'controller');

    // observe players connections
    const players = new Set();

    server.stateManager.observe(async (schemaName, stateId, nodeId) => {
      switch (schemaName) {
        case 'player':
          const playerState = await server.stateManager.attach(schemaName, stateId);
          playerState.onDetach(() => {
            players.delete(playerState);
          });

          players.add(playerState);

          // for testing
          // setTimeout(() => {
          //   playerState.set({ notes: [{
          //     frequency: 285.30470202322215,
          //     detune: [ [0, 0, 0], [1, 1200, 0] ],
          //     velocity: -4.691440024499614,
          //     duration: 2.984859375046442,
          //     // envelop: null,
          //     envelope: [ [0, -80, 0], [0.1, 0, 0], [1., -80, 0.] ],
          //     synthType: null,
          //     amModFreq: null,
          //     amModDepths: null,
          //     fmHarmonicity: 18.01399230969316,
          //     fmModIndex: 4.206996917774388
          //   }]});
          // }, 1000);
          break;
      }
    });

    // hook to parse `notes` from raw `chord`
    server.stateManager.registerUpdateHook('score', (updates, currentState) => {
      if ('chord' in updates) {
        const chord = updates.chord; // raw Max message
        // format lisp like lists from Bach
        for (let [key, value] of Object.entries(chord)) {
          if (Array.isArray(value) && value[0] === '[') {
            if (value[1] === '[') {
              for (let i = 0; i < value.length - 1; i++) {
                if (value[i] != '[' && value[i] != ',' && value[i + 1] !== ']') {
                  value.splice(i + 1, 0, ',');
                }
              }

              value = `[${value.join('')}]`;

              chord[key] = JSON.parse(value);
            } else {
              let i = 0;
              while (i < value.length) {
                if (value[i] === '[' || value[i] === ']') {
                  value.splice(i, 1);
                } else {
                  i++;
                }
              }
              
              chord[key] = value;

            }
          } else if (!Array.isArray(value) && value !== null) {
            // if single note in the chord, make it an array so we are generic after this point
            chord[key] = [value];
          }
        }


        const notes = []; // formatted notes
        let numNotes = null;
        // find first array in list
        for (let name in chord) {
          if (Array.isArray(chord[name])) {
            numNotes = chord[name].length;
            break;
          }
        }

        for (let i = 0; i < numNotes; i++) {
          // maybe could be more generic? e.g.:
          const note = {};

          for (let [key, value] of Object.entries(chord)) {
            // note[key] = value === [] ? null : value
            note[key] = value === null ? null : value[i] !== undefined ? value[i] : null;// to check
          }
          
          if (note.synthType === null) {
            note.synthType = score.get('defaultSynth');
          }

          notes.push(note);
        }

        return {
          notes,
          ...updates,
        };
      }

      if ('state' in updates) {
        // if not in concert mode, force 'performace' state
        if (!currentState.concertMode) {
          return { state: 'performance' };
        }
      }

      if ('concertMode' in updates) {
        // if not in concert mode, force 'performace' state
        if (!updates.concertMode) {
          return {
            state: 'performance',
            ...updates,
          };
        }
      }

      if ('defaultSynth' in updates) {
        // Info received from markers in bach, keep only existing synth as user
        // may use markers for other purpose
        const availableSynth = ['sine', 'am', 'fm'].concat(synthScripting.getList());
        if (!availableSynth.includes(updates.defaultSynth)) {
          return {
            ...updates,
            defaultSynth: currentState.defaultSynth,
          };
        } 
      } 
    });

    score.subscribe(async updates => {
      if ('notes' in updates) {
        if (players.size === 0) {
          return;
        }

        const dispatchStrategy = score.get('dispatchStrategy');
        const syncTime = sync.getSyncTime() + score.get('offsetSyncTime');
        const dispatchFunc = dispatchStrategies[dispatchStrategy];
        dispatchFunc(players, updates.notes, syncTime);
      }
    });

    // do that here instead of a initialization to pass through update hook
    score.set({ state: 'welcome' })


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

    //Create new bus in case of custom scripts
    const list = synthScripting.getList();
    for (let i = 0; i < list.length; i++) {
      const scriptName = list[i];
      if (!Object.keys(busStates).includes(scriptName)) {
        server.stateManager.registerSchema(`${scriptName}BusControls`, busControlsSchema);
        const scriptBusControls = await server.stateManager.create(`${scriptName}BusControls`, {
          name: scriptName,
        });
        busStates[scriptName] = scriptBusControls;
      }
    }

    synthScripting.observe(async () => {
      const scriptList = scripting.getList();
      const existingSynths = Object.keys(busStates);
      const defaultSynths = ['sine', 'am', 'fm'];

      for (let i = 0; i < scriptList.length; i++) {
        const scriptName = scriptList[i];
        if (!existingSynths.includes(scriptName)) {
          server.stateManager.registerSchema(`${scriptName}BusControls`, busControlsSchema);
          const scriptBusControls = await server.stateManager.create(`${scriptName}BusControls`, {
            name: scriptName,
          });
          busStates[scriptName] = scriptBusControls;
        }
      }

      for (let i = 0; i < existingSynths.length; i++) {
        const synthName = existingSynths[i];
        if (!defaultSynths.includes(synthName) && !scriptList.includes(synthName)) {
          delete busStates[synthName];
          server.stateManager.deleteSchema(`${synthName}BusControls`);
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



