"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decibelToPower;

function decibelToPower(val) {
  return Math.exp(0.23025850929940458 * val); // pow(10, val / 10)
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2liZWxUb1Bvd2VyLmpzIl0sIm5hbWVzIjpbImRlY2liZWxUb1Bvd2VyIiwidmFsIiwiTWF0aCIsImV4cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCO0FBQzFDLFNBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTLHNCQUFzQkYsR0FBL0IsQ0FBUCxDQUQwQyxDQUNFO0FBQzdDOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVjaWJlbFRvUG93ZXIodmFsKSB7XG4gIHJldHVybiBNYXRoLmV4cCgwLjIzMDI1ODUwOTI5OTQwNDU4ICogdmFsKTsgLy8gcG93KDEwLCB2YWwgLyAxMClcbn07XG4iXX0=