import { AbstractExperience } from '@soundworks/core/client';
import { render, html } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import Note from '../../utils/note';
import MasterBus from '../../utils/masterBus';

/*
TODO : 

- Enveloppe : differencier decibel/linéaire
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

    
    this.group = 1 + Math.floor(Math.random() * 6);

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    //Audio pipeline
    this.globalMasterBus = new MasterBus(this.audioContext, { panner: false, filter: true});
    const synths = ['sine', 'am', 'fm'];
    this.synthMasterBus = {};
    for (let i = 0; i < synths.length; i++) {
      const synthType = synths[i];
      this.synthMasterBus[synthType] = new MasterBus(this.audioContext, { panner: false });
      this.synthMasterBus[synthType].connect(this.globalMasterBus.input);
    }
    this.globalMasterBus.connect(this.audioContext.destination);
    

    this.synthMasterControls = {};
    //State manager handling
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName == "masterControls") {
        const synthControls = await this.client.stateManager.attach(schemaName, stateId);
        const synthType = synthControls.get('synth');
        this.synthMasterControls[synthType] = synthControls;

        synthControls.subscribe(updates => {
          if (synthType === 'global') {
            for (const [key, value] of Object.entries(updates)) {
              this.globalMasterBus[key] = value;
            }
          }
          else {
            for (const [key, value] of Object.entries(updates)) {
              this.synthMasterBus[synthType][key] = value;
            }
          }
        });
      }
    });

    this.playerState = await this.client.stateManager.create('player', { group: this.group });
    await this.playerState.set({ id: this.checkin.get('index')});
    console.log('checkin id :', this.playerState.get('id'));  

    this.playerState.subscribe(updates => {
      if (updates.hasOwnProperty('note')) {
        console.log('received note :', updates.note);
        const playTime = this.sync.getLocalTime(updates.playTime)
        //play note or chords;
        if (Array.isArray(updates.note)) {
          for (let i = 0; i < updates.note.length; i++) {
            const note = new Note(this.audioContext, updates.note[i]);
            note.connect(this.synthMasterBus[updates.note[i].metas.synthType].input);
            note.play(playTime);
          }

        } else {
          const note = new Note(this.audioContext, updates.note);
          note.connect(this.synthMasterBus[updates.note.metas.synthType].input);
          note.play(playTime);
        }
      }
    });

    // const testSine = this.audioContext.createOscillator();
    // testSine.type = 'square';
    // testSine.connect(this.globalMasterBus.input);
    // testSine.start();


    window.addEventListener('resize', () => this.render());
    this.render();
  }

  render() {
    // debounce with requestAnimationFrame
    window.cancelAnimationFrame(this.rafId);

    this.rafId = window.requestAnimationFrame(() => {
      render(html`
        <div style="padding: 20px">
          <h1 style="margin: 20px 0">${this.client.type} [id: ${this.client.id}]</h1>
        </div>
      `, this.$container);
    });
  }
}

export default PlayerExperience;
