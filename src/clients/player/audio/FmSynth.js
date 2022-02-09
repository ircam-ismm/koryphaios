export default class FmSynth {
  constructor(audioContext) {
    this.audioContext = audioContext;

    this.params = {
      carrFreq: {
        type: 'number',
        default: 220.0,
        value: 220.0,
      },
      carrType: {
        type: 'string',
        default: 'sine',
        value: 'sine',
      },
      harmonicity: {
        type: 'number',
        default: 1.0,
        value: 1.0,
      },
      modType: {
        type: 'string',
        default: 'sine',
        value: 'sine',
      },
      modIndex: {
        type: 'number',
        min: 0.0,
        max: 1.0,
        default: 0.0,
        value: 0.0,
      },
    };

    // create graph
    this._output = this.audioContext.createGain();

    this._carrier = this.audioContext.createOscillator();
    this._carrier.frequency.value = this.params.carrFreq.default;
    this._carrier.type = this.params.carrType.default;
    this._carrier.connect(this._output);

    this._modAmp = this.audioContext.createGain();
    this._modAmp.gain.value = 0.0;
    this._modAmp.connect(this._carrier.frequency);

    this._modulator = this.audioContext.createOscillator();
    this._modulator.frequency.value =
      this.params.carrFreq.default * this.params.harmonicity.default;
    this._modulator.type = this.params.modType.default;
    this._modulator.connect(this._modAmp);
  }

  connect(dest) {
    this._output.connect(dest);
  }
  
  start(time) {
    this._carrier.start(time);
    this._modulator.start(time);
  }

  stop(time) {
    this._carrier.stop(time);
    this._modulator.stop(time);
  }

  get detuneParam() {
    return this._carrier.detune;
  }

  set carrFreq(f) {
    this.params.carrFreq.value = f;

    const now = this.audioContext.currentTime;
    this.modIndex = this.params.modIndex.value;
    this.harmonicity = this.params.harmonicity.value;
    this._carrier.frequency.setTargetAtTime(f, now, 0.01);
  }

  set carrType(type) {
    this.params.carrType.value = type;

    this._carrier.type = type;
  }

  set harmonicity(r) {
    this.params.harmonicity.value = r;

    const now = this.audioContext.currentTime;
    const carrFreq = this.params.carrFreq.value;
    this.modIndex = this.params.modIndex.value;
    this._modulator.frequency.setTargetAtTime(carrFreq * r, now, 0.01);
  }

  set modType(type) {
    this.params.modType.value = type;

    this._modulator.type = type;
  }

  set modIndex(val) {
    this.params.modIndex.value = val;

    const now = this.audioContext.currentTime;
    const carrFreq = this.params.carrFreq.value;
    const harmonicity = this.params.harmonicity.value;
    this._modAmp.gain.setTargetAtTime(carrFreq * harmonicity * val, now, 0.01);
  }
}
