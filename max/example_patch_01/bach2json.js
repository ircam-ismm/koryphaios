const path = require('path');
const Max = require('max-api');
const JSON5 = require('json5');

Max.addHandler("parse", async () => {
  const dict = await Max.getDict('notes');

  const frequencies = Array.isArray(dict.frequencies) ?
    dict.frequencies : [dict.frequencies];
  const velocities = Array.isArray(dict.velocities) ?
    dict.velocities : [dict.velocities];
  const durations = Array.isArray(dict.durations) ?
    dict.durations : [dict.durations];
  const synthTypes = Array.isArray(dict.synthTypes) ?
    dict.synthTypes : [dict.synthTypes];
  const modFreqs = Array.isArray(dict.modFreqs) ?
    dict.modFreqs : [dict.modFreqs];
  const modDepths = Array.isArray(dict.modDepths) ?
    dict.modDepths : [dict.modDepths];
  const harmonicities = Array.isArray(dict.harmonicities) ?
    dict.harmonicities : [dict.harmonicities];
  const modIndices = Array.isArray(dict.modIndices) ?
    dict.modIndices : [dict.modIndices];

  const numNotes = frequencies.length;

  // brute force format idiotic max syntax...
  // ...no need to try to understand, there is no such thing as understanding here
  let envelops = new String(dict.envelops);
  envelops = envelops.replace(/"/g, '');
  envelops = envelops.replace(/\[,/g, '[');
  envelops = `[${envelops}]`;
  envelops = JSON5.parse(envelops);

  let freqEnvelops = new String(dict.freqEnvelops);
  freqEnvelops = freqEnvelops.replace(/"/g, '');
  freqEnvelops = freqEnvelops.replace(/\[,/g, '[');
  freqEnvelops = `[${freqEnvelops}]`;
  freqEnvelops = JSON5.parse(freqEnvelops);


  const formatted = [];

  for (let i = 0; i < frequencies.length; i++) {
    const note = {
      frequency: frequencies[i],
      freqEnveloppe: freqEnvelops[i],
      velocity: velocities[i],
      duration: durations[i],
      enveloppe: envelops[i],
    };
    switch (synthTypes[i]) {
      default:
      case 'sine':
        note['metas'] = { synthType: 'sine' };
        break;
      case 'am':
        note['metas'] = { synthType: 'am', modFreq: modFreqs[i], modDepth: modDepths[i] };
        break;
      case 'fm':
        note['metas'] = { synthType: 'fm', harmonicity: harmonicities[i], modIndex: modIndices[i] };
    } 
    formatted.push(note);
  }
  await Max.setDict('formatted-notes', { notes: formatted });

  Max.outlet('bang');
});
