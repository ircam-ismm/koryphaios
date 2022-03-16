// script my-synth
function getSynth() {
  return class CustomSynth {
    constructor(audioContext) {
      this.audioContext = audioContext;

      // Array to store all sound sources
      this.sources = [];

      // Create nodes 
      this.output = new GainNode(audioContext); 
      this._osc = new OscillatorNode(audioContext);
      this.sources.push(this._osc);

      // Connect nodes to output
      this._osc.connect(this.output);
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

    connect(dest) {
      this.output.connect(dest);
    }

    disconnect(dest) {
      this.output.disconnect(dest);
    }

    start(time) {
      this.sources.forEach(src => {src.start(time)});
    }

    stop(time) {
      this.sources.forEach(src => {src.stop(time)});
    }
  }
}