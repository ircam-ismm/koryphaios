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
    this._carrier.frequency.value = 0;
    this._carrier.type = this.params.carrType.default;
    
    this._carrFreqConst = this.audioContext.createConstantSource();
    this._carrFreqConst.offset.value = this.params.carrFreq.default;

    this._modAmp = this.audioContext.createGain();
    this._modAmp.gain.value = 0.0;

    this._modulator = this.audioContext.createOscillator();
    this._modulator.frequency.value = 0;
    this._modulator.type = this.params.modType.default;

    this._carrFreqGain = this.audioContext.createGain();
    this._carrFreqGain.gain.value = 0;

    this._harmonicityConst = this.audioContext.createConstantSource();
    this._harmonicityConst.offset.value = this.params.harmonicity.default;

    this._modFreqGain = this.audioContext.createGain();
    this._modFreqGain.gain.value = 0.0;

    this._modIndexConst = this.audioContext.createConstantSource();
    this._modIndexConst.offset.value = this.params.modIndex.default;
    


    this._carrier.connect(this._output);
    this._carrFreqConst.connect(this._carrier.frequency);
    this._carrFreqConst.connect(this._carrFreqGain.gain);

    this._modAmp.connect(this._carrier.frequency);
    this._modulator.connect(this._modAmp);

    this._carrFreqGain.connect(this._modulator.frequency);
    this._carrFreqGain.connect(this._modFreqGain.gain);
    this._harmonicityConst.connect(this._carrFreqGain);

    this._modFreqGain.connect(this._modAmp.gain);
    this._modIndexConst.connect(this._modFreqGain);

  }

  connect(dest) {
    this._output.connect(dest);
  }
  
  start(time) {
    this._carrier.start(time);
    this._modulator.start(time);
    this._carrFreqConst.start(time);
    this._harmonicityConst.start(time);
    this._modIndexConst.start(time);
  }

  stop(time) {
    this._carrier.stop(time);
    this._modulator.stop(time);
    this._carrFreqConst.stop(time);
    this._harmonicityConst.stop(time);
    this._modIndexConst.stop(time);
  }

  get frequency() {
    return this.params.carrFreq.value;
  }

  set frequency(f) {
    this.params.carrFreq.value = f;

    const now = this.audioContext.currentTime;
    this._carrFreqConst.offset.setTargetAtTime(f, now, 0.01);
  }

  set detune(value) {
    const now = this.audioContext.currentTime;
    this._carrier.detune.setTargetAtTime(value, now, 0.01);
  }

  get detuneParam() {
    return this._carrier.detune;
  }

  set carrType(type) {
    this.params.carrType.value = type;

    this._carrier.type = type;
  }

  get fmHarmonicityParam() {
    return this._harmonicityConst.offset;
  }

  get fmHarmonicity() {
    return this.params.harmonicity.value;
  }

  set fmHarmonicity(r) {
    this.params.harmonicity.value = r;

    const now = this.audioContext.currentTime;
    this._harmonicityConst.offset.setTargetAtTime(r, now, 0.01);
  }

  set modType(type) {
    this.params.modType.value = type;

    this._modulator.type = type;
  }

  get fmModIndexParam() {
    return this._modIndexConst.offset;
  }

  get fmModIndex() {
    return this.params.modIndex.value;
  } 

  set fmModIndex(val) {
    const {min, max} = this.params.modIndex;
    val = Math.min(max, Math.max(min, val));
    this.params.modIndex.value = val;

    const now = this.audioContext.currentTime;
    this._modIndexConst.offset.setTargetAtTime(val, now, 0.01);
  }
}
