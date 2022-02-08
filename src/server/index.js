import 'source-map-support/register';
import { Server } from '@soundworks/core/server';
import path from 'path';
import JSON5 from 'json5';
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

import dispatchStrategies from '../utils/dispatchStrategies.js';

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

    const score = await server.stateManager.create('score', {
      piece: config.app.piece, 
      composer: config.app.composer,
      concertMode: false,
    });
    const globalMasterControls = await server.stateManager.create('globalBusControls', {synthType: 'global'});
    const sineMasterControls = await server.stateManager.create('sineBusControls', {synthType: 'sine'});
    const amMasterControls = await server.stateManager.create('amBusControls', {synthType: 'am'});
    const fmMasterControls = await server.stateManager.create('fmBusControls', {synthType: 'fm'});

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
          break;
      }
    });

    // hook to parse `notes` from raw `chord`
    server.stateManager.registerUpdateHook('score', updates => {
      if ('chord' in updates) {
        const chord = updates.chord; // raw Max message
        // format lisp like lists from Bach
        for (let [key, value] of Object.entries(chord)) {
          if (Array.isArray(value) && value[0] === '[') {
            for (let i = 0; i < value.length - 1; i++) {
              if (value[i] != '[' && value[i] != ',' && value[i + 1] !== ']') {
                value.splice(i + 1, 0, ',');
              }
            }

            value = `[${value.join('')}]`;
            chord[key] = JSON.parse(value);
          } else if (!Array.isArray(value) && value !== null) {
            // if single note in the chord, make it an array so we are generic after this point
            chord[key] = [value];
          }
        }

        const notes = []; // formatted notes
        const numNotes = chord.frequencies.length;

        for (let i = 0; i < numNotes; i++) {
          // maybe could be more generic? e.g.:
          // const note = {};
          // for (let [key, value] of Object.entries(chord)) {
          //   note[key] = value === null ? null : value[i];
          // }
          const note = {
            frequency: chord.frequencies[i],
            freqEnveloppe: chord.freqEnvelops[i],
            velocity: chord.velocities[i],
            duration: chord.durations[i],
            enveloppe: chord.envelops[i],
          };

          if (Array.isArray(chord.synthTypes)) {
            switch (chord.synthTypes[i]) {
              case 'am':
                note['metas'] = {
                  synthType: 'am',
                  modFreq: chord.modFreqs[i], // mabe could have some default values there
                  modDepth: chord.modDepths[i], // mabe could have some default values there
                };
                break;
              case 'fm':
                note['metas'] = {
                  synthType: 'fm',
                  harmonicity: chord.harmonicities[i], // mabe could have some default values there
                  modIndex: chord.modIndices[i], // mabe could have some default values there
                };
              case 'sine':
                note['metas'] = { synthType: 'sine' };
                break;
              default:
                const defaultSynth = score.get('defaultSynth');
                if (defaultSynth in ['sine', 'fm', 'am', 'granular']) {// Put this list somewhere else in case we want to add more synth ? 
                  note['metas'] = { synthType: defaultSynth };
                }
                else {
                  note['metas'] = { synthType: 'sine' };
                }
                break;
            }
          } else {
            note['metas'] = { synthType: 'sine' };
          }

          notes.push(note);
        }

        return {
          notes,
          ...updates,
        };
      }
    });

    score.subscribe(async updates => {
      if (updates.hasOwnProperty('notes')) {
        if (players.size === 0) {
          return;
        }
        // console.log("note received", updates.notes.length);
        const dispatchStrategy = score.get('dispatchStrategy');
        const syncTime = sync.getSyncTime() + score.get('offsetSyncTime');
        const dispatchFunc = dispatchStrategies[dispatchStrategy];
        dispatchFunc(players, updates.notes, syncTime);
      }
    });

    score.subscribe(async updates => {
      if (updates.hasOwnProperty('defaultSynth')) {
        console.log(updates.defaultSynth);
      }
    });

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

