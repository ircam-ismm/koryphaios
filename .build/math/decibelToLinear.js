"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decibelToLinear;

function decibelToLinear(val) {
  return Math.exp(0.11512925464970229 * val); // pow(10, val / 20)
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2liZWxUb0xpbmVhci5qcyJdLCJuYW1lcyI6WyJkZWNpYmVsVG9MaW5lYXIiLCJ2YWwiLCJNYXRoIiwiZXhwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDM0MsU0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsc0JBQXNCRixHQUEvQixDQUFQLENBRDJDLENBQ0M7QUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWNpYmVsVG9MaW5lYXIodmFsKSB7XG4gIHJldHVybiBNYXRoLmV4cCgwLjExNTEyOTI1NDY0OTcwMjI5ICogdmFsKTsgLy8gcG93KDEwLCB2YWwgLyAyMClcbn1cbiJdfQ==