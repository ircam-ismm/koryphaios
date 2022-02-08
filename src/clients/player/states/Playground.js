import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';
import '@ircam/simple-components/sc-toggle.js';
import '@ircam/simple-components/sc-slider.js';
import GranularSynth from '../audio/GranularSynth.js';

export default class Playground extends State {


  async enter() {
    const buffer = this.context.audioBufferLoader.data['drum-loop.wav'];
    this.bufferDur = buffer.duration;

    this.granular = new GranularSynth(this.context.audioContext, buffer);
    this.gain = new GainNode(this.context.audioContext, {gain: 0.5}); 
    this.mute = new GainNode(this.context.audioContext, {gain: 0});
   
    this.granular.connect(this.gain);
    this.gain.connect(this.mute);
    this.mute.connect(this.context.audioContext.destination);

  }


  render() {
    const now = this.context.audioContext.currentTime;
    return html`
      <sc-toggle
        active
        @change="${e => this.mute.gain.setTargetAtTime(1 - this.mute.gain.value, now, 0.05)}"
      ></sc-toggle>
      <sc-slider
        min="0.02"
        max="1"
        value="0.05"
        @input="${e => this.granular.period = e.detail.value}"
      ></sc-slider>
      <sc-slider
        min="0.02"
        max="1"
        value="0.2"
        @input="${e => this.granular.duration = e.detail.value}"
      ></sc-slider>
      <sc-slider
        min="0"
        max="${this.bufferDur}"
        value="0"
        @input="${e => this.granular.position = e.detail.value}"
      ></sc-slider>

    `;
  }
}
