export default {
  synthDirectory: {
    type: 'string',
    default: 'src/clients/player/audio/user_scripts',
  },
  currentScript: {
    type: 'string',
    default: null,
    nullable: true,
    event: true,
  },
}