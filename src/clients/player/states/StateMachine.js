import Welcome from './Welcome.js';
import Test from './Test.js';
import Waiting from './Waiting.js';
import Performance from './Performance.js';
import End from './End.js';
import Playground from './Playground.js';

const states = {
  'welcome': Welcome,
  'test': Test,
  'waiting': Waiting,
  'performance': Performance,
  'end': End,
  'playground': Playground,
};

class StateMachine {
  constructor(context) {
    this.context = context;
    this.state = null;
  }

  async setState(name) {
    if (name === this.name) {
      return;
    }

    if (this.state !== null) {
      console.log(`> exit ${this.state.name}`);
      this.state.status = 'exited';
      await this.state.exit();
      this.state = null;
      this.context.render();
    }

    const ctor = states[name];
    const state = new ctor(name, this.context);

    console.log(`> enter ${name}`);
    await state.enter();
    state.status = 'entered';
    this.state = state;

    this.context.render();
  }
}

export default StateMachine;
