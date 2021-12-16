"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scale;

function scale(minIn, maxIn, minOut, maxOut) {
  const a = (maxOut - minOut) / (maxIn - minIn);
  const b = minOut - a * minIn;
  return x => a * x + b;
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYWxlLmpzIl0sIm5hbWVzIjpbInNjYWxlIiwibWluSW4iLCJtYXhJbiIsIm1pbk91dCIsIm1heE91dCIsImEiLCJiIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQkMsS0FBdEIsRUFBNkJDLE1BQTdCLEVBQXFDQyxNQUFyQyxFQUE2QztBQUMxRCxRQUFNQyxDQUFDLEdBQUcsQ0FBQ0QsTUFBTSxHQUFHRCxNQUFWLEtBQXFCRCxLQUFLLEdBQUdELEtBQTdCLENBQVY7QUFDQSxRQUFNSyxDQUFDLEdBQUdILE1BQU0sR0FBR0UsQ0FBQyxHQUFHSixLQUF2QjtBQUNBLFNBQU9NLENBQUMsSUFBSUYsQ0FBQyxHQUFHRSxDQUFKLEdBQVFELENBQXBCO0FBQ0Q7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY2FsZShtaW5JbiwgbWF4SW4sIG1pbk91dCwgbWF4T3V0KSB7XG4gIGNvbnN0IGEgPSAobWF4T3V0IC0gbWluT3V0KSAvIChtYXhJbiAtIG1pbkluKTtcbiAgY29uc3QgYiA9IG1pbk91dCAtIGEgKiBtaW5JbjtcbiAgcmV0dXJuIHggPT4gYSAqIHggKyBiO1xufTtcbiJdfQ==