import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';
import Note from '../audio/Note.js';

export default class PlayingScreen extends State {
  async enter() {
    const activeNotes = new Set();

    this.playerStateUnsubscribe = this.context.playerState.subscribe(updates => {
      if ('notes' in updates) {
        const notes = updates.notes;
        const startSyncTime = updates.startSyncTime;
        const startTime = this.context.sync.getLocalTime(startSyncTime);

        for (let i = 0; i < notes.length; i++) {
          const note = new Note(this.context.audioContext, notes[i]);
          const bus = this.context.synthBuses[note.data.synthType];

          note.connect(bus.input);
          note.play(startTime);

          // book-keeping notes for transport stop event
          activeNotes.add(note);

          setTimeout(() => {
            activeNotes.delete(note);
          }, note.data.duration * 1000);
        }
      }
    });

    this.scoreUnsubscribe = this.context.score.subscribe(updates => {
      if ('transport' in updates) {
        if (updates.transport === 'stop') {
          const now = this.context.audioContext.currentTime;

          activeNotes.forEach(note => {
            note.stop(now);
          });

          activeNotes.clear();
        }
      }
    });
  }

  async exit() {
    this.playerStateUnsubscribe();
    this.scoreUnsubscribe();
  }

  render() {
    return html`
      <p
        style="
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: large;
        "
      >${this.context.score.get('piece')} by ${this.context.score.get('composer')}</p>
    `;
  }
}
