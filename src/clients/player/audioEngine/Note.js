import FmSynth from "./FmSynth.js";
import AmSynth from "./AmSynth.js";
import Enveloppe from "./Enveloppe.js";
import decibelToLinear from "../math/decibelToLinear.js";

export default class Note {
  constructor(audioContext, noteDictOsc) {
    this.audioContext = audioContext;
    this.frequency = noteDictOsc.frequency;
    this.detuneBreakpoints = noteDictOsc.freqEnveloppe;
    this.velocity = noteDictOsc.velocity;
    this.duration = noteDictOsc.duration;
    this.envBreakpoints = noteDictOsc.enveloppe;
    this.metas = noteDictOsc.metas;

    this.output = this.audioContext.createGain();
    this.output.gain.value = decibelToLinear(this.velocity);
    this.modGain = this.audioContext.createGain();
    this.clickEnv = this.audioContext.createGain();
    this.clickEnv.gain.value = 0;

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

    this.noDetuneEnveloppe = [[0,0,0],[0,1,0]]; 
    if (this.detuneBreakpoints !== null && this.detuneBreakpoints !== undefined && this.detuneBreakpoints !== this.noDetuneEnveloppe) {
      this.detuneEnveloppe = new Enveloppe(this.synth.detune, this.duration, this.detuneBreakpoints, false);
    }
    if (this.envBreakpoints !== null && this.envBreakpoints !== undefined ) {
      this.enveloppe = new Enveloppe(this.modGain.gain, this.duration, this.envBreakpoints, true);
    }
    

    this.synth.connect(this.modGain);
    this.modGain.connect(this.clickEnv);
    this.clickEnv.connect(this.output);
  }

  connect(dest) {
    this.output.connect(dest);
  }

  play(time) {
    this.start(time);
    this.stop(time + this.duration);
  }

  start(time) {
    if (this.detuneBreakpoints !== null && this.detuneBreakpoints !== undefined && this.detuneBreakpoints !== this.noDetuneEnveloppe) {
      this.detuneEnveloppe.apply(time);
    }
    if (this.envBreakpoints !== null && this.envBreakpoints !== undefined ) {
      this.enveloppe.apply(time);
    }
    this.clickEnv.gain.setValueAtTime(0, time);
    this.clickEnv.gain.linearRampToValueAtTime(1, time + 0.01);
    this.synth.start(time);
  };

  stop(time) {
    this.synth.stop(time);
  };
}