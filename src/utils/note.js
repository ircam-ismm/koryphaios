import FmSynth from "./fmSynth.js";
import AmSynth from "./amSynth.js";
import Enveloppe from "./enveloppe.js";
import decibelToLinear from "../math/decibelToLinear.js";

export default class Note {
  constructor(audioContext, noteDictOsc) {
    this.audioContext = audioContext;
    this.frequency = noteDictOsc.frequency;
    this.velocity = noteDictOsc.velocity;
    this.duration = noteDictOsc.duration;
    this.envBreakpoints = noteDictOsc.enveloppe;
    this.metas = noteDictOsc.metas;

    this.output = this.audioContext.createGain();
    this.output.gain.value = decibelToLinear(this.velocity);
    this.modGain = this.audioContext.createGain();

    switch (this.metas.synthType) {
      case 'sine':
        this.synth = this.audioContext.createOscillator();
        this.synth.frequency.value = this.frequency;
        break;
      case 'am':
        this.synth = new AmSynth(this.audioContext);
        this.synth.carrFreq = this.frequency;
        this.synth.modFreq = this.metas.modFreq;
        this.synth.modDepth = this.metas.modDepth;
        break;
      case 'fm':
        this.synth = new FmSynth(this.audioContext);
        this.synth.carrFreq = this.frequency;
        this.synth.harmonicity = this.metas.harmonicity;
        this.synth.modIndex = this.metas.modIndex;
        break;
      case 'granular':
        break;
    }

    this.enveloppe = new Enveloppe(this.modGain.gain, this.duration, this.envBreakpoints);

    this.synth.connect(this.modGain);
    this.modGain.connect(this.output);
  }

  connect(dest) {
    console.log(dest);
    this.output.connect(dest);
  }

  play(time) {
    this.start(time);
    this.stop(time + this.duration);
  }

  start(time) {
    this.enveloppe.apply(time);
    this.synth.start(time);
  };

  stop(time) {
    this.synth.stop(time);
  };
}