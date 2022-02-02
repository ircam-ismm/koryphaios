import { AbstractExperience } from '@soundworks/core/client';
import { render, html, nothing } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import MasterBus from './audioEngine/MasterBus';
import StateMachine from './states/StateMachine.js';

const SKIP_SOUND_TEST = true;

/*
TODO : 

- Enveloppe : !! difference between decibel/linear
*/

class PlayerExperience extends AbstractExperience {
  constructor(client, config, $container, audioContext) {
    super(client);

    this.config = config;
    this.$container = $container;
    this.rafId = null;
    this.audioContext = audioContext;

    // require plugins if needed
    this.checkin = this.require('checkin');
    this.sync = this.require('sync');
    this.platform = this.require('platform');
    this.audioBufferLoader = this.require('audio-buffer-loader');
    this.filesystem = this.require('filesystem');

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    this.stateMachine = new StateMachine(this);

    this.playerState = await this.client.stateManager.create('player', { group: this.group });
    this.score = await this.client.stateManager.attach('score');

    this.playerState.subscribe(async updates => {
      if ('state' in updates) {
        this.stateMachine.setState(updates.state);
      }
      this.render();
    });

    //Filesystem for samples
    this.filesystem.subscribe(() => this.loadSoundbank());
    await this.loadSoundbank();
    // const loadedData = await this.audioBufferLoader.load({
    //   'drum-loop': 'samples/drum-loop.wav',
    // }, true);


    //Audio pipeline
    this.globalMasterBus = new MasterBus(this.audioContext, { panner: false, filter: true});
    const synths = ['sine', 'am', 'fm'];
    this.synthMasterBus = {};
    for (let i = 0; i < synths.length; i++) {
      const synthType = synths[i];
      this.synthMasterBus[synthType] = new MasterBus(this.audioContext, { panner: false, filter: true });
      this.synthMasterBus[synthType].connect(this.globalMasterBus.input);
    }
    // this.globalMasterBus.connect(this.audioContext.destination);

    this.synthMasterControls = {};
    // //State manager handling
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName.includes("BusControls")) {
        const groupControls = await this.client.stateManager.attach(schemaName, stateId);
        const synthType = groupControls.get('synthType');
        
        if (synthType === 'global') {
          const initValues = groupControls.getValues();
          for (const [key, value] of Object.entries(initValues)) {
            this.globalMasterBus[key] = value;
          }

          groupControls.subscribe(updates => {
            for (const [key, value] of Object.entries(updates)) {
              this.globalMasterBus[key] = value;
            }
          });
        } else {
          const initValues = groupControls.getValues();
          for (const [key, value] of Object.entries(initValues)) {
            this.synthMasterBus[synthType][key] = value;
          }

          groupControls.subscribe(updates => {
            for (const [key, value] of Object.entries(updates)) {
              this.synthMasterBus[synthType][key] = value;
            }
          });
        }
      }
    });
  
    await this.playerState.set({ id: this.checkin.get('index')});


    if (SKIP_SOUND_TEST) {
      this.playerState.set({ state: 'playground' });
    } else {
      this.playerState.set({ state: 'test' });
    }

    window.addEventListener('resize', () => this.render());
    this.render();
  }

  async loadSoundbank() {
    const soundbankTree = this.filesystem.get('soundbank');
    // format tree to create a simple data object
    const defObj = {};

    soundbankTree.children.forEach(leaf => {
      if (leaf.type === 'file') {
        defObj[leaf.name] = leaf.url;
      }
    });
    // load files and clear old cached buffers
    const loadedObject = await this.audioBufferLoader.load(defObj, true);
    // do something with your buffers
  }

  render() {
    render(html`
      <div class="main">
        ${this.stateMachine.state ?
        this.stateMachine.state.render() :
        nothing
      }
      </div>
    `, this.$container);
  }
}

export default PlayerExperience;
