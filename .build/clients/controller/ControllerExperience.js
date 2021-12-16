"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@soundworks/core/client");

var _litHtml = require("lit-html");

var _renderInitializationScreens = _interopRequireDefault(require("@soundworks/template-helpers/client/render-initialization-screens.js"));

require("@ircam/simple-components/sc-bang.js");

require("@ircam/simple-components/sc-slider.js");

require("@ircam/simple-components/sc-toggle.js");

var _note = _interopRequireDefault(require("../../utils/note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ControllerExperience extends _client.AbstractExperience {
  constructor(client, config, $container, audioContext) {
    super(client);
    this.config = config;
    this.$container = $container;
    this.rafId = null;
    this.audioContext = audioContext; // require plugins if needed

    (0, _renderInitializationScreens.default)(client, config, $container);
  }

  async start() {
    super.start();
    this.globals = await this.client.stateManager.attach('globals');
    const dictNote = {
      frequency: 1100,
      velocity: -20,
      duration: 5,
      enveloppe: [[0, 0, 0], [0.5, 1, -0.2], [1, 0, 0]],
      metas: {
        synthType: 'sine'
      }
    };
    this.note = new _note.default(this.audioContext, dictNote);
    this.note.connect(this.audioContext.destination); // console.log(globals.get('volume'));
    // this.osc = this.audioContext.createOscillator();
    // this.osc.connect(this.audioContext.destination);

    window.addEventListener('resize', () => this.render());
    this.render();
  }

  render() {
    // debounce with requestAnimationFrame
    window.cancelAnimationFrame(this.rafId);
    this.rafId = window.requestAnimationFrame(() => {
      (0, _litHtml.render)((0, _litHtml.html)`
        <div style="padding: 20px">
          <h1 style="margin: 20px 0">${this.client.type} [id: ${this.client.id}]</h1>
        </div>

        <sc-bang
          @input="${e => this.note.play(this.audioContext.currentTime)}"
        ></sc-bang>

        <sc-slider
          min="-80"
          max="6"
          value="0"
          display-number
          @input="${e => this.globals.set({
        volume: e.detail.value
      })}"
      ></sc-slider>
      
      <sc-toggle
        @change="${e => this.globals.set({
        mute: e.detail.value
      })}"
      ></sc-toggle>
      `, this.$container);
    });
  }

}

var _default = ControllerExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlIiwiQWJzdHJhY3RFeHBlcmllbmNlIiwiY29uc3RydWN0b3IiLCJjbGllbnQiLCJjb25maWciLCIkY29udGFpbmVyIiwiYXVkaW9Db250ZXh0IiwicmFmSWQiLCJzdGFydCIsImdsb2JhbHMiLCJzdGF0ZU1hbmFnZXIiLCJhdHRhY2giLCJkaWN0Tm90ZSIsImZyZXF1ZW5jeSIsInZlbG9jaXR5IiwiZHVyYXRpb24iLCJlbnZlbG9wcGUiLCJtZXRhcyIsInN5bnRoVHlwZSIsIm5vdGUiLCJOb3RlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidHlwZSIsImlkIiwiZSIsInBsYXkiLCJjdXJyZW50VGltZSIsInNldCIsInZvbHVtZSIsImRldGFpbCIsInZhbHVlIiwibXV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsb0JBQU4sU0FBbUNDLDBCQUFuQyxDQUFzRDtBQUNwREMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLFVBQWpCLEVBQTZCQyxZQUE3QixFQUEyQztBQUNwRCxVQUFNSCxNQUFOO0FBRUEsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLRSxLQUFMLEdBQWEsSUFBYjtBQUVBLFNBQUtELFlBQUwsR0FBb0JBLFlBQXBCLENBUG9ELENBU3BEOztBQUVBLDhDQUE0QkgsTUFBNUIsRUFBb0NDLE1BQXBDLEVBQTRDQyxVQUE1QztBQUNEOztBQUVVLFFBQUxHLEtBQUssR0FBRztBQUNaLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxPQUFMLEdBQWUsTUFBTSxLQUFLTixNQUFMLENBQVlPLFlBQVosQ0FBeUJDLE1BQXpCLENBQWdDLFNBQWhDLENBQXJCO0FBRUEsVUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLE1BQUFBLFNBQVMsRUFBRSxJQURJO0FBRWZDLE1BQUFBLFFBQVEsRUFBRSxDQUFDLEVBRkk7QUFHZkMsTUFBQUEsUUFBUSxFQUFFLENBSEs7QUFJZkMsTUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxDQUFDLEdBQVYsQ0FBWixFQUE0QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUE1QixDQUpJO0FBS2ZDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxTQUFTLEVBQUU7QUFETjtBQUxRLEtBQWpCO0FBU0EsU0FBS0MsSUFBTCxHQUFZLElBQUlDLGFBQUosQ0FBUyxLQUFLZCxZQUFkLEVBQTRCTSxRQUE1QixDQUFaO0FBQ0EsU0FBS08sSUFBTCxDQUFVRSxPQUFWLENBQWtCLEtBQUtmLFlBQUwsQ0FBa0JnQixXQUFwQyxFQWZZLENBa0JaO0FBRUE7QUFDQTs7QUFJQUMsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNLEtBQUtDLE1BQUwsRUFBeEM7QUFDQSxTQUFLQSxNQUFMO0FBQ0Q7O0FBRURBLEVBQUFBLE1BQU0sR0FBRztBQUNQO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csb0JBQVAsQ0FBNEIsS0FBS25CLEtBQWpDO0FBRUEsU0FBS0EsS0FBTCxHQUFhZ0IsTUFBTSxDQUFDSSxxQkFBUCxDQUE2QixNQUFNO0FBQzlDLDJCQUFPLGtCQUFLO0FBQ2xCO0FBQ0EsdUNBQXVDLEtBQUt4QixNQUFMLENBQVl5QixJQUFLLFNBQVEsS0FBS3pCLE1BQUwsQ0FBWTBCLEVBQUc7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CQyxDQUFDLElBQUksS0FBS1gsSUFBTCxDQUFVWSxJQUFWLENBQWUsS0FBS3pCLFlBQUwsQ0FBa0IwQixXQUFqQyxDQUE4QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQkYsQ0FBQyxJQUFJLEtBQUtyQixPQUFMLENBQWF3QixHQUFiLENBQWlCO0FBQUNDLFFBQUFBLE1BQU0sRUFBRUosQ0FBQyxDQUFDSyxNQUFGLENBQVNDO0FBQWxCLE9BQWpCLENBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQk4sQ0FBQyxJQUFJLEtBQUtyQixPQUFMLENBQWF3QixHQUFiLENBQWlCO0FBQUNJLFFBQUFBLElBQUksRUFBRVAsQ0FBQyxDQUFDSyxNQUFGLENBQVNDO0FBQWhCLE9BQWpCLENBQXlDO0FBQ2pFO0FBQ0EsT0FwQk0sRUFvQkcsS0FBSy9CLFVBcEJSO0FBcUJELEtBdEJZLENBQWI7QUF1QkQ7O0FBdkVtRDs7ZUEwRXZDTCxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0RXhwZXJpZW5jZSB9IGZyb20gJ0Bzb3VuZHdvcmtzL2NvcmUvY2xpZW50JztcbmltcG9ydCB7IHJlbmRlciwgaHRtbCB9IGZyb20gJ2xpdC1odG1sJztcbmltcG9ydCByZW5kZXJJbml0aWFsaXphdGlvblNjcmVlbnMgZnJvbSAnQHNvdW5kd29ya3MvdGVtcGxhdGUtaGVscGVycy9jbGllbnQvcmVuZGVyLWluaXRpYWxpemF0aW9uLXNjcmVlbnMuanMnO1xuaW1wb3J0ICdAaXJjYW0vc2ltcGxlLWNvbXBvbmVudHMvc2MtYmFuZy5qcyc7XG5pbXBvcnQgJ0BpcmNhbS9zaW1wbGUtY29tcG9uZW50cy9zYy1zbGlkZXIuanMnO1xuaW1wb3J0ICdAaXJjYW0vc2ltcGxlLWNvbXBvbmVudHMvc2MtdG9nZ2xlLmpzJztcbmltcG9ydCBOb3RlIGZyb20gJy4uLy4uL3V0aWxzL25vdGUnO1xuXG5jbGFzcyBDb250cm9sbGVyRXhwZXJpZW5jZSBleHRlbmRzIEFic3RyYWN0RXhwZXJpZW5jZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgY29uZmlnLCAkY29udGFpbmVyLCBhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihjbGllbnQpO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcbiAgICB0aGlzLnJhZklkID0gbnVsbDtcblxuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuXG4gICAgLy8gcmVxdWlyZSBwbHVnaW5zIGlmIG5lZWRlZFxuXG4gICAgcmVuZGVySW5pdGlhbGl6YXRpb25TY3JlZW5zKGNsaWVudCwgY29uZmlnLCAkY29udGFpbmVyKTtcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0KCkge1xuICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICB0aGlzLmdsb2JhbHMgPSBhd2FpdCB0aGlzLmNsaWVudC5zdGF0ZU1hbmFnZXIuYXR0YWNoKCdnbG9iYWxzJyk7XG5cbiAgICBjb25zdCBkaWN0Tm90ZSA9IHtcbiAgICAgIGZyZXF1ZW5jeTogMTEwMCxcbiAgICAgIHZlbG9jaXR5OiAtMjAsXG4gICAgICBkdXJhdGlvbjogNSxcbiAgICAgIGVudmVsb3BwZTogW1swLCAwLCAwXSwgWzAuNSwgMSwgLTAuMl0sIFsxLCAwLCAwXV0sXG4gICAgICBtZXRhczoge1xuICAgICAgICBzeW50aFR5cGU6ICdzaW5lJyxcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ub3RlID0gbmV3IE5vdGUodGhpcy5hdWRpb0NvbnRleHQsIGRpY3ROb3RlKTtcbiAgICB0aGlzLm5vdGUuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKGdsb2JhbHMuZ2V0KCd2b2x1bWUnKSk7XG5cbiAgICAvLyB0aGlzLm9zYyA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAvLyB0aGlzLm9zYy5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcblxuXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5yZW5kZXIoKSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBkZWJvdW5jZSB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcblxuICAgIHRoaXMucmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHJlbmRlcihodG1sYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxuICAgICAgICAgIDxoMSBzdHlsZT1cIm1hcmdpbjogMjBweCAwXCI+JHt0aGlzLmNsaWVudC50eXBlfSBbaWQ6ICR7dGhpcy5jbGllbnQuaWR9XTwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzYy1iYW5nXG4gICAgICAgICAgQGlucHV0PVwiJHtlID0+IHRoaXMubm90ZS5wbGF5KHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lKX1cIlxuICAgICAgICA+PC9zYy1iYW5nPlxuXG4gICAgICAgIDxzYy1zbGlkZXJcbiAgICAgICAgICBtaW49XCItODBcIlxuICAgICAgICAgIG1heD1cIjZcIlxuICAgICAgICAgIHZhbHVlPVwiMFwiXG4gICAgICAgICAgZGlzcGxheS1udW1iZXJcbiAgICAgICAgICBAaW5wdXQ9XCIke2UgPT4gdGhpcy5nbG9iYWxzLnNldCh7dm9sdW1lOiBlLmRldGFpbC52YWx1ZX0pfVwiXG4gICAgICA+PC9zYy1zbGlkZXI+XG4gICAgICBcbiAgICAgIDxzYy10b2dnbGVcbiAgICAgICAgQGNoYW5nZT1cIiR7ZSA9PiB0aGlzLmdsb2JhbHMuc2V0KHttdXRlOiBlLmRldGFpbC52YWx1ZX0pfVwiXG4gICAgICA+PC9zYy10b2dnbGU+XG4gICAgICBgLCB0aGlzLiRjb250YWluZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXJFeHBlcmllbmNlO1xuIl19