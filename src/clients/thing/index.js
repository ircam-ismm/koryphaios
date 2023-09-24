import 'source-map-support/register.js';
import fs from 'node:fs';
import path from 'node:path';
import { Client } from '@soundworks/core/client.js';
import getConfig from '../../utils/getConfig.js';
import { AudioContext } from 'node-web-audio-api';

import pluginSyncFactory from '@soundworks/plugin-sync/client';
import pluginFilesystemFactory from '@soundworks/plugin-filesystem/client';
// import pluginAudioBufferLoaderFactory from '@soundworks/plugin-audio-buffer-loader/client';
import pluginCheckinFactory from '@soundworks/plugin-checkin/client';
import ThingExperience from './ThingExperience.js';
import Worker from 'web-worker';

// let script = fs.readFileSync(path.join(process.cwd(), 'src', 'clients', 'thing', 'worker.js'));
// script = script.toString().replace(/\n/g, '');

// const worker = new Worker(`data:application/javascript,${script}`);

// worker.addEventListener('message', e => {
//   console.log(e.data)  // "hiya!"
// });

// worker.postMessage('hello');


const audioContext = new AudioContext({ latencyHint: 'playback' });
// process.audioContext = audioContext;

// emulate several bugs for testing purposes
const ENV = process.env.ENV || 'default';
const NUM_CLIENTS = process.env.NUM_CLIENTS || 1;
const config = {
  ...getConfig(ENV),
  clientType: 'thing',
};

console.log(`
--------------------------------------------------------
- running ${NUM_CLIENTS} "${config.clientType}" in "${ENV}" environment
- connecting to server: ${config.env.serverIp}:${config.env.port}
- [pid: ${process.pid}]
--------------------------------------------------------
`);

async function launch(index) {
  try {
    const client = new Client();

    // -------------------------------------------------------------------
    // register plugins
    // -------------------------------------------------------------------
    client.pluginManager.register('sync', pluginSyncFactory, {
      getTimeFunction: () => audioContext.currentTime,
    });
    client.pluginManager.register('filesystem', pluginFilesystemFactory, {}, []);
    // client.pluginManager.register('audio-buffer-loader', pluginAudioBufferLoaderFactory, {
    //   supportedExtensionRegExp: /\.(wav|mp3|ogg|json)$/i,
    // }, []);
    client.pluginManager.register('checkin', pluginCheckinFactory, {}, []);
    client.pluginManager.register('audio-buffer-loader', pluginAudioBufferLoaderFactory, {}, []);
    client.pluginManager.register('filesystem', pluginFilesystemFactory, {}, []);
    client.pluginManager.register('synth-scripting', pluginScriptingFactory, {}, []);

    // -------------------------------------------------------------------
    // launch application
    // -------------------------------------------------------------------
    await client.init(config);
    initQoS(client);

    const experience = new ThingExperience(client, config, audioContext);

    // start all the things
    await client.start();
    experience.start();

  } catch(err) {
    console.log(err);
  }
}


// -------------------------------------------------------------------
// helpers & bootstrapping
// -------------------------------------------------------------------
function exitHandler(msg) {
  console.log(msg);

  if (NUM_CLIENTS === 1) {
    // https://www.gnu.org/software/libc/manual/html_node/Termination-Signals.html
    console.log('------------------------- TERM');
    process.kill(process.pid, 'SIGKILL');
  }
}

function initQoS(client) {
  client.socket.addListener('close', () => {
    console.log('---------------------------- Disconnected from server');
    exitHandler();
  });

  process.on('exit', () => exitHandler('none'));
  process.on('uncaughtException', err => exitHandler(err));
  process.on('unhandledRejection', err => exitHandler(err));
}

if (NUM_CLIENTS > 1) {
  console.clear();
}

for (let i = 0; i < NUM_CLIENTS; i++) {
  try {
    launch(i);
  } catch(err) {
    console.log(err.message);
  }
}
