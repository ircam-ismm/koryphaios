import State from './State.js';
import { html } from 'lit-html';


export default class Welcome extends State {
  render() {
    return html`
      <h1>${this.name}</h1>
    `;
  }
}
