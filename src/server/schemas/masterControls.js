export default {
  synth: {
    type: 'string',
    nullable: true,
    default: null,
  },
  mute: {
    type: 'boolean',
    default: false,
  },
  volume: {
    type: 'float',
    min: -60.,
    max: 0.,
    default: 0.,
  },
  lowPassFreq: {
    type: 'float',
    min: 20,
    max: 20000,
    default: 20000,
  },
  highPassFreq: {
    type: 'float',
    min: 20,
    max: 20000,
    default: 20,
  }
}