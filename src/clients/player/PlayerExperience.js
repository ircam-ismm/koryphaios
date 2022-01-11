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
    this.platform = this.require('platform');

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
      this.synthMasterBus[synthType] = new MasterBus(this.audioContext, { panner: false, filter: true });
      this.synthMasterBus[synthType].connect(this.globalMasterBus.input);
    }
    this.globalMasterBus.connect(this.audioContext.destination);
    
    this.activeNotes = new Set();

    // this.synthMasterControls = {};
    //State manager handling
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName.includes("BusControls")) {
        const synthType = schemaName.substring(0, schemaName.indexOf("BusControls"));
        const groupControls = await this.client.stateManager.attach(schemaName, stateId);
        
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
            this.activeNotes.add(note); //how/when to remove it ?
          }

        } else {
          const note = new Note(this.audioContext, updates.note);
          note.connect(this.synthMasterBus[updates.note.metas.synthType].input);
          note.play(playTime);
          this.activeNotes.add(note);
        }
      }
    });

    this.score = await this.client.stateManager.attach('score');
    this.score.subscribe(updates => {
      if (updates.hasOwnProperty('transport')) {
        if (updates.transport === 'stop') {
          this.activeNotes.forEach(note => note.stop(this.audioContext.currentTime));
          this.activeNotes.clear();   
        }
      }
    });



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
