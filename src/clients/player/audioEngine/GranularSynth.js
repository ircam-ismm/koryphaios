import masters from 'waves-masters';

export default class GranularSynth {
  constructor(audioContext, buffer) {
    this.audioContext = audioContext;
    this.buffer = buffer;

    //Scheduler
    const getTimeFunction = () => audioContext.currentTime;
    this.scheduler = new masters.Scheduler(getTimeFunction);

    //Engine 
    this.engine = new GranularEngine(this.audioContext, this.buffer);
    this.scheduler.add(this.engine);

    //Creating nodes
    this._output = this.audioContext.createGain();

    //Connections
    this.engine.connect(this._output);

    //User-set parameters
    this.userParams = {
      period: {
        type: 'number',
        min: 0.02,
        max: 1.0,
        default: this.engine.period,
        value: 0.05,
      },
      duration: {
        type: 'number',
        min: 0.02,
        max: 1.0,
        default: this.engine.duration,
        value: this.engine.duration,
      },
      position: {
        type: 'number',
        min: 0,
        max: buffer.duration,
        default: this.engine.position,
        value: this.engine.position,
      }

    };
  }

  connect(dest) {
    this._output.connect(dest);
  }
  
  start(time) {
  }

  stop(time) {
  }

  set period(f) {
    let val = f;
    val = Math.max(val, this.userParams.period.min);
    val = Math.min(val, this.userParams.period.max);
    this.userParams.period.value = val;
    this.engine.period = val;
  }

  set duration(f) {
    let val = f;
    val = Math.max(val, this.userParams.duration.min);
    val = Math.min(val, this.userParams.duration.max);
    this.userParams.duration.value = val;
    this.engine.duration = val;
  }

  set position(f) {
    let val = f;
    val = Math.max(val, this.userParams.position.min);
    val = Math.min(val, this.userParams.position.max);
    this.userParams.position.value = val;
    this.engine.position = val;
  }
}


class GranularEngine {
  constructor(audioContext, buffer) {
    this.audioContext = audioContext;
    this.buffer = buffer;

    this.period = 0.05;
    this.duration = 0.2;
    this.position = 0;
    // this.resamplingRate = 0; // cents

    this.output = this.audioContext.createGain();
  }

  connect(destination) {
    this.output.connect(destination);
  }

  advanceTime(currentTime) {
    const jit = Math.random() * 0.002;
    const triggerTime = currentTime + jit;

    const env = this.audioContext.createGain();
    env.connect(this.output);
    env.gain.value = 0;
    env.gain.setValueAtTime(0, triggerTime);
    env.gain.linearRampToValueAtTime(1, triggerTime + this.duration / 2);
    env.gain.linearRampToValueAtTime(0, triggerTime + this.duration);

    const src = this.audioContext.createBufferSource();
    src.connect(env);
    src.buffer = this.buffer;

    src.start(triggerTime, this.position);
    src.stop(triggerTime + this.duration);

    return currentTime + this.period;
  }
}