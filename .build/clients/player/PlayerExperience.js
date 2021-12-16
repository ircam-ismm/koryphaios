"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@soundworks/core/client");

var _litHtml = require("lit-html");

var _renderInitializationScreens = _interopRequireDefault(require("@soundworks/template-helpers/client/render-initialization-screens.js"));

var _note = _interopRequireDefault(require("../../utils/note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlayerExperience extends _client.AbstractExperience {
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
    this.score = await this.client.stateManager.attach('score');
    const dictNote = {
      frequency: 1100,
      velocity: -20,
      duration: 5,
      enveloppe: [[0, 0, 0], [0.5, 1, -0.2], [1, 0, 0]],
      metas: {
        synthType: 'sine'
      }
    };
    this.score.subscribe(async updates => {
      if (updates.hasOwnProperty('message')) {
        console.log(updates.message);
      }

      if (updates.hasOwnProperty('note')) {
        const noteDict = updates.note;
        noteDict.enveloppe = JSON.parse(noteDict.enveloppe);
        console.log('note formatted : ', noteDict);
        const note = new _note.default(this.audioContext, updates.note);
        note.connect(this.audioContext.destination);
        note.play(this.audioContext.currentTime);
      }
    });
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
      `, this.$container);
    });
  }

}

var _default = PlayerExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYXllckV4cGVyaWVuY2UuanMiXSwibmFtZXMiOlsiUGxheWVyRXhwZXJpZW5jZSIsIkFic3RyYWN0RXhwZXJpZW5jZSIsImNvbnN0cnVjdG9yIiwiY2xpZW50IiwiY29uZmlnIiwiJGNvbnRhaW5lciIsImF1ZGlvQ29udGV4dCIsInJhZklkIiwic3RhcnQiLCJzY29yZSIsInN0YXRlTWFuYWdlciIsImF0dGFjaCIsImRpY3ROb3RlIiwiZnJlcXVlbmN5IiwidmVsb2NpdHkiLCJkdXJhdGlvbiIsImVudmVsb3BwZSIsIm1ldGFzIiwic3ludGhUeXBlIiwic3Vic2NyaWJlIiwidXBkYXRlcyIsImhhc093blByb3BlcnR5IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJub3RlRGljdCIsIm5vdGUiLCJKU09OIiwicGFyc2UiLCJOb3RlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwicGxheSIsImN1cnJlbnRUaW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidHlwZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxnQkFBTixTQUErQkMsMEJBQS9CLENBQWtEO0FBQ2hEQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFpQkMsVUFBakIsRUFBNkJDLFlBQTdCLEVBQTJDO0FBQ3BELFVBQU1ILE1BQU47QUFFQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtFLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0QsWUFBTCxHQUFvQkEsWUFBcEIsQ0FOb0QsQ0FRcEQ7O0FBRUEsOENBQTRCSCxNQUE1QixFQUFvQ0MsTUFBcEMsRUFBNENDLFVBQTVDO0FBQ0Q7O0FBRVUsUUFBTEcsS0FBSyxHQUFHO0FBQ1osVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBYSxNQUFNLEtBQUtOLE1BQUwsQ0FBWU8sWUFBWixDQUF5QkMsTUFBekIsQ0FBZ0MsT0FBaEMsQ0FBbkI7QUFFQSxVQUFNQyxRQUFRLEdBQUc7QUFDZkMsTUFBQUEsU0FBUyxFQUFFLElBREk7QUFFZkMsTUFBQUEsUUFBUSxFQUFFLENBQUMsRUFGSTtBQUdmQyxNQUFBQSxRQUFRLEVBQUUsQ0FISztBQUlmQyxNQUFBQSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxHQUFELEVBQU0sQ0FBTixFQUFTLENBQUMsR0FBVixDQUFaLEVBQTRCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTVCLENBSkk7QUFLZkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLFNBQVMsRUFBRTtBQUROO0FBTFEsS0FBakI7QUFVQSxTQUFLVCxLQUFMLENBQVdVLFNBQVgsQ0FBcUIsTUFBTUMsT0FBTixJQUFpQjtBQUNwQyxVQUFJQSxPQUFPLENBQUNDLGNBQVIsQ0FBdUIsU0FBdkIsQ0FBSixFQUFzQztBQUNwQ0MsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQU8sQ0FBQ0ksT0FBcEI7QUFDRDs7QUFDRCxVQUFJSixPQUFPLENBQUNDLGNBQVIsQ0FBdUIsTUFBdkIsQ0FBSixFQUFtQztBQUNqQyxjQUFNSSxRQUFRLEdBQUdMLE9BQU8sQ0FBQ00sSUFBekI7QUFDQUQsUUFBQUEsUUFBUSxDQUFDVCxTQUFULEdBQXFCVyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBUSxDQUFDVCxTQUFwQixDQUFyQjtBQUNBTSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0UsUUFBakM7QUFDQSxjQUFNQyxJQUFJLEdBQUcsSUFBSUcsYUFBSixDQUFTLEtBQUt2QixZQUFkLEVBQTRCYyxPQUFPLENBQUNNLElBQXBDLENBQWI7QUFDQUEsUUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWEsS0FBS3hCLFlBQUwsQ0FBa0J5QixXQUEvQjtBQUNBTCxRQUFBQSxJQUFJLENBQUNNLElBQUwsQ0FBVSxLQUFLMUIsWUFBTCxDQUFrQjJCLFdBQTVCO0FBQ0Q7QUFDRixLQVpEO0FBY0FDLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBTSxLQUFLQyxNQUFMLEVBQXhDO0FBQ0EsU0FBS0EsTUFBTDtBQUNEOztBQUVEQSxFQUFBQSxNQUFNLEdBQUc7QUFDUDtBQUNBRixJQUFBQSxNQUFNLENBQUNHLG9CQUFQLENBQTRCLEtBQUs5QixLQUFqQztBQUVBLFNBQUtBLEtBQUwsR0FBYTJCLE1BQU0sQ0FBQ0kscUJBQVAsQ0FBNkIsTUFBTTtBQUM5QywyQkFBTyxrQkFBSztBQUNsQjtBQUNBLHVDQUF1QyxLQUFLbkMsTUFBTCxDQUFZb0MsSUFBSyxTQUFRLEtBQUtwQyxNQUFMLENBQVlxQyxFQUFHO0FBQy9FO0FBQ0EsT0FKTSxFQUlHLEtBQUtuQyxVQUpSO0FBS0QsS0FOWSxDQUFiO0FBT0Q7O0FBMUQrQzs7ZUE2RG5DTCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0RXhwZXJpZW5jZSB9IGZyb20gJ0Bzb3VuZHdvcmtzL2NvcmUvY2xpZW50JztcbmltcG9ydCB7IHJlbmRlciwgaHRtbCB9IGZyb20gJ2xpdC1odG1sJztcbmltcG9ydCByZW5kZXJJbml0aWFsaXphdGlvblNjcmVlbnMgZnJvbSAnQHNvdW5kd29ya3MvdGVtcGxhdGUtaGVscGVycy9jbGllbnQvcmVuZGVyLWluaXRpYWxpemF0aW9uLXNjcmVlbnMuanMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vLi4vdXRpbHMvbm90ZSc7XG5cbmNsYXNzIFBsYXllckV4cGVyaWVuY2UgZXh0ZW5kcyBBYnN0cmFjdEV4cGVyaWVuY2Uge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGNvbmZpZywgJGNvbnRhaW5lciwgYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoY2xpZW50KTtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG4gICAgdGhpcy5yYWZJZCA9IG51bGw7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG5cbiAgICAvLyByZXF1aXJlIHBsdWdpbnMgaWYgbmVlZGVkXG5cbiAgICByZW5kZXJJbml0aWFsaXphdGlvblNjcmVlbnMoY2xpZW50LCBjb25maWcsICRjb250YWluZXIpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcblxuICAgIHRoaXMuc2NvcmUgPSBhd2FpdCB0aGlzLmNsaWVudC5zdGF0ZU1hbmFnZXIuYXR0YWNoKCdzY29yZScpO1xuXG4gICAgY29uc3QgZGljdE5vdGUgPSB7XG4gICAgICBmcmVxdWVuY3k6IDExMDAsXG4gICAgICB2ZWxvY2l0eTogLTIwLFxuICAgICAgZHVyYXRpb246IDUsXG4gICAgICBlbnZlbG9wcGU6IFtbMCwgMCwgMF0sIFswLjUsIDEsIC0wLjJdLCBbMSwgMCwgMF1dLFxuICAgICAgbWV0YXM6IHtcbiAgICAgICAgc3ludGhUeXBlOiAnc2luZScsXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2NvcmUuc3Vic2NyaWJlKGFzeW5jIHVwZGF0ZXMgPT4ge1xuICAgICAgaWYgKHVwZGF0ZXMuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZXMubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBpZiAodXBkYXRlcy5oYXNPd25Qcm9wZXJ0eSgnbm90ZScpKXtcbiAgICAgICAgY29uc3Qgbm90ZURpY3QgPSB1cGRhdGVzLm5vdGU7XG4gICAgICAgIG5vdGVEaWN0LmVudmVsb3BwZSA9IEpTT04ucGFyc2Uobm90ZURpY3QuZW52ZWxvcHBlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25vdGUgZm9ybWF0dGVkIDogJywgbm90ZURpY3QpO1xuICAgICAgICBjb25zdCBub3RlID0gbmV3IE5vdGUodGhpcy5hdWRpb0NvbnRleHQsIHVwZGF0ZXMubm90ZSk7XG4gICAgICAgIG5vdGUuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgIG5vdGUucGxheSh0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5yZW5kZXIoKSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBkZWJvdW5jZSB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcblxuICAgIHRoaXMucmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHJlbmRlcihodG1sYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxuICAgICAgICAgIDxoMSBzdHlsZT1cIm1hcmdpbjogMjBweCAwXCI+JHt0aGlzLmNsaWVudC50eXBlfSBbaWQ6ICR7dGhpcy5jbGllbnQuaWR9XTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCwgdGhpcy4kY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJFeHBlcmllbmNlO1xuIl19