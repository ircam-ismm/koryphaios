// script low-freqs
function getDispatchStrategy() {
  return (players, notes, syncTime) => {
    const lowFreqNotes = notes.filter(note => note.frequency <= 200);
    const highFreqNotes = notes.filter(note => note.frequency > 200);
    
    players.forEach(playerState => {
    	const hash = playerState.get('hash');
    	if (hash === 'lowfreqs') {
    		playerState.set({ notes: lowFreqNotes, startSyncTime: syncTime });
    	} else {
    		playerState.set({ notes: highFreqNotes, startSyncTime: syncTime });
    	}
    });
  }
}