export default {
  name: {
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
  // would be best but creates problem on PlayerExperience
  // hasFilter: {
  //   type: 'boolean',
  //   default: false,
  // },
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
  },
  // would be best but creates problem on PlayerExperience
  // hasPanning: {
  //   type: 'boolean',
  //   default: false,
  // },
  // panning: {
  //   type: 'float',
  //   min: -1,
  //   max: 1,
  //   default: 0,
  // },
};
