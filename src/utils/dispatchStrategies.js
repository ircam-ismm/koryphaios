export default {
  'sendAll': (players, notes, syncTime) => {
    players.forEach(playerState => {
      playerState.set({ note: notes, playTime: syncTime });
    }); 
  },
  'randomSpread': (players, notes, syncTime) => {
    const numNotes = notes.length;
    const playersArray = Array.from(players);
    playersArray.sort((a, b) => Math.random() < 0.5 ? 1 : -1)

    if (numNotes <= playersArray.length) {
      let noteIdx = 0;
      for (let playerIdx = 0; playerIdx < playersArray.length; playerIdx++) {
        const player = playersArray[playerIdx];
        player.set({ note: notes[noteIdx], playTime: syncTime });
        noteIdx = (noteIdx + 1) % numNotes;
      }
    } else {
      let playerIdx = 0;
      for (let noteIdx = 0; noteIdx < numNotes; noteIdx++) {
        const player = playersArray[playerIdx];
        player.set({ note: notes[noteIdx], playTime: syncTime });
        playerIdx = (playerIdx + 1) % playersArray.length;
      }
    }
  },
  'randomPoint': (players, notes, syncTime) => {
    const playersArray = Array.from(players);
    const randIdx = Math.floor(Math.random() * playersArray.length);
    const player = playersArray[randIdx];
    console.log(randIdx, playersArray.length);
    player.set({ note: notes, playTime: syncTime });
  },
}
