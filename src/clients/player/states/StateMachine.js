import WelcomeScreen from './WelcomeScreen.js';
import Test from './Test.js';
import WaitingScreen from './WaitingScreen.js';
import PlayingScreen from './playingScreen.js';
import EndScreen from './EndScreen.js';
import Playground from './Playground.js';

const states = {
  'welcome-screen': WelcomeScreen,
  'test': Test,
  'waiting': WaitingScreen,
  'playing': PlayingScreen,
  'end': EndScreen,
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
