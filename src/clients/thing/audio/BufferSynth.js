export default class BufferSynth {
  constructor(audioContext) {
    this.audioContext = audioContext;

    // this.baseFrequency = 261.63 // C4

    this._output = this.audioContext.createGain();
    this._bufferNode = this.audioContext.createBufferSource();

    this._bufferNode.connect(this._output);
  }

  set buffer(buf) {
    this._bufferNode.buffer = buf;
  }

  get detuneParam() {
    return this._bufferNode.detune;
  }

  get frequency() {
    // return this._bufferNode.playbackRate.value*this.baseFrequency;
  }

  set frequency(value) {
    // const pbRate = value/this.baseFrequency;

    // const now = this.audioContext.currentTime;
    // this._bufferNode.playbackRate.setTargetAtTime(pbRate, now, 0.01);
  }

  get playbackRateParam() {
    return this._bufferNode.playbackRate
  }

  get playbackRate() {
    return this._bufferNode.playbackRate.value;
  }

  set playbackRate(value) {
    this._bufferNode.playbackRate.setTargetAtTime(value, now, 0.01);
  }


  connect(dest) {
    this._output.connect(dest);
  }

  disconnect(dest) {
    this._output.disconnect(dest);
  }

  start(time) {
    this._bufferNode.start(time);
  }

  stop(time) {
    this._bufferNode.stop(time);
  }
}
