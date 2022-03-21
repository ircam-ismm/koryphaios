import State from './State.js';
import { html } from 'lit-html';


export default class Welcome extends State {
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
      >Welcome to the performance of ${this.context.score.get('piece')} by ${this.context.score.get('composer')}</p>
      <p
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: large;
        "
      >The event will begin shortly</p>
    `;
  }
}
