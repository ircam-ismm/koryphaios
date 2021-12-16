import { AbstractExperience } from '@soundworks/core/client';
import { render, html } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import '@ircam/simple-components/sc-bang.js';
import '@ircam/simple-components/sc-slider.js';
import '@ircam/simple-components/sc-toggle.js';
import Note from '../../utils/note';

class ControllerExperience extends AbstractExperience {
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

    this.globals = await this.client.stateManager.attach('globals');

    const dictNote = {
      frequency: 1100,
      velocity: -20,
      duration: 5,
      enveloppe: [[0, 0, 0], [0.5, 1, -0.2], [1, 0, 0]],
      metas: {
        synthType: 'sine',
      }
    }
    this.note = new Note(this.audioContext, dictNote);
    this.note.connect(this.audioContext.destination);


    // console.log(globals.get('volume'));

    // this.osc = this.audioContext.createOscillator();
    // this.osc.connect(this.audioContext.destination);



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

        <sc-bang
          @input="${e => this.note.play(this.audioContext.currentTime)}"
        ></sc-bang>

        <sc-slider
          min="-80"
          max="6"
          value="0"
          display-number
          @input="${e => this.globals.set({volume: e.detail.value})}"
      ></sc-slider>
      
      <sc-toggle
        @change="${e => this.globals.set({mute: e.detail.value})}"
      ></sc-toggle>
      `, this.$container);
    });
  }
}

export default ControllerExperience;
