export default {
  id: {
    type: 'integer',
    default: null,
    nullable: true,
  },
  state: {
    type: 'string',
    default: null,
    nullable: true,
  },
  hash: {
    type: 'string',
    default: null,
    nullable: true,
  },
  // should ALWAYS be an array
  notes: {
    type: 'any',
    default: [],
    nullable: true,
    event: true,
  },
  startSyncTime: {
    type: 'float',
    default: null,
    nullable: true,
    event: true,
  },
}
