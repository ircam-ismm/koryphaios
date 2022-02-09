import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';
import masters from 'waves-masters';

export default class Test extends State {
  constructor(...args) {
    super(...args);

    // @todo review - nicer with a granular
    this.engine = {
      advanceTime: (currentTime, audioTime) => {
        const freq = Math.random() * 1000 + 400;
        const duration = 1;
        const gain = Math.random() * 0.25;

        const env = this.context.audioContext.createGain();
        env.connect(this.context.masterBus.input);
        env.gain.setValueAtTime(0., audioTime);
        env.gain.linearRampToValueAtTime(gain, audioTime + 0.01);
        env.gain.exponentialRampToValueAtTime(0.0001, audioTime + duration);

        const osc = this.context.audioContext.createOscillator();
        osc.frequency.value = freq;
        osc.connect(env);
        osc.start(audioTime);
        osc.stop(audioTime + duration);

        return currentTime + Math.random() * 0.1 + 0.1;
      }
    }

    console.log(this);
  }

  async enter() {
    await super.enter();

    const startTime = this.context.audioContext.currentTime + Math.random();
    this.context.scheduler.add(this.engine, startTime);
  }

  async exit() {
    this.context.scheduler.remove(this.engine);

    await super.exit();
  }

  playTestSound() {
    const gain = this.context.audioContext.createGain();
    gain.connect(this.context.audioContext.destination);

    const osc = this.context.audioContext.createOscillator();
    osc.frequency.value = 220;
    osc.connect(gain);
  }

  render() {
    return html`
      <p style="
        margin-top: 100px;
        font-size: 1.4rem;
      ">
        Please, <br /><br />put the volume of your phone at a confortable level
      </p>
    `;
  }
}
