"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _server = require("@soundworks/core/server");

class ControllerExperience extends _server.AbstractExperience {
  constructor(server, clientTypes, options = {}) {
    super(server, clientTypes);
  }

  start() {
    super.start();
  }

  enter(client) {
    super.enter(client);
  }

  exit(client) {
    super.exit(client);
  }

}

var _default = ControllerExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlIiwiQWJzdHJhY3RFeHBlcmllbmNlIiwiY29uc3RydWN0b3IiLCJzZXJ2ZXIiLCJjbGllbnRUeXBlcyIsIm9wdGlvbnMiLCJzdGFydCIsImVudGVyIiwiY2xpZW50IiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLG9CQUFOLFNBQW1DQywwQkFBbkMsQ0FBc0Q7QUFDcERDLEVBQUFBLFdBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxXQUFULEVBQXNCQyxPQUFPLEdBQUcsRUFBaEMsRUFBb0M7QUFDN0MsVUFBTUYsTUFBTixFQUFjQyxXQUFkO0FBRUQ7O0FBRURFLEVBQUFBLEtBQUssR0FBRztBQUNOLFVBQU1BLEtBQU47QUFDRDs7QUFFREMsRUFBQUEsS0FBSyxDQUFDQyxNQUFELEVBQVM7QUFDWixVQUFNRCxLQUFOLENBQVlDLE1BQVo7QUFDRDs7QUFFREMsRUFBQUEsSUFBSSxDQUFDRCxNQUFELEVBQVM7QUFDWCxVQUFNQyxJQUFOLENBQVdELE1BQVg7QUFDRDs7QUFoQm1EOztlQW1CdkNSLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RFeHBlcmllbmNlIH0gZnJvbSAnQHNvdW5kd29ya3MvY29yZS9zZXJ2ZXInO1xuXG5jbGFzcyBDb250cm9sbGVyRXhwZXJpZW5jZSBleHRlbmRzIEFic3RyYWN0RXhwZXJpZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHNlcnZlciwgY2xpZW50VHlwZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHNlcnZlciwgY2xpZW50VHlwZXMpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuICB9XG5cbiAgZW50ZXIoY2xpZW50KSB7XG4gICAgc3VwZXIuZW50ZXIoY2xpZW50KTtcbiAgfVxuXG4gIGV4aXQoY2xpZW50KSB7XG4gICAgc3VwZXIuZXhpdChjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXJFeHBlcmllbmNlO1xuIl19