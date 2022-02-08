export default {
  /**
   * Send all notes to all players
   */
  sendAll: (players, notes, syncTime) => {
    players.forEach(playerState => {
      playerState.set({ notes, startSyncTime: syncTime });
    }); 
  },

  /**
   * Dispatch notes in every player:
   * - every player should have at least one note to play
   * - every notes should be played
   */
  randomSpread: (players, notes, syncTime) => {
    const numNotes = notes.length;
    const playersArray = Array.from(players);
    playersArray.sort((a, b) => Math.random() < 0.5 ? 1 : -1)

    if (numNotes <= playersArray.length) {
      let noteIdx = 0;

      for (let playerIdx = 0; playerIdx < playersArray.length; playerIdx++) {
        const player = playersArray[playerIdx];
        const filteredNotes = [notes[noteIdx]];
        player.set({ notes: filteredNotes , startSyncTime: syncTime });

        noteIdx = (noteIdx + 1) % numNotes;
      }
    } else {
      let playerIdx = 0;

      for (let noteIdx = 0; noteIdx < numNotes; noteIdx++) {
        const player = playersArray[playerIdx];
        const filteredNotes = [notes[noteIdx]];
        player.set({ notes: filteredNotes, startSyncTime: syncTime });

        playerIdx = (playerIdx + 1) % playersArray.length;
      }
    }
  },

  /**
   * send all notes to a random player
   */
  randomPoint: (players, notes, syncTime) => {
    const playersArray = Array.from(players);
    const randIdx = Math.floor(Math.random() * playersArray.length);
    const player = playersArray[randIdx];

    player.set({ notes, startSyncTime: syncTime });
  },
}
