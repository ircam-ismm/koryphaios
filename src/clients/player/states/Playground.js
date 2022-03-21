import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';
import '@ircam/simple-components/sc-toggle.js';
import '@ircam/simple-components/sc-slider.js';
import '@ircam/simple-components/sc-text.js';
import GranularSynth from '../audio/GranularSynth.js';
import FmSynth from '../audio/FmSynth.js';
import AmSynth from '../audio/AmSynth.js';
import OscSynth from '../audio/OscSynth.js'
import AudioBus from '../audio/AudioBus.js';
import audioBusSchema from '../../../server/schemas/busControls'


export default class Playground extends State {


  async enter() {
    this.busParams = audioBusSchema;

    this.output = new GainNode(this.context.audioContext);

    this.oscBus = new AudioBus(this.context.audioContext);
    this.oscBus.mute = true;
    this.amBus = new AudioBus(this.context.audioContext);
    this.amBus.mute = true;
    this.fmBus = new AudioBus(this.context.audioContext);
    this.fmBus.mute = true;

    this.oscSynth = new OscSynth(this.context.audioContext);
    this.amSynth = new AmSynth(this.context.audioContext);
    this.fmSynth = new FmSynth(this.context.audioContext);


    this.output.connect(this.context.audioContext.destination);

    this.oscBus.connect(this.output);
    this.amBus.connect(this.output);
    this.fmBus.connect(this.output);

    this.oscSynth.connect(this.oscBus.input);
    this.amSynth.connect(this.amBus.input);
    this.fmSynth.connect(this.fmBus.input);


  }

  start() {
    this.oscSynth.start();
    this.amSynth.start();
    this.fmSynth.start();
  }


  render() {
    const now = this.context.audioContext.currentTime;
    return html`

      <sc-button
        text="Start"
        @input="${e => this.start()}"
      ></sc-button>

      <div>
        <h2>osc synth</h2>
        
        <div>
          <sc-text
            readonly
            value="mute"
          ></sc-text>
          <sc-toggle
            id="$mute"
            ?active="${this.oscBus.mute}"
            @change="${e => this.oscBus.mute = e.detail.value}"
          ></sc-toggle>
        </div>
        <div>
          <sc-text
            readonly
            value="volume - dB"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${this.busParams.volume.min}"
            max="${this.busParams.volume.max}"
            value="${this.oscBus.volume}"
            @input="${e => this.oscBus.volume = e.detail.value}"
          ></sc-slider>
        </div>
        <div>
          <sc-text
            readonly
            value="frequency - hz"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${40}"
            max="${5000}"
            value="${this.oscSynth.frequency}"
            @input="${e => this.oscSynth.frequency = e.detail.value}"
          ></sc-slider>
        </div>
      </div>

      <div>
        <h2>am synth</h2>

        <div>
          <sc-text
            readonly
            value="mute"
          ></sc-text>
          <sc-toggle
            id="$mute"
            .active="${this.amBus.mute}"
            @change="${e => this.amBus.mute = e.detail.value}"
          ></sc-toggle>
        </div>
        <div>
          <sc-text
            readonly
            value="volume - dB"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${this.busParams.volume.min}"
            max="${this.busParams.volume.max}"
            value="${this.amBus.volume}"
            @input="${e => this.amBus.volume = e.detail.value}"
          ></sc-slider>
        </div>
        <div>
          <sc-text
            readonly
            value="frequency - hz"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${40}"
            max="${5000}"
            value="${this.amSynth.carrFreq}"
            @input="${e => this.amSynth.carrFreq = e.detail.value}"
          ></sc-slider>
        </div>
        <div>
          <sc-text
            readonly
            value="modulation frequency - hz"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${0.01}"
            max="${1000}"
            value="${this.amSynth.modFreq}"
            @input="${e => this.amSynth.modFreq = e.detail.value}"
          ></sc-slider>
        </div>
        <div>
          <sc-text
            readonly
            value="modulation depth"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${0}"
            max="${1}"
            value="${this.amSynth.modDepth}"
            @input="${e => this.amSynth.modDepth = e.detail.value}"
          ></sc-slider>
        </div>
      </div>

      <div>
        <h2>fm synth</h2>

        <div>
          <sc-text
            readonly
            value="mute"
          ></sc-text>
          <sc-toggle
            id="$mute"
            .active="${this.fmBus.mute}"
            @change="${e => this.fmBus.mute = e.detail.value}"
          ></sc-toggle>
        </div>
        <div>
          <sc-text
            readonly
            value="volume - dB"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${this.busParams.volume.min}"
            max="${this.busParams.volume.max}"
            value="${this.fmBus.volume}"
            @input="${e => this.fmBus.volume = e.detail.value}"
          ></sc-slider>
        </div>
        <div>
          <sc-text
            readonly
            value="frequency - hz"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${40}"
            max="${5000}"
            value="${this.fmSynth.carrFreq}"
            @input="${e => this.fmSynth.carrFreq = e.detail.value}"
          ></sc-slider>
        </div>
        <div>
          <sc-text
            readonly
            value="harmonicity"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${0.01}"
            max="${50}"
            value="${this.fmSynth.harmonicity}"
            @input="${e => this.fmSynth.harmonicity = e.detail.value}"
          ></sc-slider>
        </div>
        <div>
          <sc-text
            readonly
            value="modulation index"
          ></sc-text>
          <sc-slider
            id="$volume"
            width="400"
            display-number
            min="${0}"
            max="${1}"
            value="${this.fmSynth.modIndex}"
            @input="${e => this.fmSynth.modIndex = e.detail.value}"
          ></sc-slider>
        </div>
      </div>

    `;
  }
}
