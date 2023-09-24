import { AbstractExperience } from '@soundworks/core/client';
import { render, html, nothing } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import masters from 'waves-masters';

import AudioBus from './audio/AudioBus';
import OscSynth from './audio/OscSynth';
import FmSynth from './audio/FmSynth';
import AmSynth from './audio/AmSynth';
import BufferSynth from './audio/BufferSynth';

import StateMachine from './states/StateMachine.js';


const hash = window.location.hash.replace(/^#/, '');


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
    this.synthScripting = this.require('synth-scripting');

    this.render = this.render.bind(this);

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    this.stateMachine = new StateMachine(this);

    this.playerState = await this.client.stateManager.create('player', { 
      group: this.group,
      hash: hash
    });
    this.playerState.subscribe(async updates => this.render());

    this.score = await this.client.stateManager.attach('score');
    this.score.subscribe(async updates => {
      if ('state' in updates) {
        this.stateMachine.setState(updates.state);
      }

      this.render();
    });

    // create audio pipeline
    this.masterBus = new AudioBus(this.audioContext, this.score.get('masterBusConfig'));
    this.masterBus.connect(this.audioContext.destination);
    // bus for each synths
    this.synthBuses = {};

    ['osc', 'am', 'fm', 'buffer'].forEach(synthType => {
      this.synthBuses[synthType] = new AudioBus(this.audioContext, this.score.get('synthBusConfig'));
      this.synthBuses[synthType].connect(this.masterBus.input);
    });

    // test buses
    // ['osc', 'am', 'fm'].forEach((synthType, index) => {
    //   console.log('test bus:', synthType, 200 * (index + 1));
    //   const now = this.audioContext.currentTime;
    //   const osc = this.audioContext.createOscillator();
    //   osc.connect(this.synthBuses[synthType].input);
    //   // osc.connect(this.masterBus.input);
    //   osc.frequency.value = 200 * (index + 1);
    //   osc.start(now + index);
    //   osc.stop(now + index + 1);
    // });
    
    //constructors for synths
    this.synthConstructors = {
      'osc': OscSynth,
      'am': AmSynth,
      'fm': FmSynth,
      'buffer': BufferSynth,
    }
    

    const defaultSynths = Object.keys(this.synthConstructors);

    const list = this.synthScripting.getList();
    for (let i = 0; i < list.length; i++) {
      const scriptName = list[i];
      if (!Object.keys(this.synthConstructors).includes(scriptName)) {
        const script = await this.synthScripting.attach(scriptName);
        const ctor = script.execute(script);
        this.synthConstructors[scriptName] = ctor;

        this.synthBuses[scriptName] = new AudioBus(this.audioContext, this.score.get('synthBusConfig'));
        this.synthBuses[scriptName].connect(this.masterBus.input);

        script.subscribe(updates => {
          if (!updates.error) {
            const ctor = script.execute();
            this.synthConstructors[scriptName] = ctor;
          }
        });
      }
    } 

    this.synthScripting.observe(async () => {
      const scriptList = this.synthScripting.getList();
      const existingSynths = Object.keys(this.synthConstructors);

      //Adding new synths
      for (let i = 0; i < scriptList.length; i++) {
        const scriptName = scriptList[i];
        if (!existingSynths.includes(scriptName)) {
          const script = await this.synthScripting.attach(scriptName);
          const ctor = script.execute(script);
          this.synthConstructors[scriptName] = ctor;

          this.synthBuses[scriptName] = new AudioBus(this.audioContext, this.score.get('synthBusConfig'));
          this.synthBuses[scriptName].connect(this.masterBus.input);

          script.subscribe(updates => {
            if (!updates.error) {
              const ctor = script.execute();
              this.synthConstructors[scriptName] = ctor;
            }
          });
        }
      } 

      //Deleting 
      for (let i = 0; i < existingSynths.length; i++) {
        const synthName = existingSynths[i];
        if (!defaultSynths.includes(synthName) && !scriptList.includes(synthName)) {
          delete this.synthConstructors[synthName];
          delete this.synthBuses[synthName];
        }
      }

    });


    


    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName.includes("BusControls")) {
        const state = await this.client.stateManager.attach(schemaName, stateId, nodeId);
        const name = state.get('name');
        const audioBus = name === 'master' ? this.masterBus : this.synthBuses[name];
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

    // filesystem for samples
    this.filesystem.subscribe(() => this.loadSoundbank());
    await this.loadSoundbank();

    // local time scheduler
    const getTimeFunction = () => this.audioContext.currentTime;
    this.scheduler = new masters.Scheduler(getTimeFunction);
  
    // is this used?
    await this.playerState.set({ id: this.checkin.get('index')});

    const state = this.score.get('state');
    this.stateMachine.setState(state);

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
      <div class="main" style="padding: 20px;">
        ${this.stateMachine.state ?
        this.stateMachine.state.render() :
        nothing
      }
      </div>
    `, this.$container);
  }
}

export default PlayerExperience;
