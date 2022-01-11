export default {
  id: {
    type: 'integer',
    default: null,
    nullable: true,
  },
  note: {
    type: 'any',
    default: null,
    nullable: true,
    event: true,
  },
  playTime: {
    type: 'float',
    default: null,
    nullable: true,
    event: true,
  },
}