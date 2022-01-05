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

  const numNotes = frequencies.length;

  // brute force format idiotic max syntax...
  // ...no need to try to understand, there is no such thing as understanding here
  let envelops = new String(dict.envelops);
  envelops = envelops.replace(/"/g, '');
  envelops = envelops.replace(/\[,/g, '[');
  envelops = `[${envelops}]`;
  envelops = JSON5.parse(envelops);

  if (numNotes === 1) {
    envelops = [envelops];
  }

  const formatted = [];

  for (let i = 0; i < frequencies.length; i++) {
    const note = {
      frequency: frequencies[i],
      velocity: velocities[i],
      duration: durations[i],
      envelop: envelops[i],
    };

    formatted.push(note);
  }

  await Max.setDict('formatted-notes', { notes: formatted });

  Max.outlet('bang');
});
