export default {
  // raw chord as send by Max (need some parsing)
  chord: {
    type: 'any',
    default: [],
    event: true,
  },
  // parsed chord
  notes: {
    type: 'any',
    default: [],
    event: true,
  },
  transport: {
    type: 'string',
    default: '',
    event: true,
  },
  dispatchStrategies: {
    type: 'any',
    default: [],
  },
  dispatchStrategy: {
    type: 'string',
    default: 'sendAll',
  },
  concertMode: {
    type: 'boolean',
    default: false,
  },
  state: {
    type: 'string',
    default: null,
    nullable: true,
  },
  defaultSynth: {
    type: 'string',
    default: 'sine',
  },
  availableSynths: {
    type: 'any',
    default: ['sine', 'am', 'fm', 'buffer'],
  },
  offsetSyncTime: {
    type: 'float',
    default: 0.1,
  },
  piece: {
    type: 'string',
    default: null,
    nullable: true,
  },
  composer: {
    type: 'string',
    default: null,
    nullable: true,
  },
  // could be in bus states but creates problems for now
  masterBusConfig: {
    type: 'any',
    default: { panning: false, filter: true },
  },
  synthBusConfig: {
    type: 'any',
    default: { panning: false, filter: false },
  },
};
