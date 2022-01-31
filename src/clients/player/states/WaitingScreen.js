import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';

export default class WaitingScreen extends State {


  async enter() {
    this.context.score.subscribe(updates => {
      if (updates.hasOwnProperty('state')){
        this.context.playerState.set({ state: updates.state });
      }
    });
  }

  render() {
    return html`
      <p
        style="
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: large;
        "
      >${this.context.score.get('piece')} by ${this.context.score.get('composer')}</p>
      <p
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: large;
        "
      >Concert will begin shortly</p>
    `;
  }
}
