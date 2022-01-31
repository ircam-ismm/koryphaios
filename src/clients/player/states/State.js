import { html } from 'lit-html';

export default class State {
  constructor(name, context) {
    this.name = name
    this.context = context;

    this.status = 'idle';
  }

  async enter() {}

  async exit() {}

  render() {
    return html`<h1>${this.name}</h1>`;
  }
}
