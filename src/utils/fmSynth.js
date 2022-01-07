/* 
- mieux ecrire param par defaut ?
- check si c'est la meme implémentation que dans la v1
*/

export default class FmSynth{
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

    //Creating nodes
    this._carrier = this.audioContext.createOscillator();
    this._carrier.frequency.value = this.userParams.carrFreq.default;
    this._carrier.type = this.userParams.carrType.default;
    this._modulator = this.audioContext.createOscillator();
    this._modulator.frequency.value = this.userParams.carrFreq.default*this.userParams.harmonicity.default;
    this._modulator.type = this.userParams.modType.default;
    this._modAmp = this.audioContext.createGain();
    this._modAmp.gain.value = 0.0;
    this._output = this.audioContext.createGain();

    //Connections
    this._carrier.connect(this._output);

    this._modulator.connect(this._modAmp);
    this._modAmp.connect(this._carrier.frequency);

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
  }

  stop(time) {
    this._carrier.stop(time);
    this._modulator.stop(time);
  }

  set carrFreq(f) {
    this.userParams.carrFreq.value = f;
    const now = this.audioContext.currentTime;
    this.modIndex = this.userParams.modIndex.value;
    this.harmonicity = this.userParams.harmonicity.value;
    this._carrier.frequency.setTargetAtTime(f, now, 0.01);
  }

  set carrType(type) {
    this.userParams.carrType.value = type;
    this._carrier.type = type;
  }

  set harmonicity(r) {
    this.userParams.harmonicity.value = r;
    const now = this.audioContext.currentTime;
    const carrFreq = this.userParams.carrFreq.value;
    this.modIndex = this.userParams.modIndex.value; //update
    this._modulator.frequency.setTargetAtTime(carrFreq*r, now, 0.01);
  }

  set modType(type) {
    this.userParams.modType.value = type;
    this._modulator.type = type;
  }

  set modIndex(val) {
    this.userParams.modIndex.value = val;
    const now = this.audioContext.currentTime;
    const carrFreq = this.userParams.carrFreq.value;
    const harmonicity = this.userParams.harmonicity.value;
    this._modAmp.gain.setTargetAtTime(carrFreq*harmonicity*val, now, 0.01);
  }

}