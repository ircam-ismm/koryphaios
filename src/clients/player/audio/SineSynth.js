export default class SineSynth {
  constructor(audioContext) {
    this.audioContext = audioContext;

    this._osc = audioContext.createOscillator();
  }

  get detuneParam() {
    return this._osc.detune;
  }

  get frequency() {
    return this._osc.frequency.value;
  }

  set frequency(value) {
    const now = this.audioContext.currentTime;
    this._osc.frequency.setTargetAtTime(value, now, 0.01);
  }

  set oscType(type) {
    this._osc.type = type;
  }

  connect(dest) {
    this._osc.connect(dest);
  }

  disconnect(dest) {
    this._osc.disconnect(dest);
  }

  start(time) {
    this._osc.start(time);
  }

  stop(time) {
    this._osc.stop(time);
  }
}
