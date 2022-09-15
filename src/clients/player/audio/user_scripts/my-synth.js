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
      this._osc.type = 'sawtooth';
      this.sources.push(this._osc);
      this._osc.connect(this.output);
      
      
      this._osc2 = new OscillatorNode(audioContext);
      this._osc2.type = 'triangle';
      this.sources.push(this._osc2);
      this._osc2.connect(this.output);
      
      
      
      
      this._lfoGain = new GainNode(audioContext);
      this._lfoGain.gain.value = 0;
      this._lfoGain.connect(this._osc.frequency);
      
  
      this.lfo = new OscillatorNode(audioContext);
      this.lfo.frequency.value = 1;
      this.sources.push(this.lfo);
      this.lfo.connect(this._lfoGain);
      
      
      
      
      
    }
    
    set detune(value) {
      const now = this.audioContext.currentTime;
      this._osc.detune.setTargetAtTime(value, now, 0.01);
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
      this._osc2.frequency.setTargetAtTime(value/2, now, 0.01);
    }
    
    set lfoGain(value) {
      if (value === undefined) {
        value = 0;
      }
      const now = this.audioContext.currentTime;
      this._lfoGain.gain.setTargetAtTime(value, now, 0.01);
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