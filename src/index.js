import "core-js/stable";
import "regenerator-runtime/runtime";
import MasterBus from "./utils/masterBus.js"; 
import AmSynth from "./utils/amSynth.js";
import FmSynth from "./utils/fmSynth.js";
import Enveloppe from "./utils/enveloppe.js";
import '@ircam/simple-components/sc-toggle.js';
import '@ircam/simple-components/sc-slider.js';
import '@ircam/simple-components/sc-text.js';
import { resumeAudioContext } from "@ircam/resume-audio-context";
import { render, html } from 'lit-html';

// application entry point
(async function main() {

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  await resumeAudioContext(audioContext);

  const out = audioContext.createGain();
  out.gain.value = 0.2;
  out.connect(audioContext.destination);

  // const masterBus = new MasterBus(audioContext);
  // const amSynth = new AmSynth(audioContext);
  // const fmSynth = new FmSynth(audioContext);

  // // console.log(masterBus.mute);
  // // masterBus.mute = true;
  // // console.log(masterBus.mute);

  const osc = audioContext.createOscillator();
  osc.frequency.value = 440;
  // // osc.type = 'triangle'

  const gain = audioContext.createGain();
  gain.gain.value = 0;

  const breakpoints = [[0, 0, 0], [0.5, 1, 0.595], [1, 0, 0.320]];

  const env = new Enveloppe(gain.gain, 1, breakpoints);

  osc.connect(gain);
  gain.connect(out);
  // // gain.connect(masterBus.input);
  // // masterBus.connect(out);
  // // amSynth.connect(out);
  // // fmSynth.connect(out);
  
  // const $buttons = document.body.querySelector('#buttons')
  // // masterBus.render($buttons);
  // renderFMsynth(fmSynth, $buttons, audioContext);

  // amSynth.start(audioContext.currentTime);
  env.apply(audioContext.currentTime);
  // env.test(audioContext.currentTime);
  osc.start(audioContext.currentTime);
  osc.stop(audioContext.currentTime+6);



  /*
  TEST
  */ 

  // class MyClass {
  //   constructor(a, {c = 57} = {}) {
  //     console.log(a);
  //     console.log(c);
  //   }
  // }

  // const b = new MyClass(2);

  // const l = [2,4,7];
  // const [a, b, c] = l;
  // console.log(b); 
  
  // for (let i = 0; i < 4; i++) {
  //   if (i === 3) {
  //     break;
  //   }
  //   console.log(i);
  // } 

  // line:  329.787234 0.59 0.586667 292.553191 0. 0.813333 196.808511 -0.345 0. 180.851064 0.72


  // const [duration, y0, y1, k] = [5*329.787234/1000, 0, 0.813333, 0.6];
  // const t = 5*221/1000;

  // //gen.curve
  // const [R, P] = [1/0.23, 5];
  // const D = 1/(Math.exp(R) - 1);
  // const f = 1 - Math.abs(k);
  // const p = Math.sign(k)*P*(Math.exp(f*R) - 1)*D;
  // const durInSamples = 44100*duration/1000;
  // const [alpha, beta] = [1/(Math.exp(1/p) - 1), 1/(durInSamples*p)];
  // const tInSamples = 44100*t/1000;
  // const val1 = y0 + alpha*(Math.exp(beta*tInSamples) - 1)*(y1-y0);
  // console.log("gen", val1);

  // // ej  
  // const gx = t/duration;
  // const hp = Math.pow((k + 1e-20) * 1.2, 0.41)*0.91;
  // const fp = hp / (1.0 - hp);
  // const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
  // const val = y0 + gp * (y1-y0);
  // console.log("ej", val);


}());

function renderAMsynth(synth, container, audioContext) {
  const now = audioContext.currentTime;

  const rafId = window.requestAnimationFrame(() => {
    render(html`
      <div>
        <sc-toggle
          @change="${e => e.detail.value ? synth.start(now) : synth.stop(now)}"
        ><sc-toggle>
      </div>

      <div>
        <sc-slider
          min="30"
          max="2000"
          value="220"
          display-number
          @input="${e => synth.carrFreq = e.detail.value}"
        ></sc-slider>
        <sc-text
              readonly
              width="150"
              value="Carrier frequency"
            ></sc-text>
      </div>

      <div>
        <sc-slider
          min="1"
          max="200"
          value="1"
          display-number
          @input="${e => synth.modFreq = e.detail.value}"
        ></sc-slider>
        <sc-text
              readonly
              width="150"
              value="Modulator Frequency"
            ></sc-text>
      </div>

      <div>
        <sc-slider
          min="0"
          max="1"
          value="0"
          display-number
          @input="${e => synth.modDepth = e.detail.value}"
        ></sc-slider>
        <sc-text
              readonly
              width="150"
              value="Mod depth"
            ></sc-text>
      </div>

      <div>
        <sc-text
          width="150"
          value="sine"
          @change="${e => synth.carrType = e.detail.value}"
        ></sc-text>
        <sc-text
          width="150"
          value="Carrier type"
          readonly
        ></sc-text>
      </div>

      <div>
        <sc-text
          width="150"
          value="sine"
          @change="${e => synth.modType = e.detail.value}"
        ></sc-text>
        <sc-text
          width="150"
          value="Modulator type"
          readonly
        ></sc-text>
      </div>
    `, container);
  });
}


function renderFMsynth(synth, container, audioContext) {
  const now = audioContext.currentTime;

  const rafId = window.requestAnimationFrame(() => {
    render(html`
      <div>
        <sc-toggle
          @change="${e => e.detail.value ? synth.start(now) : synth.stop(now)}"
        ><sc-toggle>
      </div>

      <div>
        <sc-slider
          min="30"
          max="2000"
          value="220"
          display-number
          @input="${e => synth.carrFreq = e.detail.value}"
        ></sc-slider>
        <sc-text
          readonly
          width="150"
          value="Carrier frequency"
        ></sc-text>
      </div>

      <div>
        <sc-slider
          min="0"
          max="200"
          value="1"
          display-number
          @input="${e => synth.harmonicity = e.detail.value}"
        ></sc-slider>
        <sc-text
          readonly
          width="150"
          value="Harmonicity"
        ></sc-text>
      </div>

      <div>
        <sc-slider
          min="0"
          max="25"
          value="0"
          display-number
          @input="${e => synth.modIndex = e.detail.value}"
        ></sc-slider>
        <sc-text
          readonly
          width="150"
          value="Mod index"
        ></sc-text>
      </div>

      <div>
        <sc-text
          width="150"
          value="sine"
          @change="${e => synth.carrType = e.detail.value}"
        ></sc-text>
        <sc-text
          width="150"
          value="Carrier type"
          readonly
        ></sc-text>
      </div>

      <div>
        <sc-text
          width="150"
          value="sine"
          @change="${e => synth.modType = e.detail.value}"
        ></sc-text>
        <sc-text
          width="150"
          value="Modulator type"
          readonly
        ></sc-text>
      </div>
    `, container);
  });
}