import { AbstractExperience } from '@soundworks/core/client';
import { render, html } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import Note from '../../utils/note';
import MasterBus from '../../utils/masterBus';

class PlayerExperience extends AbstractExperience {
  constructor(client, config, $container, audioContext) {
    super(client);

    this.config = config;
    this.$container = $container;
    this.rafId = null;
    this.audioContext = audioContext;

    // require plugins if needed
    this.checkin = this.require('checkin');
    this.group = 1 + Math.floor(Math.random() * 6);

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    //Audio pipeline
    this.globalMasterBus = new MasterBus(this.audioContext, { panner: false });
    this.groupMasterBus = new MasterBus(this.audioContext, { panner: false });
    this.busInput = this.audioContext.createGain();
    
    this.globalMasterBus.connect(this.audioContext.destination);
    this.groupMasterBus.connect(this.globalMasterBus.input);
    this.busInput.connect(this.groupMasterBus.input);
    

    //State manager handling
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName == "masterControls") {
        const groupControls = await this.client.stateManager.attach(schemaName, stateId);
        if (groupControls.get('group') === this.group) {
          this.groupMasterControls = groupControls;
        }
        else if (groupControls.get('group') === 0) {
          this.globalMasterControls = groupControls;
        }
      }
    });

    this.playerState = await this.client.stateManager.create('player', { group: this.group });
    await this.playerState.set({ id: this.checkin.get('index')});
    console.log('checkin id :', this.playerState.get('id'));  

    this.playerState.subscribe(updates => {
      if (updates.hasOwnProperty('note')) {
        console.log('received note :', updates.note);
        //play note or chords;
        if (Array.isArray(updates.note)) {
          for (let i = 0; i < updates.note.length; i++) {
            const note = new Note(this.audioContext, updates.note[i]);
            note.connect(this.audioContext.destination);
            note.play(this.audioContext.currentTime);
          }

        } else {
          const note = new Note(this.audioContext, updates.note);
          note.connect(this.audioContext.destination);
          note.play(this.audioContext.currentTime);
        }
      }
    });
    
    this.globalMasterControls.subscribe(updates => {
      for (const [key, value] of Object.entries(updates)) {
        this.globalMasterBus[key] = value;
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
