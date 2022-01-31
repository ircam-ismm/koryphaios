export default {
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
  state: {
    type: 'string',
    default: 'waiting',
    nullable: true,
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