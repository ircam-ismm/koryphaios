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
    this.platform = this.require('platform');
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
        panner: false,
        filter: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYXllckV4cGVyaWVuY2UuanMiXSwibmFtZXMiOlsiUGxheWVyRXhwZXJpZW5jZSIsIkFic3RyYWN0RXhwZXJpZW5jZSIsImNvbnN0cnVjdG9yIiwiY2xpZW50IiwiY29uZmlnIiwiJGNvbnRhaW5lciIsImF1ZGlvQ29udGV4dCIsInJhZklkIiwiY2hlY2tpbiIsInJlcXVpcmUiLCJzeW5jIiwicGxhdGZvcm0iLCJncm91cCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN0YXJ0IiwiZ2xvYmFsTWFzdGVyQnVzIiwiTWFzdGVyQnVzIiwicGFubmVyIiwiZmlsdGVyIiwic3ludGhzIiwic3ludGhNYXN0ZXJCdXMiLCJpIiwibGVuZ3RoIiwic3ludGhUeXBlIiwiY29ubmVjdCIsImlucHV0IiwiZGVzdGluYXRpb24iLCJzeW50aE1hc3RlckNvbnRyb2xzIiwic3RhdGVNYW5hZ2VyIiwib2JzZXJ2ZSIsInNjaGVtYU5hbWUiLCJzdGF0ZUlkIiwibm9kZUlkIiwic3ludGhDb250cm9scyIsImF0dGFjaCIsImdldCIsInN1YnNjcmliZSIsInVwZGF0ZXMiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJwbGF5ZXJTdGF0ZSIsImNyZWF0ZSIsInNldCIsImlkIiwiY29uc29sZSIsImxvZyIsImhhc093blByb3BlcnR5Iiwibm90ZSIsInBsYXlUaW1lIiwiZ2V0TG9jYWxUaW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiTm90ZSIsIm1ldGFzIiwicGxheSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxnQkFBTixTQUErQkMsMEJBQS9CLENBQWtEO0FBQ2hEQyxFQUFBQSxXQUFX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Q0wsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEV4cGVyaWVuY2UgfSBmcm9tICdAc291bmR3b3Jrcy9jb3JlL2NsaWVudCc7XG5pbXBvcnQgeyByZW5kZXIsIGh0bWwgfSBmcm9tICdsaXQtaHRtbCc7XG5pbXBvcnQgcmVuZGVySW5pdGlhbGl6YXRpb25TY3JlZW5zIGZyb20gJ0Bzb3VuZHdvcmtzL3RlbXBsYXRlLWhlbHBlcnMvY2xpZW50L3JlbmRlci1pbml0aWFsaXphdGlvbi1zY3JlZW5zLmpzJztcbmltcG9ydCBOb3RlIGZyb20gJy4uLy4uL3V0aWxzL25vdGUnO1xuaW1wb3J0IE1hc3RlckJ1cyBmcm9tICcuLi8uLi91dGlscy9tYXN0ZXJCdXMnO1xuXG4vKlxuVE9ETyA6IFxuXG4tIEVudmVsb3BwZSA6IGRpZmZlcmVuY2llciBkZWNpYmVsL2xpbsOpYWlyZVxuKi9cblxuY2xhc3MgUGxheWVyRXhwZXJpZW5jZSBleHRlbmRzIEFic3RyYWN0RXhwZXJpZW5jZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgY29uZmlnLCAkY29udGFpbmVyLCBhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihjbGllbnQpO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcbiAgICB0aGlzLnJhZklkID0gbnVsbDtcbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcblxuICAgIC8vIHJlcXVpcmUgcGx1Z2lucyBpZiBuZWVkZWRcbiAgICB0aGlzLmNoZWNraW4gPSB0aGlzLnJlcXVpcmUoJ2NoZWNraW4nKTtcbiAgICB0aGlzLnN5bmMgPSB0aGlzLnJlcXVpcmUoJ3N5bmMnKTtcbiAgICB0aGlzLnBsYXRmb3JtID0gdGhpcy5yZXF1aXJlKCdwbGF0Zm9ybScpO1xuXG4gICAgXG4gICAgdGhpcy5ncm91cCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcblxuICAgIHJlbmRlckluaXRpYWxpemF0aW9uU2NyZWVucyhjbGllbnQsIGNvbmZpZywgJGNvbnRhaW5lcik7XG4gIH1cblxuICBhc3luYyBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgLy9BdWRpbyBwaXBlbGluZVxuICAgIHRoaXMuZ2xvYmFsTWFzdGVyQnVzID0gbmV3IE1hc3RlckJ1cyh0aGlzLmF1ZGlvQ29udGV4dCwgeyBwYW5uZXI6IGZhbHNlLCBmaWx0ZXI6IHRydWV9KTtcbiAgICBjb25zdCBzeW50aHMgPSBbJ3NpbmUnLCAnYW0nLCAnZm0nXTtcbiAgICB0aGlzLnN5bnRoTWFzdGVyQnVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW50aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN5bnRoVHlwZSA9IHN5bnRoc1tpXTtcbiAgICAgIHRoaXMuc3ludGhNYXN0ZXJCdXNbc3ludGhUeXBlXSA9IG5ldyBNYXN0ZXJCdXModGhpcy5hdWRpb0NvbnRleHQsIHsgcGFubmVyOiBmYWxzZSwgZmlsdGVyOiB0cnVlIH0pO1xuICAgICAgdGhpcy5zeW50aE1hc3RlckJ1c1tzeW50aFR5cGVdLmNvbm5lY3QodGhpcy5nbG9iYWxNYXN0ZXJCdXMuaW5wdXQpO1xuICAgIH1cbiAgICB0aGlzLmdsb2JhbE1hc3RlckJ1cy5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBcblxuICAgIHRoaXMuc3ludGhNYXN0ZXJDb250cm9scyA9IHt9O1xuICAgIC8vU3RhdGUgbWFuYWdlciBoYW5kbGluZ1xuICAgIHRoaXMuY2xpZW50LnN0YXRlTWFuYWdlci5vYnNlcnZlKGFzeW5jIChzY2hlbWFOYW1lLCBzdGF0ZUlkLCBub2RlSWQpID0+IHtcbiAgICAgIGlmIChzY2hlbWFOYW1lID09IFwibWFzdGVyQ29udHJvbHNcIikge1xuICAgICAgICBjb25zdCBzeW50aENvbnRyb2xzID0gYXdhaXQgdGhpcy5jbGllbnQuc3RhdGVNYW5hZ2VyLmF0dGFjaChzY2hlbWFOYW1lLCBzdGF0ZUlkKTtcbiAgICAgICAgY29uc3Qgc3ludGhUeXBlID0gc3ludGhDb250cm9scy5nZXQoJ3N5bnRoJyk7XG4gICAgICAgIHRoaXMuc3ludGhNYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdID0gc3ludGhDb250cm9scztcblxuICAgICAgICBzeW50aENvbnRyb2xzLnN1YnNjcmliZSh1cGRhdGVzID0+IHtcbiAgICAgICAgICBpZiAoc3ludGhUeXBlID09PSAnZ2xvYmFsJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModXBkYXRlcykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNYXN0ZXJCdXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHVwZGF0ZXMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3ludGhNYXN0ZXJCdXNbc3ludGhUeXBlXVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucGxheWVyU3RhdGUgPSBhd2FpdCB0aGlzLmNsaWVudC5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdwbGF5ZXInLCB7IGdyb3VwOiB0aGlzLmdyb3VwIH0pO1xuICAgIGF3YWl0IHRoaXMucGxheWVyU3RhdGUuc2V0KHsgaWQ6IHRoaXMuY2hlY2tpbi5nZXQoJ2luZGV4Jyl9KTtcbiAgICBjb25zb2xlLmxvZygnY2hlY2tpbiBpZCA6JywgdGhpcy5wbGF5ZXJTdGF0ZS5nZXQoJ2lkJykpOyAgXG5cbiAgICB0aGlzLnBsYXllclN0YXRlLnN1YnNjcmliZSh1cGRhdGVzID0+IHtcbiAgICAgIGlmICh1cGRhdGVzLmhhc093blByb3BlcnR5KCdub3RlJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkIG5vdGUgOicsIHVwZGF0ZXMubm90ZSk7XG4gICAgICAgIGNvbnN0IHBsYXlUaW1lID0gdGhpcy5zeW5jLmdldExvY2FsVGltZSh1cGRhdGVzLnBsYXlUaW1lKVxuICAgICAgICAvL3BsYXkgbm90ZSBvciBjaG9yZHM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVwZGF0ZXMubm90ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZXMubm90ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IG5ldyBOb3RlKHRoaXMuYXVkaW9Db250ZXh0LCB1cGRhdGVzLm5vdGVbaV0pO1xuICAgICAgICAgICAgbm90ZS5jb25uZWN0KHRoaXMuc3ludGhNYXN0ZXJCdXNbdXBkYXRlcy5ub3RlW2ldLm1ldGFzLnN5bnRoVHlwZV0uaW5wdXQpO1xuICAgICAgICAgICAgbm90ZS5wbGF5KHBsYXlUaW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBub3RlID0gbmV3IE5vdGUodGhpcy5hdWRpb0NvbnRleHQsIHVwZGF0ZXMubm90ZSk7XG4gICAgICAgICAgbm90ZS5jb25uZWN0KHRoaXMuc3ludGhNYXN0ZXJCdXNbdXBkYXRlcy5ub3RlLm1ldGFzLnN5bnRoVHlwZV0uaW5wdXQpO1xuICAgICAgICAgIG5vdGUucGxheShwbGF5VGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IHRlc3RTaW5lID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIC8vIHRlc3RTaW5lLnR5cGUgPSAnc3F1YXJlJztcbiAgICAvLyB0ZXN0U2luZS5jb25uZWN0KHRoaXMuZ2xvYmFsTWFzdGVyQnVzLmlucHV0KTtcbiAgICAvLyB0ZXN0U2luZS5zdGFydCgpO1xuXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5yZW5kZXIoKSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBkZWJvdW5jZSB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcblxuICAgIHRoaXMucmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHJlbmRlcihodG1sYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxuICAgICAgICAgIDxoMSBzdHlsZT1cIm1hcmdpbjogMjBweCAwXCI+JHt0aGlzLmNsaWVudC50eXBlfSBbaWQ6ICR7dGhpcy5jbGllbnQuaWR9XTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCwgdGhpcy4kY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJFeHBlcmllbmNlO1xuIl19