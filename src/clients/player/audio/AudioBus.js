import decibelToLinear from '../math/decibelToLinear';
import linearToDecibel from '../math/linearToDecibel';
import audioBusSchema from '../../../server/schemas/busControls'

export default class AudioBus {
  constructor(audioContext, { panning = false, filter = false } = {}) {
    this.audioContext = audioContext;

    this.params = audioBusSchema;
    this.muteflag = this.params.mute.default; //can't rely on _mute value bc of the transition time 

    // parameters
    // @note - not sure this is a good idea finally
    // this.params = {
    //   mute: {
    //     type: 'boolean',
    //     default: false,
    //   },
    //   volume: {
    //     type: 'number',
    //     min: -80.0,
    //     max: 20.0,
    //     default: 0.,
    //   },
    //   // optionnal
    //   panning: {
    //     type: 'number',
    //     min: -1.0,
    //     max: 1.0,
    //     default: 0.0,
    //   },
    //   lowPassFreq: {
    //     type: 'number',
    //     min: 20.0,
    //     max: 20000.0,
    //     default: 20000.0,
    //   },
    //   highPassFreq: {
    //     type: 'number',
    //     min: 20.0,
    //     max: 20000.0,
    //     default: 20.0,
    //   },
    // };

    // create graph
    this._output = this.audioContext.createGain();

    this._mute = this.audioContext.createGain(); 
    this._mute.gain.value = this.params.mute.default;
    this._mute.connect(this._output);

    if (panning) {
      this._panner = this.audioContext.createStereoPanner();
      this._panner.pan.value = this.params.panning.default;
      this._panner.connect(this._mute);
    }

    this._volume = this.audioContext.createGain();
    this._volume.gain.value = decibelToLinear(this.params.volume.default);
    this._volume.connect(panning ? this._panner : this._mute);

    if (filter) {
      this._highpass = this.audioContext.createBiquadFilter();
      this._highpass.type = "highpass";
      this._highpass.frequency.value = this.params.highPassFreq.default;
      this._highpass.connect(this._volume)

      this._lowpass = this.audioContext.createBiquadFilter();
      this._lowpass.type = "lowpass";
      this._lowpass.frequency.value = this.params.lowPassFreq.default;
      this._lowpass.connect(this._highpass);
    }

    this._input = this.audioContext.createGain();
    this._input.connect(filter ? this._lowpass : this._volume);

    // setter and getter according to config options
    if (panning) {
      Object.defineProperty(this, 'panning', {
        get() {
          return this._panner.pan.value;
        },
        set(val) {
          const now = this.audioContext.currentTime;
          const { min, max } = this.params.panning;
          val = Math.min(max, Math.max(min, val));
          this._panner.pan.setTargetAtTime(val, now, 0.02);
        }
      });
    }

    if (filter) {
      Object.defineProperty(this, 'lowPassFreq', {
        get() {
          return this._lowpass.frequency.value;
        },
        set(val) {
          const now = this.audioContext.currentTime;
          const { min, max } = this.params.lowPassFreq;
          val = Math.min(max, Math.max(min, val));
          this._lowpass.frequency.setTargetAtTime(val, now, 0.02);
        }
      });

      Object.defineProperty(this, 'highPassFreq', {
        get() {
          return this._highpass.frequency.value;
        },
        set(val) {
          const now = this.audioContext.currentTime;
          const { min, max } = this.params.highPassFreq;
          val = Math.min(max, Math.max(min, val));
          this._highpass.frequency.setTargetAtTime(val, now, 0.02);
        }
      });
    }
  }

  // audio input
  get input() {
    return this._input;
  }

  get mute() {
    return this.muteflag;
  }

  set mute(value) {
    this.muteflag = 1 - value;
    const now = this.audioContext.currentTime;
    this._mute.gain.setTargetAtTime(this.muteflag, now, 0.01);
  }

  get volume() {
    return linearToDecibel(this._volume.gain.value);
  }

  set volume(db) {
    const now = this.audioContext.currentTime;
    const { min, max } = this.params.volume;
    db = Math.min(max, Math.max(min, db)); // clamp

    const val = decibelToLinear(db);
    this._volume.gain.setTargetAtTime(val, now, 0.02);
  }

  connect(dest) {
    this._output.connect(dest);
  }

  disconnect(dest) {
    this._output.disconnect(dest);
  }
}
