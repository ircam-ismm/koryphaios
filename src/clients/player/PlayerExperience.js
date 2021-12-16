import { AbstractExperience } from '@soundworks/core/client';
import { render, html } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import Note from '../../utils/note';

class PlayerExperience extends AbstractExperience {
  constructor(client, config, $container, audioContext) {
    super(client);

    this.config = config;
    this.$container = $container;
    this.rafId = null;
    this.audioContext = audioContext;

    // require plugins if needed

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    this.score = await this.client.stateManager.attach('score');

    const dictNote = {
      frequency: 1100,
      velocity: -20,
      duration: 5,
      enveloppe: [[0, 0, 0], [0.5, 1, -0.2], [1, 0, 0]],
      metas: {
        synthType: 'sine',
      }
    };

    this.score.subscribe(async updates => {
      if (updates.hasOwnProperty('message')){
        console.log(updates.message);
      }
      if (updates.hasOwnProperty('note')){
        const noteDict = updates.note;
        noteDict.enveloppe = JSON.parse(noteDict.enveloppe);
        console.log('note formatted : ', noteDict);
        const note = new Note(this.audioContext, updates.note);
        note.connect(this.audioContext.destination);
        note.play(this.audioContext.currentTime);
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
