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
  }
}