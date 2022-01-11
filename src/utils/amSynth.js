/* 
- mieux ecrire param par defaut ?
- check si c'est la meme implémentation que dans la v1
*/


export default class AmSynth{
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

    //Creating nodes
    this._carrier = this.audioContext.createOscillator();
    this._carrier.frequency.value = this.userParams.carrFreq.default;
    this._carrier.type = this.userParams.carrType.default;
    this._modulator = this.audioContext.createOscillator();
    this._modulator.frequency.value = this.userParams.modFreq.default;
    this._modulator.type = this.userParams.modType.default;
    this._depth = this.audioContext.createGain();
    this._depth.gain.value = this.userParams.modDepth.default;
    this._offset = this.audioContext.createConstantSource();
    this._offset.offset.value = 1 - this.userParams.modDepth.default;
    this._scale = this.audioContext.createGain();
    this._scale.gain.value = 0.5;
    this._gain = this.audioContext.createGain();
    this._output = this.audioContext.createGain();

    this.modDepth = 0;

    //Connections
    this._carrier.connect(this._gain);
    this._gain.connect(this._output);
    
    this._modulator.connect(this._depth);
    this._depth.connect(this._scale);
    this._offset.connect(this._scale);
    this._scale.connect(this._gain.gain);

    //getters
    // Object.keys(this.userParams).forEach(key => {
    //   Object.defineProperty(this, key, {
    //     get() {
    //       return this.userParams[key].value;
    //     }
    //   });
    // });
  }

  connect(dest) {
    this._output.connect(dest);
  }
  
  start(time) {
    this._carrier.start(time);
    this._modulator.start(time);
    this._offset.start(time);
  }

  stop(time) {
    this._carrier.stop(time);
    this._modulator.stop(time);
    this._offset.stop(time);
  }

  get detune() {
    return this._carrier.detune;
  }

  set carrFreq(f) {
    this.userParams.carrFreq.value = f;
    const now = this.audioContext.currentTime;
    this._carrier.frequency.setTargetAtTime(f, now, 0.01);
  }

  set carrType(type) {
    this.userParams.carrType.value = type;
    this._carrier.type = type;
  }

  set modFreq(f) {
    this.userParams.modFreq.value = f;
    const now = this.audioContext.currentTime;
    this._modulator.frequency.setTargetAtTime(f, now, 0.01);
  }

  set modType(type) {
    this.userParams.modType.value = type;
    this._modulator.type = type;
  }

  set modDepth(depth) {
    this.userParams.modDepth.value = depth;
    const now = this.audioContext.currentTime;
    this._depth.gain.setTargetAtTime(depth, now, 0.01);
    this._offset.offset.setTargetAtTime(1-depth, now, 0.01);
  }

}