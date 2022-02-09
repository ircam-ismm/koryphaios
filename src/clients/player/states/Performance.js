import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';
import Note from '../audio/Note.js';

export default class Performance extends State {
  constructor(...args) {
    super(...args);

    this.activeNotes = new Set();
    this.signalBuffer = new Float32Array(128);
    this.rms = 0;
    this.rafId = null;
    this.rafIndex = 0;
  }
  async enter() {
    await super.enter();

    this.playerStateUnsubscribe = this.context.playerState.subscribe(updates => {
      if ('notes' in updates) {
        const notes = updates.notes;
        const startSyncTime = updates.startSyncTime;
        const startTime = this.context.sync.getLocalTime(startSyncTime);

        for (let i = 0; i < notes.length; i++) {
          const note = new Note(this.context.audioContext, notes[i]);
          // use `note.data`, as it has been normalized with defaults
          const bus = this.context.synthBuses[note.data.synthType];

          note.connect(bus.input);
          note.play(startTime);

          // book-keeping notes for transport stop event
          this.activeNotes.add(note);

          setTimeout(() => {
            this.activeNotes.delete(note);
          }, note.data.duration * 1000);
        }
      }
    });

    this.scoreUnsubscribe = this.context.score.subscribe(updates => {
      if ('transport' in updates) {
        if (updates.transport === 'stop') {
          const now = this.context.audioContext.currentTime;
          this.activeNotes.forEach(note => note.stop(now));
          this.activeNotes.clear();
        }
      }
    });

    // visual render
    this.analyzer = this.context.audioContext.createAnalyser();
    this.analyzer.fftSize = 128;
    this.context.masterBus.connect(this.analyzer);
  }

  async exit() {
    // clear animation
    cancelAnimationFrame(this.rafId);
    this.context.masterBus.disconnect(this.analyzer);
    // clear subsubscriptions
    this.playerStateUnsubscribe();
    this.scoreUnsubscribe();
    // clear all active notes
    const now = this.context.audioContext.currentTime;
    this.activeNotes.forEach(note => note.stop(now));
    this.activeNotes.clear();

    await super.exit();
  }

  render() {
    this.rafId = requestAnimationFrame(this.context.render);

    if (this.rafIndex === 0) {
      this.analyzer.getFloatTimeDomainData(this.signalBuffer);

      const length = this.signalBuffer.length;
      let sum = 0;

      for (let i = 0; i < length; i++) {
        const value = this.signalBuffer[i];
        sum += value * value;
      }

      const mean = sum / length;
      this.rms = Math.sqrt(mean);
    }

    this.rafIndex = (this.rafIndex + 1) % 4;

    return html`
      <div style="
        opacity: ${Math.pow(this.rms, 0.25)};
        transition: opacity 100ms;
        background-color: #ffffff;
        position:  absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      "></div>
      <p style="
        margin-top: 100px;
        text-align: center;
        font-size: large;
      ">
        <i>${this.context.score.get('piece')}</i>
        <br /><br />by</br /><br />
        ${this.context.score.get('composer')}
      </p>
    `;
  }
}
