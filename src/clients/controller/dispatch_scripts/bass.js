// script bass
function getDispatchStrategy() {
  return (players, notes, syncTime) => {
    const lowFreq = notes.filter(note => note.frequency <= 250);
    const highFreq = notes.filter(note => note.frequency > 250);

    players.forEach(playerState => {  
      if (playerState.get('hash') === 'bass') {
        playerState.set({ notes: lowFreq, startSyncTime: syncTime });
      } else {
        playerState.set({ notes: highFreq, startSyncTime: syncTime });
      }
    });
  }
}