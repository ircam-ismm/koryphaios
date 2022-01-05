"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@soundworks/core/client");

var _litHtml = require("lit-html");

var _renderInitializationScreens = _interopRequireDefault(require("@soundworks/template-helpers/client/render-initialization-screens.js"));

var _note = _interopRequireDefault(require("../../utils/note"));

var _masterBus = _interopRequireDefault(require("../../utils/masterBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
TODO : 

- Enveloppe : differencier decibel/linéaire
*/
class PlayerExperience extends _client.AbstractExperience {
  constructor(client, config, $container, audioContext) {
    super(client);
    this.config = config;
    this.$container = $container;
    this.rafId = null;
    this.audioContext = audioContext; // require plugins if needed

    this.checkin = this.require('checkin');
    this.sync = this.require('sync');
    this.group = 1 + Math.floor(Math.random() * 6);
    (0, _renderInitializationScreens.default)(client, config, $container);
  }

  async start() {
    super.start(); //Audio pipeline

    this.globalMasterBus = new _masterBus.default(this.audioContext, {
      panner: false,
      filter: true
    });
    const synths = ['sine', 'am', 'fm'];
    this.synthMasterBus = {};

    for (let i = 0; i < synths.length; i++) {
      const synthType = synths[i];
      this.synthMasterBus[synthType] = new _masterBus.default(this.audioContext, {
        panner: false
      });
      this.synthMasterBus[synthType].connect(this.globalMasterBus.input);
    }

    this.globalMasterBus.connect(this.audioContext.destination);
    this.synthMasterControls = {}; //State manager handling

    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName == "masterControls") {
        const synthControls = await this.client.stateManager.attach(schemaName, stateId);
        const synthType = synthControls.get('synth');
        this.synthMasterControls[synthType] = synthControls;
        synthControls.subscribe(updates => {
          if (synthType === 'global') {
            for (const [key, value] of Object.entries(updates)) {
              this.globalMasterBus[key] = value;
            }
          } else {
            for (const [key, value] of Object.entries(updates)) {
              this.synthMasterBus[synthType][key] = value;
            }
          }
        });
      }
    });
    this.playerState = await this.client.stateManager.create('player', {
      group: this.group
    });
    await this.playerState.set({
      id: this.checkin.get('index')
    });
    console.log('checkin id :', this.playerState.get('id'));
    this.playerState.subscribe(updates => {
      if (updates.hasOwnProperty('note')) {
        console.log('received note :', updates.note);
        const playTime = this.sync.getLocalTime(updates.playTime); //play note or chords;

        if (Array.isArray(updates.note)) {
          for (let i = 0; i < updates.note.length; i++) {
            const note = new _note.default(this.audioContext, updates.note[i]);
            note.connect(this.synthMasterBus[updates.note[i].metas.synthType].input);
            note.play(playTime);
          }
        } else {
          const note = new _note.default(this.audioContext, updates.note);
          note.connect(this.synthMasterBus[updates.note.metas.synthType].input);
          note.play(playTime);
        }
      }
    }); // const testSine = this.audioContext.createOscillator();
    // testSine.type = 'square';
    // testSine.connect(this.globalMasterBus.input);
    // testSine.start();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYXllckV4cGVyaWVuY2UuanMiXSwibmFtZXMiOlsiUGxheWVyRXhwZXJpZW5jZSIsIkFic3RyYWN0RXhwZXJpZW5jZSIsImNvbnN0cnVjdG9yIiwiY2xpZW50IiwiY29uZmlnIiwiJGNvbnRhaW5lciIsImF1ZGlvQ29udGV4dCIsInJhZklkIiwiY2hlY2tpbiIsInJlcXVpcmUiLCJzeW5jIiwiZ3JvdXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGFydCIsImdsb2JhbE1hc3RlckJ1cyIsIk1hc3RlckJ1cyIsInBhbm5lciIsImZpbHRlciIsInN5bnRocyIsInN5bnRoTWFzdGVyQnVzIiwiaSIsImxlbmd0aCIsInN5bnRoVHlwZSIsImNvbm5lY3QiLCJpbnB1dCIsImRlc3RpbmF0aW9uIiwic3ludGhNYXN0ZXJDb250cm9scyIsInN0YXRlTWFuYWdlciIsIm9ic2VydmUiLCJzY2hlbWFOYW1lIiwic3RhdGVJZCIsIm5vZGVJZCIsInN5bnRoQ29udHJvbHMiLCJhdHRhY2giLCJnZXQiLCJzdWJzY3JpYmUiLCJ1cGRhdGVzIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwicGxheWVyU3RhdGUiLCJjcmVhdGUiLCJzZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJoYXNPd25Qcm9wZXJ0eSIsIm5vdGUiLCJwbGF5VGltZSIsImdldExvY2FsVGltZSIsIkFycmF5IiwiaXNBcnJheSIsIk5vdGUiLCJtZXRhcyIsInBsYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsZ0JBQU4sU0FBK0JDLDBCQUEvQixDQUFrRDtBQUNoREMsRUFBQUEsV0FBVyxDQUFDQyxNQUFE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Q3pCLE9BQUwsQ0FBYSxLQUFLSixjQUFMLENBQW9CaUIsT0FBTyxDQUFDWSxJQUFSLENBQWE1QixDQUFiLEVBQWdCa0MsS0FBaEIsQ0FBc0JoQyxTQUExQyxFQUFxREUsS0FBbEU7QUFDQXdCLFlBQUFBLElBQUksQ0FBQ08sSUFBTCxDQUFVTixRQUFWO0FBQ0Q7QUFFRixTQVBELE1BT087QUFDTCxnQkFBTUQsSUFBSSxHQUFHLElBQUlLLGFBQUosQ0FBUyxLQUFLakQsWUFBZCxFQUE0QmdDLE9BQU8sQ0FBQ1ksSUFBcEMsQ0FBYjtBQUNBQSxVQUFBQSxJQUFJLENBQUN6QixPQUFMLENBQWEsS0FBS0osY0FBTCxDQUFvQmlCLE9BQU8sQ0FBQ1ksSUFBUixDQUFhTSxLQUFiLENBQW1CaEMsU0FBdkMsRUFBa0RFLEtBQS9EO0FBQ0F3QixVQUFBQSxJQUFJLENBQUNPLElBQUwsQ0FBVU4sUUFBVjtBQUNEO0FBQ0Y7QUFDRixLQWxCRCxFQTFDWSxDQThEWjtBQUNBO0FBQ0E7QUFDQTs7QUFHQU8sSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNLEtBQUtDLE1BQUwsRUFBeEM7QUFDQSxTQUFLQSxNQUFMO0FBQ0Q7O0FBRURBLEVBQUFBLE1BQU0sR0FBRztBQUNQO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csb0JBQVAsQ0FBNEIsS0FBS3RELEtBQWpDO0FBRUEsU0FBS0EsS0FBTCxHQUFhbUQsTUFBTSxDQUFDSSxxQkFBUCxDQUE2QixNQUFNO0FBQzlDLDJCQUFPLGtCQUFLO0FBQ2xCO0FBQ0EsdUNBQXVDLEtBQUszRCxNQUFMLENBQVk0RCxJQUFLLFNBQVEsS0FBSzVELE1BQUwsQ0FBWTJDLEVBQUc7QUFDL0U7QUFDQSxPQUpNLEVBSUcsS0FBS3pDLFVBSlI7QUFLRCxLQU5ZLENBQWI7QUFPRDs7QUF0RytDOztlQXlHbkNMLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RFeHBlcmllbmNlIH0gZnJvbSAnQHNvdW5kd29ya3MvY29yZS9jbGllbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnbGl0LWh0bWwnO1xuaW1wb3J0IHJlbmRlckluaXRpYWxpemF0aW9uU2NyZWVucyBmcm9tICdAc291bmR3b3Jrcy90ZW1wbGF0ZS1oZWxwZXJzL2NsaWVudC9yZW5kZXItaW5pdGlhbGl6YXRpb24tc2NyZWVucy5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuLi8uLi91dGlscy9ub3RlJztcbmltcG9ydCBNYXN0ZXJCdXMgZnJvbSAnLi4vLi4vdXRpbHMvbWFzdGVyQnVzJztcblxuLypcblRPRE8gOiBcblxuLSBFbnZlbG9wcGUgOiBkaWZmZXJlbmNpZXIgZGVjaWJlbC9saW7DqWFpcmVcbiovXG5cbmNsYXNzIFBsYXllckV4cGVyaWVuY2UgZXh0ZW5kcyBBYnN0cmFjdEV4cGVyaWVuY2Uge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGNvbmZpZywgJGNvbnRhaW5lciwgYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoY2xpZW50KTtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG4gICAgdGhpcy5yYWZJZCA9IG51bGw7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG5cbiAgICAvLyByZXF1aXJlIHBsdWdpbnMgaWYgbmVlZGVkXG4gICAgdGhpcy5jaGVja2luID0gdGhpcy5yZXF1aXJlKCdjaGVja2luJyk7XG4gICAgdGhpcy5zeW5jID0gdGhpcy5yZXF1aXJlKCdzeW5jJyk7XG5cbiAgICBcbiAgICB0aGlzLmdyb3VwID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xuXG4gICAgcmVuZGVySW5pdGlhbGl6YXRpb25TY3JlZW5zKGNsaWVudCwgY29uZmlnLCAkY29udGFpbmVyKTtcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0KCkge1xuICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAvL0F1ZGlvIHBpcGVsaW5lXG4gICAgdGhpcy5nbG9iYWxNYXN0ZXJCdXMgPSBuZXcgTWFzdGVyQnVzKHRoaXMuYXVkaW9Db250ZXh0LCB7IHBhbm5lcjogZmFsc2UsIGZpbHRlcjogdHJ1ZX0pO1xuICAgIGNvbnN0IHN5bnRocyA9IFsnc2luZScsICdhbScsICdmbSddO1xuICAgIHRoaXMuc3ludGhNYXN0ZXJCdXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bnRocy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3ludGhUeXBlID0gc3ludGhzW2ldO1xuICAgICAgdGhpcy5zeW50aE1hc3RlckJ1c1tzeW50aFR5cGVdID0gbmV3IE1hc3RlckJ1cyh0aGlzLmF1ZGlvQ29udGV4dCwgeyBwYW5uZXI6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5zeW50aE1hc3RlckJ1c1tzeW50aFR5cGVdLmNvbm5lY3QodGhpcy5nbG9iYWxNYXN0ZXJCdXMuaW5wdXQpO1xuICAgIH1cbiAgICB0aGlzLmdsb2JhbE1hc3RlckJ1cy5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBcblxuICAgIHRoaXMuc3ludGhNYXN0ZXJDb250cm9scyA9IHt9O1xuICAgIC8vU3RhdGUgbWFuYWdlciBoYW5kbGluZ1xuICAgIHRoaXMuY2xpZW50LnN0YXRlTWFuYWdlci5vYnNlcnZlKGFzeW5jIChzY2hlbWFOYW1lLCBzdGF0ZUlkLCBub2RlSWQpID0+IHtcbiAgICAgIGlmIChzY2hlbWFOYW1lID09IFwibWFzdGVyQ29udHJvbHNcIikge1xuICAgICAgICBjb25zdCBzeW50aENvbnRyb2xzID0gYXdhaXQgdGhpcy5jbGllbnQuc3RhdGVNYW5hZ2VyLmF0dGFjaChzY2hlbWFOYW1lLCBzdGF0ZUlkKTtcbiAgICAgICAgY29uc3Qgc3ludGhUeXBlID0gc3ludGhDb250cm9scy5nZXQoJ3N5bnRoJyk7XG4gICAgICAgIHRoaXMuc3ludGhNYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdID0gc3ludGhDb250cm9scztcblxuICAgICAgICBzeW50aENvbnRyb2xzLnN1YnNjcmliZSh1cGRhdGVzID0+IHtcbiAgICAgICAgICBpZiAoc3ludGhUeXBlID09PSAnZ2xvYmFsJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModXBkYXRlcykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNYXN0ZXJCdXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHVwZGF0ZXMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3ludGhNYXN0ZXJCdXNbc3ludGhUeXBlXVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucGxheWVyU3RhdGUgPSBhd2FpdCB0aGlzLmNsaWVudC5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdwbGF5ZXInLCB7IGdyb3VwOiB0aGlzLmdyb3VwIH0pO1xuICAgIGF3YWl0IHRoaXMucGxheWVyU3RhdGUuc2V0KHsgaWQ6IHRoaXMuY2hlY2tpbi5nZXQoJ2luZGV4Jyl9KTtcbiAgICBjb25zb2xlLmxvZygnY2hlY2tpbiBpZCA6JywgdGhpcy5wbGF5ZXJTdGF0ZS5nZXQoJ2lkJykpOyAgXG5cbiAgICB0aGlzLnBsYXllclN0YXRlLnN1YnNjcmliZSh1cGRhdGVzID0+IHtcbiAgICAgIGlmICh1cGRhdGVzLmhhc093blByb3BlcnR5KCdub3RlJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkIG5vdGUgOicsIHVwZGF0ZXMubm90ZSk7XG4gICAgICAgIGNvbnN0IHBsYXlUaW1lID0gdGhpcy5zeW5jLmdldExvY2FsVGltZSh1cGRhdGVzLnBsYXlUaW1lKVxuICAgICAgICAvL3BsYXkgbm90ZSBvciBjaG9yZHM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVwZGF0ZXMubm90ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZXMubm90ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IG5ldyBOb3RlKHRoaXMuYXVkaW9Db250ZXh0LCB1cGRhdGVzLm5vdGVbaV0pO1xuICAgICAgICAgICAgbm90ZS5jb25uZWN0KHRoaXMuc3ludGhNYXN0ZXJCdXNbdXBkYXRlcy5ub3RlW2ldLm1ldGFzLnN5bnRoVHlwZV0uaW5wdXQpO1xuICAgICAgICAgICAgbm90ZS5wbGF5KHBsYXlUaW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBub3RlID0gbmV3IE5vdGUodGhpcy5hdWRpb0NvbnRleHQsIHVwZGF0ZXMubm90ZSk7XG4gICAgICAgICAgbm90ZS5jb25uZWN0KHRoaXMuc3ludGhNYXN0ZXJCdXNbdXBkYXRlcy5ub3RlLm1ldGFzLnN5bnRoVHlwZV0uaW5wdXQpO1xuICAgICAgICAgIG5vdGUucGxheShwbGF5VGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IHRlc3RTaW5lID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIC8vIHRlc3RTaW5lLnR5cGUgPSAnc3F1YXJlJztcbiAgICAvLyB0ZXN0U2luZS5jb25uZWN0KHRoaXMuZ2xvYmFsTWFzdGVyQnVzLmlucHV0KTtcbiAgICAvLyB0ZXN0U2luZS5zdGFydCgpO1xuXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5yZW5kZXIoKSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBkZWJvdW5jZSB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcblxuICAgIHRoaXMucmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHJlbmRlcihodG1sYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxuICAgICAgICAgIDxoMSBzdHlsZT1cIm1hcmdpbjogMjBweCAwXCI+JHt0aGlzLmNsaWVudC50eXBlfSBbaWQ6ICR7dGhpcy5jbGllbnQuaWR9XTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCwgdGhpcy4kY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJFeHBlcmllbmNlO1xuIl19