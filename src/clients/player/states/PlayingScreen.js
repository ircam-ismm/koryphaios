import State from './State.js';
import { html } from 'lit-html';
import '@ircam/simple-components/sc-button.js';
import Note from '../audioEngine/Note.js';

export default class PlayingScreen extends State {


  async enter() {
    this.context.globalMasterBus.connect(this.context.audioContext.destination);

    const activeNotes = new Set();

    this.playerStateUnsubscribe = this.context.playerState.subscribe(updates => {
      if (updates.hasOwnProperty('note')) {
        // console.log('received note:', updates.note);
        const playTime = this.context.sync.getLocalTime(updates.playTime);

        if (Array.isArray(updates.note)) {
          for (let i = 0; i < updates.note.length; i++) {
            const note = new Note(this.context.audioContext, updates.note[i]);
            note.connect(this.context.synthMasterBus[updates.note[i].metas.synthType].input);
            note.play(playTime);
            activeNotes.add(note); //how/when to remove it ?

            setTimeout(() => {
              activeNotes.delete(note)
            }, updates.note[i].duration*1000 + 500); // To fix
          }

        } else {
          const note = new Note(this.context.audioContext, updates.note);
          note.connect(this.context.synthMasterBus[updates.note.metas.synthType].input);
          note.play(playTime);
          activeNotes.add(note);

          setTimeout(() => {
              activeNotes.delete(note)
          }, updates.note.duration*1000 + 500);
        }
      }
    });

    this.scoreUnsubscribe = this.context.score.subscribe(updates => {
      if (updates.hasOwnProperty('transport')) {
        if (updates.transport === 'stop') {
          activeNotes.forEach(note => note.stop(this.context.audioContext.currentTime));
          activeNotes.clear();
        }
      }
      if (updates.hasOwnProperty('state')) {
        this.context.playerState.set({ state: updates.state });
      }
    });
  }

  async exit() {
    this.playerStateUnsubscribe();
    this.scoreUnsubscribe();
    this.context.globalMasterBus.disconnect();
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
