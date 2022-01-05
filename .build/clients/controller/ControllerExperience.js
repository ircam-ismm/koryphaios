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

require("@ircam/simple-components/sc-editor.js");

require("@ircam/simple-components/sc-button.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
TODO: 
- default value of toggle mute according to state
- logarithmic control for volume ?
*/
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
    this.score = await this.client.stateManager.attach('score');
    this.masterControls = {};
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName == "masterControls") {
        const groupControls = await this.client.stateManager.attach(schemaName, stateId);
        const synthType = groupControls.get('synth');
        this.masterControls[synthType] = groupControls;
      }
    });
    this.score.subscribe(updates => {
      if (updates.hasOwnProperty('notes')) {
        //Print in logger
        const $logger = document.body.querySelector('#note-logger');

        if ($logger.childElementCount > 100) {
          $logger.removeChild($logger.lastChild); //Remove oldest element if too much logged
        }

        const $chordParagraph = document.createElement('p');
        let $textContent = document.createTextNode(`NEW CHORD:\r\n`);
        $chordParagraph.appendChild($textContent);

        for (let i = 0; i < updates.notes.length; i++) {
          const $noteparagraph = document.createElement('p');
          $noteparagraph.setAttribute('style', 'white-space: pre;');
          $textContent = document.createTextNode(`Note ${i}\r\n`);
          $noteparagraph.appendChild($textContent);
          $textContent = document.createTextNode(`frequency : ${updates.notes[i].frequency}\r\n`);
          $noteparagraph.appendChild($textContent);
          $textContent = document.createTextNode(`velocity (dB) : ${updates.notes[i].velocity}\r\n`);
          $noteparagraph.appendChild($textContent);
          $textContent = document.createTextNode(`duration (s) : ${updates.notes[i].duration}\r\n`);
          $noteparagraph.appendChild($textContent);
          $textContent = document.createTextNode(`enveloppe : ${JSON.stringify(updates.notes[i].enveloppe)}\r\n`);
          $noteparagraph.appendChild($textContent);
          $textContent = document.createTextNode(`synth type : ${updates.notes[i].metas.synthType}\r\n`);
          $noteparagraph.appendChild($textContent);

          switch (updates.notes[i].metas.synthType) {
            case 'sine':
              break;

            case 'am':
              $textContent = document.createTextNode(`mod freq : ${updates.notes[i].metas.modFreq}\r\n`);
              $noteparagraph.appendChild($textContent);
              $textContent = document.createTextNode(`mod depth : ${updates.notes[i].metas.modDepth}\r\n`);
              $noteparagraph.appendChild($textContent);
              break;

            case 'fm':
              $textContent = document.createTextNode(`harmonicity : ${updates.notes[i].metas.harmonicity}\r\n`);
              $noteparagraph.appendChild($textContent);
              $textContent = document.createTextNode(`mod index : ${updates.notes[i].metas.modIndex}\r\n`);
              $noteparagraph.appendChild($textContent);
              break;
          }

          $chordParagraph.appendChild($noteparagraph);
        }

        $logger.prepend($chordParagraph);
      }
    });
    window.addEventListener('resize', () => this.render());
    this.render();
    setTimeout(() => {
      const synths = ['global', 'sine', 'am', 'fm'];

      for (let i = 0; i < synths.length; i++) {
        const $controls = document.body.querySelector(`#${synths[i]}-controls`);
        this.renderGroupControls(synths[i], $controls);
      }
    }, 50); // no workaround ??
    // this.renderGroupControls(document.body.querySelector('#gp1-controls'));
  }

  clearLog() {
    const $logger = document.body.querySelector('#note-logger');
    const nLogged = $logger.childElementCount;

    for (var i = 0; i < nLogged; i++) {
      $logger.removeChild($logger.lastChild);
    }
  }

  renderGroupControls(synthType, container) {
    this.rafId = window.requestAnimationFrame(() => {
      (0, _litHtml.render)((0, _litHtml.html)`
        <p
          style="
            position: absolute;
            left: 2%;
            top: 0%;
            font-size: x-large;
          "
          >${synthType} controls </p>
        <p
          style="
            position: absolute;
            left: 2%;
            top: 22%;
            font-size: medium;
          "
        >Mute: </p>
        <sc-toggle
          style="
            position: absolute;
            left: 26%;
            top: 22%;
          "
          width="50";
          height="50";
          @change="${e => this.masterControls[synthType].set({
        mute: e.detail.value
      })}"
        ></sc-toggle>

        <p
          style="
            position: absolute;
            left: 2%;
            top: 40%;
            font-size: medium;
          "
        >Volume: </p>
        <sc-slider
          style="
            position: absolute;
            left: 26%;
            top: 42%;
          "
          height="40"
          width="290"
          min="-60"
          max="0"
          value="${this.masterControls[synthType].get('volume')}"
          @input="${e => this.masterControls[synthType].set({
        volume: e.detail.value
      })}"
          display-number
        ></sc-slider>

        <p
          style="
            position: absolute;
            left: 2%;
            top: 58%;
            font-size: medium;
          "
        >Low-pass </br>freq: </p>
        <sc-slider
          style="
            position: absolute;
            left: 26%;
            top: 62%;
          "
          height="40"
          width="290"
          min="20"
          max="20000"
          value="${this.masterControls[synthType].get('lowPassFreq')}"
          @input="${e => this.masterControls[synthType].set({
        lowPassFreq: e.detail.value
      })}"
          display-number
        ></sc-slider>

        <p
          style="
            position: absolute;
            left: 2%;
            top: 78%;
            font-size: medium;
          "
        >High-pass </br>freq: </p>
        <sc-slider
          style="
            position: absolute;
            left: 26%;
            top: 82%;
          "
          height="40"
          width="290"
          min="20"
          max="20000"
          value="${this.masterControls[synthType].get('highPassFreq')}"
          @input="${e => this.masterControls[synthType].set({
        highPassFreq: e.detail.value
      })}"
          display-number
        ></sc-slider>
      `, container);
    });
  }

  render() {
    // debounce with requestAnimationFrame
    window.cancelAnimationFrame(this.rafId);
    this.rafId = window.requestAnimationFrame(() => {
      (0, _litHtml.render)((0, _litHtml.html)`
        <div style="padding: 10px">
          <h1 style="margin: 20px 0">${this.client.type} [id: ${this.client.id}]</h1>
        </div>

        <!--Note logger-->
        <div 
          style="
            position: absolute;
            top: 70px;
            left: 5px;
            height: 400px;
            width: 300px;
          "
        >
          <p
            style="
              position: absolute;
              font-size: medium;
            "
          >OSC log: </p>
          <div
            style="
              position: absolute;
              top: 10%;
              height: 90%;
              width: 100%;
              overflow: auto;
              background-color: rgba(255, 255, 255, .4);
            "
            id="note-logger"
          ></div>
          <sc-button
            style="
              position: absolute;
              top: 370px;
              left: 250px;
            "
            @press="${e => this.clearLog()}"
            height="30"
            width="50"
            text="clear"
          ></sc-button>

        </div>

        <!--Code for dispatch-->
        <div 
          style="
            position: absolute;
            top: 480px;
            left: 5px;
            height: 270px;
            width: 300px;
          "
        >
          <p
            style="
              position: absolute;
              font-size: medium;
            "
          >Note dispatch code: </p>
          <sc-editor
            style="
              position: absolute;
              top: 14%;
            "
            height=250
            width=300
          ></sc-editor>
        </div>

        <!--Global controls-->
        <div 
          style="
            position: absolute;
            top: 70px;
            left: 320px;
            height: 350px;
            width: 400px;
            background-color: rgba(0,255,0,.1);
          "
          id="global-controls"
        >
        </div>

        <!--Sine controls-->
        <div 
          style="
            position: absolute;
            top: 70px;
            left: 730px;
            height: 350px;
            width: 400px;
            background-color: rgba(255,0,128,.15);
          "
          id="sine-controls"
        >
        </div>

        <!--AM controls-->
        <div 
          style="
            position: absolute;
            top: 430px;
            left: 320px;
            height: 350px;
            width: 400px;
            background-color: rgba(128,0,255,.15);
          "
          id="am-controls"
        >
        </div>

        <!--FM controls-->
        <div 
          style="
            position: absolute;
            top: 430px;
            left: 730px;
            height: 350px;
            width: 400px;
            background-color: rgba(219,128,7,.3);
          "
          id="fm-controls"
        >
        </div>
        
      `, this.$container);
    });
  }

}

var _default = ControllerExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlIiwiQWJzdHJhY3RFeHBlcmllbmNlIiwiY29uc3RydWN0b3IiLCJjbGllbnQiLCJjb25maWciLCIkY29udGFpbmVyIiwiYXVkaW9Db250ZXh0IiwicmFmSWQiLCJzdGFydCIsInNjb3JlIiwic3RhdGVNYW5hZ2VyIiwiYXR0YWNoIiwibWFzdGVyQ29udHJvbHMiLCJvYnNlcnZlIiwic2NoZW1hTmFtZSIsInN0YXRlSWQiLCJub2RlSWQiLCJncm91cENvbnRyb2xzIiwic3ludGhUeXBlIiwiZ2V0Iiwic3Vic2NyaWJlIiwidXBkYXRlcyIsImhhc093blByb3BlcnR5IiwiJGxvZ2dlciIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZEVsZW1lbnRDb3VudCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiJGNob3JkUGFyYWdyYXBoIiwiY3JlYXRlRWxlbWVudCIsIiR0ZXh0Q29udGVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJpIiwibm90ZXMiLCJsZW5ndGgiLCIkbm90ZXBhcmFncmFwaCIsInNldEF0dHJpYnV0ZSIsImZyZXF1ZW5jeSIsInZlbG9jaXR5IiwiZHVyYXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwiZW52ZWxvcHBlIiwibWV0YXMiLCJtb2RGcmVxIiwibW9kRGVwdGgiLCJoYXJtb25pY2l0eSIsIm1vZEluZGV4IiwicHJlcGVuZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJzZXRUaW1lb3V0Iiwic3ludGhzIiwiJGNvbnRyb2xzIiwicmVuZGVyR3JvdXBDb250cm9scyIsImNsZWFyTG9nIiwibkxvZ2dlZCIsImNvbnRhaW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImUiLCJzZXQiLCJtdXRlIiwiZGV0YWlsIiwidmFsdWUiLCJ2b2x1bWUiLCJsb3dQYXNzRnJl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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWhJTSxFQWdJRyxLQUFLdEQsVUFoSVI7QUFpSUQsS0FsSVksQ0FBYjtBQW1JRDs7QUFqVm1EOztlQW9WdkNMLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RFeHBlcmllbmNlIH0gZnJvbSAnQHNvdW5kd29ya3MvY29yZS9jbGllbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnbGl0LWh0bWwnO1xuaW1wb3J0IHJlbmRlckluaXRpYWxpemF0aW9uU2NyZWVucyBmcm9tICdAc291bmR3b3Jrcy90ZW1wbGF0ZS1oZWxwZXJzL2NsaWVudC9yZW5kZXItaW5pdGlhbGl6YXRpb24tc2NyZWVucy5qcyc7XG5pbXBvcnQgJ0BpcmNhbS9zaW1wbGUtY29tcG9uZW50cy9zYy1iYW5nLmpzJztcbmltcG9ydCAnQGlyY2FtL3NpbXBsZS1jb21wb25lbnRzL3NjLXNsaWRlci5qcyc7XG5pbXBvcnQgJ0BpcmNhbS9zaW1wbGUtY29tcG9uZW50cy9zYy10b2dnbGUuanMnO1xuaW1wb3J0ICdAaXJjYW0vc2ltcGxlLWNvbXBvbmVudHMvc2MtZWRpdG9yLmpzJztcbmltcG9ydCAnQGlyY2FtL3NpbXBsZS1jb21wb25lbnRzL3NjLWJ1dHRvbi5qcyc7XG5cbi8qXG5UT0RPOiBcbi0gZGVmYXVsdCB2YWx1ZSBvZiB0b2dnbGUgbXV0ZSBhY2NvcmRpbmcgdG8gc3RhdGVcbi0gbG9nYXJpdGhtaWMgY29udHJvbCBmb3Igdm9sdW1lID9cbiovXG5cbmNsYXNzIENvbnRyb2xsZXJFeHBlcmllbmNlIGV4dGVuZHMgQWJzdHJhY3RFeHBlcmllbmNlIHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBjb25maWcsICRjb250YWluZXIsIGF1ZGlvQ29udGV4dCkge1xuICAgIHN1cGVyKGNsaWVudCk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLiRjb250YWluZXIgPSAkY29udGFpbmVyO1xuICAgIHRoaXMucmFmSWQgPSBudWxsO1xuXG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG5cblxuICAgIC8vIHJlcXVpcmUgcGx1Z2lucyBpZiBuZWVkZWRcblxuICAgIHJlbmRlckluaXRpYWxpemF0aW9uU2NyZWVucyhjbGllbnQsIGNvbmZpZywgJGNvbnRhaW5lcik7XG4gIH1cblxuICBhc3luYyBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgdGhpcy5zY29yZSA9IGF3YWl0IHRoaXMuY2xpZW50LnN0YXRlTWFuYWdlci5hdHRhY2goJ3Njb3JlJyk7XG5cbiAgICB0aGlzLm1hc3RlckNvbnRyb2xzID0ge307XG4gICAgdGhpcy5jbGllbnQuc3RhdGVNYW5hZ2VyLm9ic2VydmUoYXN5bmMgKHNjaGVtYU5hbWUsIHN0YXRlSWQsIG5vZGVJZCkgPT4ge1xuICAgICAgaWYgKHNjaGVtYU5hbWUgPT0gXCJtYXN0ZXJDb250cm9sc1wiKXtcbiAgICAgICAgY29uc3QgZ3JvdXBDb250cm9scyA9IGF3YWl0IHRoaXMuY2xpZW50LnN0YXRlTWFuYWdlci5hdHRhY2goc2NoZW1hTmFtZSwgc3RhdGVJZCk7XG4gICAgICAgIGNvbnN0IHN5bnRoVHlwZSA9IGdyb3VwQ29udHJvbHMuZ2V0KCdzeW50aCcpO1xuICAgICAgICB0aGlzLm1hc3RlckNvbnRyb2xzW3N5bnRoVHlwZV0gPSBncm91cENvbnRyb2xzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuc2NvcmUuc3Vic2NyaWJlKHVwZGF0ZXMgPT4ge1xuICAgICAgaWYgKHVwZGF0ZXMuaGFzT3duUHJvcGVydHkoJ25vdGVzJykpIHtcbiAgICAgICAgLy9QcmludCBpbiBsb2dnZXJcbiAgICAgICAgY29uc3QgJGxvZ2dlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI25vdGUtbG9nZ2VyJyk7XG4gICAgICAgIGlmICgkbG9nZ2VyLmNoaWxkRWxlbWVudENvdW50ID4gMTAwKSB7XG4gICAgICAgICAgJGxvZ2dlci5yZW1vdmVDaGlsZCgkbG9nZ2VyLmxhc3RDaGlsZCk7IC8vUmVtb3ZlIG9sZGVzdCBlbGVtZW50IGlmIHRvbyBtdWNoIGxvZ2dlZFxuICAgICAgICB9IFxuICAgICAgICBjb25zdCAkY2hvcmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgTkVXIENIT1JEOlxcclxcbmApO1xuICAgICAgICAkY2hvcmRQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJHRleHRDb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlcy5ub3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0ICRub3RlcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICRub3RlcGFyYWdyYXBoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKTtcbiAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgTm90ZSAke2l9XFxyXFxuYCk7XG4gICAgICAgICAgJG5vdGVwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJHRleHRDb250ZW50KTtcbiAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgZnJlcXVlbmN5IDogJHt1cGRhdGVzLm5vdGVzW2ldLmZyZXF1ZW5jeX1cXHJcXG5gKTtcbiAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGB2ZWxvY2l0eSAoZEIpIDogJHt1cGRhdGVzLm5vdGVzW2ldLnZlbG9jaXR5fVxcclxcbmApO1xuICAgICAgICAgICRub3RlcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYGR1cmF0aW9uIChzKSA6ICR7dXBkYXRlcy5ub3Rlc1tpXS5kdXJhdGlvbn1cXHJcXG5gKTtcbiAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBlbnZlbG9wcGUgOiAke0pTT04uc3RyaW5naWZ5KHVwZGF0ZXMubm90ZXNbaV0uZW52ZWxvcHBlKX1cXHJcXG5gKTtcbiAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBzeW50aCB0eXBlIDogJHt1cGRhdGVzLm5vdGVzW2ldLm1ldGFzLnN5bnRoVHlwZX1cXHJcXG5gKTtcbiAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgIHN3aXRjaCAodXBkYXRlcy5ub3Rlc1tpXS5tZXRhcy5zeW50aFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbmUnOlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FtJzpcbiAgICAgICAgICAgICAgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYG1vZCBmcmVxIDogJHt1cGRhdGVzLm5vdGVzW2ldLm1ldGFzLm1vZEZyZXF9XFxyXFxuYCk7XG4gICAgICAgICAgICAgICRub3RlcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBtb2QgZGVwdGggOiAke3VwZGF0ZXMubm90ZXNbaV0ubWV0YXMubW9kRGVwdGh9XFxyXFxuYCk7XG4gICAgICAgICAgICAgICRub3RlcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm0nOlxuICAgICAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgaGFybW9uaWNpdHkgOiAke3VwZGF0ZXMubm90ZXNbaV0ubWV0YXMuaGFybW9uaWNpdHl9XFxyXFxuYCk7XG4gICAgICAgICAgICAgICRub3RlcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBtb2QgaW5kZXggOiAke3VwZGF0ZXMubm90ZXNbaV0ubWV0YXMubW9kSW5kZXh9XFxyXFxuYCk7XG4gICAgICAgICAgICAgICRub3RlcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkY2hvcmRQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJG5vdGVwYXJhZ3JhcGgpO1xuICAgICAgICB9ICBcbiAgICAgICAgJGxvZ2dlci5wcmVwZW5kKCRjaG9yZFBhcmFncmFwaCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMucmVuZGVyKCkpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgY29uc3Qgc3ludGhzID0gWydnbG9iYWwnLCAnc2luZScsICdhbScsICdmbSddO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW50aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgJGNvbnRyb2xzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAjJHtzeW50aHNbaV19LWNvbnRyb2xzYCk7XG4gICAgICAgIHRoaXMucmVuZGVyR3JvdXBDb250cm9scyhzeW50aHNbaV0sICRjb250cm9scyk7IFxuICAgICAgfVxuICAgIH0sIDUwKTsgLy8gbm8gd29ya2Fyb3VuZCA/P1xuICAgIFxuICAgIC8vIHRoaXMucmVuZGVyR3JvdXBDb250cm9scyhkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNncDEtY29udHJvbHMnKSk7XG4gIH1cblxuICBjbGVhckxvZygpIHtcbiAgICBjb25zdCAkbG9nZ2VyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjbm90ZS1sb2dnZXInKTtcbiAgICBjb25zdCBuTG9nZ2VkID0gJGxvZ2dlci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5Mb2dnZWQ7IGkrKykge1xuICAgICAgJGxvZ2dlci5yZW1vdmVDaGlsZCgkbG9nZ2VyLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyR3JvdXBDb250cm9scyhzeW50aFR5cGUsIGNvbnRhaW5lcikge1xuICAgIHRoaXMucmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHJlbmRlcihodG1sYFxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA+JHtzeW50aFR5cGV9IGNvbnRyb2xzIDwvcD5cbiAgICAgICAgPHBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICB0b3A6IDIyJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgIFwiXG4gICAgICAgID5NdXRlOiA8L3A+XG4gICAgICAgIDxzYy10b2dnbGVcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMjYlO1xuICAgICAgICAgICAgdG9wOiAyMiU7XG4gICAgICAgICAgXCJcbiAgICAgICAgICB3aWR0aD1cIjUwXCI7XG4gICAgICAgICAgaGVpZ2h0PVwiNTBcIjtcbiAgICAgICAgICBAY2hhbmdlPVwiJHtlID0+IHRoaXMubWFzdGVyQ29udHJvbHNbc3ludGhUeXBlXS5zZXQoeyBtdXRlOiBlLmRldGFpbC52YWx1ZSB9KX1cIlxuICAgICAgICA+PC9zYy10b2dnbGU+XG5cbiAgICAgICAgPHBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgIFwiXG4gICAgICAgID5Wb2x1bWU6IDwvcD5cbiAgICAgICAgPHNjLXNsaWRlclxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgICB0b3A6IDQyJTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICB3aWR0aD1cIjI5MFwiXG4gICAgICAgICAgbWluPVwiLTYwXCJcbiAgICAgICAgICBtYXg9XCIwXCJcbiAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLmdldCgndm9sdW1lJyl9XCJcbiAgICAgICAgICBAaW5wdXQ9XCIke2UgPT4gdGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLnNldCh7IHZvbHVtZTogZS5kZXRhaWwudmFsdWUgfSl9XCJcbiAgICAgICAgICBkaXNwbGF5LW51bWJlclxuICAgICAgICA+PC9zYy1zbGlkZXI+XG5cbiAgICAgICAgPHBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICB0b3A6IDU4JTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgIFwiXG4gICAgICAgID5Mb3ctcGFzcyA8L2JyPmZyZXE6IDwvcD5cbiAgICAgICAgPHNjLXNsaWRlclxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgICB0b3A6IDYyJTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICB3aWR0aD1cIjI5MFwiXG4gICAgICAgICAgbWluPVwiMjBcIlxuICAgICAgICAgIG1heD1cIjIwMDAwXCJcbiAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLmdldCgnbG93UGFzc0ZyZXEnKX1cIlxuICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLm1hc3RlckNvbnRyb2xzW3N5bnRoVHlwZV0uc2V0KHsgbG93UGFzc0ZyZXE6IGUuZGV0YWlsLnZhbHVlIH0pfVwiXG4gICAgICAgICAgZGlzcGxheS1udW1iZXJcbiAgICAgICAgPjwvc2Mtc2xpZGVyPlxuXG4gICAgICAgIDxwXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgdG9wOiA3OCU7XG4gICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICBcIlxuICAgICAgICA+SGlnaC1wYXNzIDwvYnI+ZnJlcTogPC9wPlxuICAgICAgICA8c2Mtc2xpZGVyXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICAgIHRvcDogODIlO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgIHdpZHRoPVwiMjkwXCJcbiAgICAgICAgICBtaW49XCIyMFwiXG4gICAgICAgICAgbWF4PVwiMjAwMDBcIlxuICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLm1hc3RlckNvbnRyb2xzW3N5bnRoVHlwZV0uZ2V0KCdoaWdoUGFzc0ZyZXEnKX1cIlxuICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLm1hc3RlckNvbnRyb2xzW3N5bnRoVHlwZV0uc2V0KHsgaGlnaFBhc3NGcmVxOiBlLmRldGFpbC52YWx1ZSB9KX1cIlxuICAgICAgICAgIGRpc3BsYXktbnVtYmVyXG4gICAgICAgID48L3NjLXNsaWRlcj5cbiAgICAgIGAsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGRlYm91bmNlIHdpdGggcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmSWQpO1xuXG4gICAgdGhpcy5yYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgcmVuZGVyKGh0bWxgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4XCI+XG4gICAgICAgICAgPGgxIHN0eWxlPVwibWFyZ2luOiAyMHB4IDBcIj4ke3RoaXMuY2xpZW50LnR5cGV9IFtpZDogJHt0aGlzLmNsaWVudC5pZH1dPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLU5vdGUgbG9nZ2VyLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+T1NDIGxvZzogPC9wPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGlkPVwibm90ZS1sb2dnZXJcIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8c2MtYnV0dG9uXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMzcwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDI1MHB4O1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIEBwcmVzcz1cIiR7ZSA9PiB0aGlzLmNsZWFyTG9nKCl9XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxuICAgICAgICAgICAgdGV4dD1cImNsZWFyXCJcbiAgICAgICAgICA+PC9zYy1idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLUNvZGUgZm9yIGRpc3BhdGNoLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDgwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPk5vdGUgZGlzcGF0Y2ggY29kZTogPC9wPlxuICAgICAgICAgIDxzYy1lZGl0b3JcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxNCU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgaGVpZ2h0PTI1MFxuICAgICAgICAgICAgd2lkdGg9MzAwXG4gICAgICAgICAgPjwvc2MtZWRpdG9yPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tR2xvYmFsIGNvbnRyb2xzLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwuMSk7XG4gICAgICAgICAgXCJcbiAgICAgICAgICBpZD1cImdsb2JhbC1jb250cm9sc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLVNpbmUgY29udHJvbHMtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICAgICAgbGVmdDogNzMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwxMjgsLjE1KTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGlkPVwic2luZS1jb250cm9sc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLUFNIGNvbnRyb2xzLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiAzMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwwLDI1NSwuMTUpO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCJhbS1jb250cm9sc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLUZNIGNvbnRyb2xzLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA3MzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwxMjgsNywuMyk7XG4gICAgICAgICAgXCJcbiAgICAgICAgICBpZD1cImZtLWNvbnRyb2xzXCJcbiAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICBgLCB0aGlzLiRjb250YWluZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXJFeHBlcmllbmNlO1xuIl19