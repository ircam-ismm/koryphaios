import { AbstractExperience } from '@soundworks/core/client';
import { render, html, nothing } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import AudioBus from './audio/AudioBus';
import StateMachine from './states/StateMachine.js';

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

    this.render = this.render.bind(this);

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

    // filesystem for samples
    this.filesystem.subscribe(() => this.loadSoundbank());
    await this.loadSoundbank();

    // create audio pipeline
    this.masterBus = new AudioBus(this.audioContext, { panning: false, filter: true });
    this.masterBus.connect(this.audioContext.destination);
    // bus for each synths
    this.synthBuses = {};

    ['sine', 'am', 'fm'].forEach(synthType => {
      this.synthBuses[synthType] = new AudioBus(this.audioContext, { panning: false, filter: false });
      this.synthBuses[synthType].connect(this.masterBus.input);
    });

    // test buses
    // ['sine', 'am', 'fm'].forEach((synthType, index) => {
    //   console.log('test bus:', synthType, 200 * (index + 1));
    //   const now = this.audioContext.currentTime;
    //   const osc = this.audioContext.createOscillator();
    //   osc.connect(this.synthBuses[synthType].input);
    //   // osc.connect(this.masterBus.input);
    //   osc.frequency.value = 200 * (index + 1);
    //   osc.start(now + index);
    //   osc.stop(now + index + 1);
    // });

    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName.includes("BusControls")) {
        const state = await this.client.stateManager.attach(schemaName, stateId);
        const name = state.get('name');
        const audioBus = name === 'global' ? this.masterBus : this.synthBuses[name];
        // init with current values
        for (const [key, value] of Object.entries(state.getValues())) {
          if (key in audioBus) {
            audioBus[key] = value;
          }
        }

        state.subscribe(updates => {
          for (const [key, value] of Object.entries(updates)) {
            if (key in audioBus) {
              audioBus[key] = value;
            }
          }
        });
      }
    });
  
    // is this used?
    await this.playerState.set({ id: this.checkin.get('index')});

    if (this.score.get('concertMode')) {
      const state = this.score.get('state');
      this.playerState.set({ state });
    } else {
      this.playerState.set({ state: 'playing' });
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
