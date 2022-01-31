import WelcomeScreen from "./WelcomeScreen";
import Test from "./Test";
import WaitingScreen from "./WaitingScreen";
import PlayingScreen from "./playingScreen";
import EndScreen from "./EndScreen";

const states = {
  'welcome-screen': WelcomeScreen,
  'test': Test,
  'waiting': WaitingScreen,
  'playing': PlayingScreen,
  'end': EndScreen,
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
