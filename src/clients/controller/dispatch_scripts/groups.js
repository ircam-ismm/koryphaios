// script groups
function getDispatchStrategy() {
  return (players, notes, syncTime) => {
    const groupa = notes.filter(note => note.label === 'a');
    const groupb = notes.filter(note => note.label === 'b');
    const noGroup = notes.filter(note => note.label !== 'a' && note.label !== 'b'); 
    
    
    players.forEach(playerState => {
    	const hash = playerState.get('hash');
    	if (hash === 'a') {
    		playerState.set({ notes: groupa, startSyncTime: syncTime });
    	} else if (hash === 'b') {
    		playerState.set({ notes: groupb, startSyncTime: syncTime });
    	} else {
    		playerState.set({ notes: noGroup, startSyncTime: syncTime });
    	}
    });
  }
}