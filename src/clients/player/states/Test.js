import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';

export default class Test extends State {

  playTestSound() {
    const osc = this.context.audioContext.createOscillator();
    const gain = this.context.audioContext.createGain();
    
    osc.frequency.value = 220;

    osc.connect(gain);
    gain.connect(this.context.audioContext.destination);

    const now = this.context.audioContext.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.setTargetAtTime(0.5, now, 0.05);
    gain.gain.setTargetAtTime(0, now+0.9, 0.01);
    osc.start(now);
    osc.stop(now+1);
  }

  render() {
    return html`
      <p
       style="
          position: absolute;
          top: 25%;
          left: 50%;
          font-size: large;
          transform: translate(-50%, 0);
        " 
      >Turn the volume up!</p>
      <sc-button
        style="
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, 0);
        "
        text="Play test sound"
        @click="${e => this.playTestSound()}"
      ></sc-button>

      <sc-button
        style="
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, 0);
        "
        text="Ready"
        @click="${e => this.context.playerState.set({state: this.context.score.get('state')})}"
      ></sc-button>
    `;
  }
}
