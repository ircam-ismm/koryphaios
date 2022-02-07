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
  dispatchStrategy: {
    type: 'string',
    default: 'randomSpread',
  },
  concertMode: {
    type: 'boolean',
    default: false,
  },
  state: {
    type: 'string',
    default: 'waiting',
    nullable: true,
  },
  defaultSynth: {
    type: 'string',
    default: 'sine',
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
  }
}
