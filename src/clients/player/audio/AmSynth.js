export default class AmSynth {
  constructor(audioContext) {
    this.audioContext = audioContext;

    //User-set parameters
    this.userParams = {
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
      modFreq: {
        type: 'number',
        default: 1.0,
        value: 1.0,
      },
      modType: {
        type: 'string',
        default: 'sine',
        value: 'sine',
      },
      modDepth: {
        type: 'number',
        min: 0.0,
        max: 1.0,
        default: 0.0,
        value: 0.0,
      },
    };

    // create graph
    this._output = new GainNode(this.audioContext);

    this._modulated = new GainNode(this.audioContext);
    
    this._carrier = new OscillatorNode(this.audioContext);
    this._carrier.frequency.value = this.userParams.carrFreq.default;
    this._carrier.type = this.userParams.carrType.default;

    this._scale = new GainNode(this.audioContext);
    this._scale.gain.value = 0.5;

    this._depth = new GainNode(this.audioContext);
    this._depth.gain.value = 0;

    this._modulator = new OscillatorNode(this.audioContext);
    this._modulator.frequency.value = 0;
    this._modulator.type = this.userParams.modType.default;

    this._modFreqConst = new ConstantSourceNode(this.audioContext);
    this._modFreqConst.offset.value = this.userParams.modFreq.default;

    this._offset = new ConstantSourceNode(this.audioContext);
    this._offset.offset.value = 1;

    this._gainMinus = new GainNode(this.audioContext);
    this._gainMinus.gain.value = -1;

    this._modDepthConst = new ConstantSourceNode(this.audioContext);
    this._modDepthConst.offset.value = this.userParams.modDepth.default;

    
    this._modulated.connect(this._output);
    this._carrier.connect(this._modulated);
    
    this._scale.connect(this._modulated.gain);
    this._depth.connect(this._scale);
    this._modulator.connect(this._depth);
    this._modFreqConst.connect(this._modulator.frequency);
    
    this._offset.connect(this._scale);
    this._gainMinus.connect(this._offset.offset);
    this._modDepthConst.connect(this._gainMinus);
    this._modDepthConst.connect(this._depth.gain);
  }

  connect(dest) {
    this._output.connect(dest);
  }
  
  start(time) {
    this._carrier.start(time);
    this._modulator.start(time);
    this._offset.start(time);
    this._modFreqConst.start(time);
    this._modDepthConst.start(time);
  }

  stop(time) {
    this._carrier.stop(time);
    this._modulator.stop(time);
    this._offset.stop(time);
    this._modFreqConst.stop(time);
    this._modDepthConst.stop(time);
  }

  get frequency() {
    return this.userParams.carrFreq.value;
  }

  set frequency(f) {
    this.userParams.carrFreq.value = f;
    const now = this.audioContext.currentTime;
    this._carrier.frequency.setTargetAtTime(f, now, 0.01);
  }

  set detune(value) {
    const now = this.audioContext.currentTime;
    this._carrier.detune.setTargetAtTime(value, now, 0.01);
  }

  get detuneParam() {
    return this._carrier.detune;
  }

  set carrType(type) {
    this.userParams.carrType.value = type;
    this._carrier.type = type;
  }

  get amModFreqParam() {
    return this._modFreqConst.offset;
  }

  get amModFreq() {
    return this.userParams.modFreq.value;
  }

  set amModFreq(f) {
    this.userParams.modFreq.value = f;
    const now = this.audioContext.currentTime;
    this._modFreqConst.offset.setTargetAtTime(f, now, 0.01);
  }

  set modType(type) {
    this.userParams.modType.value = type;
    this._modulator.type = type;
  }

  get amModDepthParam() {
    return this._modDepthConst.offset;
  }

  get amModDepth() {
    return this.userParams.modDepth.value;
  }

  set amModDepth(depth) {
    const { min, max } = this.userParams.modDepth;
    depth = Math.min(max, Math.max(min, depth));
    this.userParams.modDepth.value = depth;

    const now = this.audioContext.currentTime;
    this._modDepthConst.offset.setTargetAtTime(depth, now, 0.01);
  }

}
