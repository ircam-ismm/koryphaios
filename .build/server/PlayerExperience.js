"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _server = require("@soundworks/core/server");

class PlayerExperience extends _server.AbstractExperience {
  constructor(server, clientTypes, options = {}) {
    super(server, clientTypes);
    this.checkin = this.require('checkin');
    this.sync = this.require('sync');
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

var _default = PlayerExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYXllckV4cGVyaWVuY2UuanMiXSwibmFtZXMiOlsiUGxheWVyRXhwZXJpZW5jZSIsIkFic3RyYWN0RXhwZXJpZW5jZSIsImNvbnN0cnVjdG9yIiwic2VydmVyIiwiY2xpZW50VHlwZXMiLCJvcHRpb25zIiwiY2hlY2tpbiIsInJlcXVpcmUiLCJzeW5jIiwic3RhcnQiLCJlbnRlciIsImNsaWVudCIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxnQkFBTixTQUErQkMsMEJBQS9CLENBQWtEO0FBQ2hEQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsT0FBTyxHQUFHLEVBQWhDLEVBQW9DO0FBQzdDLFVBQU1GLE1BQU4sRUFBY0MsV0FBZDtBQUVBLFNBQUtFLE9BQUwsR0FBZSxLQUFLQyxPQUFMLENBQWEsU0FBYixDQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtELE9BQUwsQ0FBYSxNQUFiLENBQVo7QUFFRDs7QUFFREUsRUFBQUEsS0FBSyxHQUFHO0FBQ04sVUFBTUEsS0FBTjtBQUNEOztBQUVEQyxFQUFBQSxLQUFLLENBQUNDLE1BQUQsRUFBUztBQUNaLFVBQU1ELEtBQU4sQ0FBWUMsTUFBWjtBQUNEOztBQUVEQyxFQUFBQSxJQUFJLENBQUNELE1BQUQsRUFBUztBQUNYLFVBQU1DLElBQU4sQ0FBV0QsTUFBWDtBQUNEOztBQW5CK0M7O2VBc0JuQ1gsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEV4cGVyaWVuY2UgfSBmcm9tICdAc291bmR3b3Jrcy9jb3JlL3NlcnZlcic7XG5cbmNsYXNzIFBsYXllckV4cGVyaWVuY2UgZXh0ZW5kcyBBYnN0cmFjdEV4cGVyaWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIGNsaWVudFR5cGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihzZXJ2ZXIsIGNsaWVudFR5cGVzKTtcblxuICAgIHRoaXMuY2hlY2tpbiA9IHRoaXMucmVxdWlyZSgnY2hlY2tpbicpO1xuICAgIHRoaXMuc3luYyA9IHRoaXMucmVxdWlyZSgnc3luYycpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuICB9XG5cbiAgZW50ZXIoY2xpZW50KSB7XG4gICAgc3VwZXIuZW50ZXIoY2xpZW50KTtcbiAgfVxuXG4gIGV4aXQoY2xpZW50KSB7XG4gICAgc3VwZXIuZXhpdChjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckV4cGVyaWVuY2U7XG4iXX0=