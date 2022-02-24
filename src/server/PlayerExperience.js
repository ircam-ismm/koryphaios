import { AbstractExperience } from '@soundworks/core/server';

class PlayerExperience extends AbstractExperience {
  constructor(server, clientTypes, options = {}) {
    super(server, clientTypes);

    this.checkin = this.require('checkin');
    this.sync = this.require('sync');
    this.platform = this.require('platform');
    this.audioBufferLoader = this.require('audio-buffer-loader');
    this.filesystem = this.require('filesystem');
    this.synthScripting = this.require('synth-scripting');
  }

  start() {
    super.start();
  }

  enter(client) {
    super.enter(client);
  }

  exit(client) {
    super.exit(client);
  }
}

export default PlayerExperience;
