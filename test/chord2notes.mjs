const ex1 = {
  frequencies: [
    221.0189683684518,
    441.0177912105562,
    945.342330251691,
    994.6370625603774
  ],
  freqEnvelops: [
    [ [Array], [Array] ],
    [ [Array], [Array] ],
    [ [Array], [Array] ],
    [ [Array], [Array] ]
  ],
  velocities: [
    -0.137874158958009,
    -4.346259915669499,
    -36.05547450583951,
    -36.05547450583951
  ],
  durations: [ 2.81, 2.63, 1.27, 0.48 ],
  envelops: [
    [ [Array], [Array] ],
    [ [Array], [Array] ],
    [ [Array], [Array] ],
    [ [Array], [Array] ]
  ],
  synthTypes: null,
  modFreqs: null,
  modDepths: null,
  harmonicities: null,
  modIndices: null
}

const ex2 = {
  frequencies: [ 1101.0719627544997, 1498.9048061794829, 1762.0344066227292 ],
  freqEnvelops: [ [ [Array], [Array] ], [ [Array], [Array] ], [ [Array], [Array] ] ],
  velocities: [ -15.631688524440753, -42.07607441911914, -22.076074419119138 ],
  durations: [ 2.43, 1.54, 2.5 ],
  envelops: [ [ [Array], [Array] ], [ [Array], [Array] ], [ [Array], [Array] ] ],
  synthTypes: null,
  modFreqs: null,
  modDepths: null,
  harmonicities: null,
  modIndices: null
}


function chord2notes(chord) {
  let notes = [];
  let numNotes = 0;
  // find num notes
  for (let key in chord) {
    if (Array.isArray(chord[key])) {
      numNotes = chord[key].length;
      break;
    }
  }

  for (let i = 0; i < numNotes; i++) {
    const note = {};

    for (let [key, value] of Object.entries(chord)) {
      if (value === null) {
        note[key] = null;
      } else {
        note[key] = value[i];
      }
    }

    notes.push(note);
  }

  console.log(numNotes);
  console.log(notes);
}

chord2notes(ex1);
chord2notes(ex2);
