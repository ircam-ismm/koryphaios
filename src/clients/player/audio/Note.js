import Envelope from './Envelope.js';
import decibelToLinear from '../math/decibelToLinear.js';
import BufferSynth from './BufferSynth.js';

// example note data
//   {
//     frequency: 285.30470202322215,
//     detune: [ [0, 0, 0], [1, 0, 0] ],
//     velocity: -4.691440024499614,
//     duration: 2.984859375046442,
//     envelop: [ [Array], [Array], [Array] ],
//     synthType: null,
//     amModFreq: null,
//     amModDepths: null,
//     fmHarmonicity: 18.01399230969316,
//     fmModIndex: 4.206996917774388
//   },


//How to dynamically create this ?
let noteDefaults = {
  frequency: 440.,
  detune: null,
  velocity: 0,
  duration: 1,
  envelope: null,
  synthType: 'osc',
  amModFreq: 0,
  amModDepth: 0,
  fmHarmonicity: 0,
  fmModIndex: 0,
  bufferPlaybackRate: 1,
};

export default class Note {
  constructor(audioContext, data, synthCtor, audioBufferLoader) {
    this.audioContext = audioContext;
    this.data = data;
    this.synthConstructors = synthCtor;

    // apply defaults
    for (let name in this.data) {
      if (this.data[name] === null || this.data[name] === undefined) {
        this.data[name] = noteDefaults[name];
      }
    }

    if (!(Object.keys(this.synthConstructors).includes(this.data.synthType))) {
      this.data.synthType = noteDefaults.synthType;
    }


    // normalize eveything
    ['envelope'].forEach(key => {
      if (this.data[key] !== null) {
        this.data[key].forEach(point => point[1] = decibelToLinear(point[1]));
      }  
    });

    this.data.velocity = decibelToLinear(this.data.velocity);

    this.data.buffer = audioBufferLoader.data[this.data.buffer];

    // @note - from this point no further normalization should occur
    // console.log(this.data);

    this.output = this.audioContext.createGain();
    this.output.gain.value = 0;

    this.env = this.audioContext.createGain();
    this.env.gain.value = this.data.envelope !== null && this.data.envelope.length > 0 ? 0 : 1;
    this.env.connect(this.output);


    // prepare to store all envelopes
    this.envelopes = [];

    const envelopes = {
      'envelope': this.env.gain,
    }

    const ctor = this.synthConstructors[this.data.synthType];
    this.synth = new ctor(this.audioContext);

    Object.entries(this.data).forEach(([key, value]) => {
      if (key in this.synth) {
        if (this.data[key] !== null && Array.isArray(this.data[key]) && this.data[key].length > 0) {
          this.synth[key] = 0;
          envelopes[key] = this.synth[key+'Param'];
        } else {
          this.synth[key] = value;
        } 
      }
    })

    this.synth.connect(this.env);
    
    //Init enveloppes 
    for (let key in envelopes) {
      if (!(key in noteDefaults)) {
        console.log(`cannot schedule envelop for entry "${key}", does not exists`);
        continue;
      }

      if (this.data[key] !== null && this.data[key].length > 0) { 
        const envelope = new Envelope(envelopes[key], this.data[key], this.data.duration);
        this.envelopes.push(envelope);
      }
    }
  }

  connect(dest) {
    this.output.connect(dest);
  }

  play(time) {
    this.start(time);
    this.stopTimeoutId = setTimeout(() => {
      this.stop(time + this.data.duration);
    }, this.data.duration * 1000);
  }

  start(time) {
    time = Math.max(time, this.audioContext.currentTime);

    this.envelopes.forEach(envelope => envelope.apply(time));

    this.output.gain.setValueAtTime(0, time);
    this.output.gain.linearRampToValueAtTime(this.data.velocity, time + 0.005);

    this.synth.start(time);
  };

  stop(time) {
    clearTimeout(this.stopTimeoutId);
    time = Math.max(time, this.audioContext.currentTime);

    // if the envelop is clean we should already be at 0 gain from env,
    // else we should avoid drity clicks
    this.output.gain.setValueAtTime(this.data.velocity, time);
    this.output.gain.linearRampToValueAtTime(0, time + 0.005);

    this.synth.stop(time + 0.01);
  };
}
