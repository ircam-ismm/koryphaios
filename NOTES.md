# NOTES.md

- rename files in `utils` to match `ClassName`, e.g. if the class is `AmSynth` the file is `AmSynth.js`
you don't need to open it to know what it contains

- synth in `utils` shoud live elsewhere
- will synths be used server side, why they are not located in `clients`?

- `math` could libe in `utils`

- always remove unsused code, never keep things around "just in case" or comment and explain why you keep it

e.g. in FmSynth what is supposed to do that:
```js
this.modIndex = this.userParams.modIndex.value; // ??
this.harmonicity = this.userParams.harmonicity.value; // ??
```

- comments should be in english (opinionated), but context swithcing if boring

- try to avoid unmeaningful variable names (`f`, `r`, etc.)
prefer having a name that tells you what you are manipulating than having to guess each time

`nNotes` could be `numNotes`, `notesLength`, `notesNumber`

- remove things that are not used anymore, e.g.:
`const playersIds = new Array();`

- always prefer readibility to shortness: for you it's more readable, for the machine it doesn't change anything

- having some new lines doesn't hurt neither

- please put some spaces arnoud math operators

- don't rely on some black magic

Important

- `unsubscribe` in `exit`
