import Enveloppe from "./enveloppe.js";

export default class Note {
  constructor(audioContext, noteDictOsc) {
    this.audioContext = audioContext;
    this.frequency = noteDictOsc.frequency;
    this.velocity = noteDictOsc.velocity;
    this.duration = noteDictOsc.duration;
    this.envBreakpoints = noteDictOsc.enveloppe;
    this.metas = noteDictOsc.metas;

    this.output = this.audioContext.createGain();
    // this.output.gain.value = functionOfVelocity
    this.modGain = this.audioContext.createGain();

    switch (this.metas.synthType) {
      case 'sine':
        this.synth = this.audioContext.createOscillator();
        this.synth.frequency = this.frequency;
        break;
      case 'am':
        break;
      case 'fm':
        break;
      case 'granular':
        break;
    }

    this.enveloppe = new Enveloppe(this.modGain.gain, this.duration, this.envBreakpoints);

    this.synth.connect(this.modGain);
    this.modGain.connect(this.output);
  }

  connect(dest) {
    this.output.connect(dest);
  }

  start(time) {
    this.enveloppe.apply(time);
    this.synth.start(time);
    this.synth.stop(time + this.duration) //??
  };

  stop(time) {
    this.synth.stop(time);
  };
}