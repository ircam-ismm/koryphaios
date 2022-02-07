export default {
  synthType: {
    type: 'string',
    default: null,
    nullable: true,
  },
  mute: {
    type: 'boolean',
    default: false,
  },
  volume: {
    type: 'float',
    min: -60.,
    max: 12.,
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
