import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';

export default class EndScreen extends State {


  async enter() {
    this.scoreUnsubscribe = this.context.score.subscribe(updates => {
      if (updates.hasOwnProperty('state')) {
        this.context.playerState.set({ state: updates.state });
      }
    });
  }

  async exit() {
    this.scoreUnsubscribe();
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
      >Concert is over</p>
      <p
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: large;
        "
      >Thank you for coming</p>
    `;
  }
}
