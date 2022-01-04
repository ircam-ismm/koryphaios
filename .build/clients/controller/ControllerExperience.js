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

var _note = _interopRequireDefault(require("../../utils/note"));

var _masterControls = _interopRequireDefault(require("../../server/schemas/masterControls"));

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
    this.groupsMasterControls = new Array();
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName == "masterControls") {
        const groupControls = await this.client.stateManager.attach(schemaName, stateId);
        const groupNb = groupControls.get('group');
        this.groupsMasterControls[groupNb] = groupControls;
      }
    });
    this.score.subscribe(updates => {
      if (updates.hasOwnProperty('note')) {
        //Print in logger
        const $logger = document.body.querySelector('#note-logger');

        if ($logger.childElementCount > 200) {
          $logger.removeChild($logger.lastChild); //Remove oldest element if too much logged
        }

        const $paragraph = document.createElement('p');
        $paragraph.setAttribute('style', 'white-space: pre;');
        let $textContent = document.createTextNode(`NEW NOTE:\r\n`);
        $paragraph.appendChild($textContent);
        $textContent = document.createTextNode(`frequency : ${updates.note.frequency}\r\n`);
        $paragraph.appendChild($textContent);
        $textContent = document.createTextNode(`velocity (dB) : ${updates.note.velocity}\r\n`);
        $paragraph.appendChild($textContent);
        $textContent = document.createTextNode(`duration (s) : ${updates.note.duration}\r\n`);
        $paragraph.appendChild($textContent);
        $textContent = document.createTextNode(`enveloppe : ${updates.note.enveloppe}\r\n`);
        $paragraph.appendChild($textContent);
        $textContent = document.createTextNode(`synth type : ${updates.note.metas.synthType}\r\n`);
        $paragraph.appendChild($textContent);

        switch (updates.note.metas.synthType) {
          case 'sine':
            break;

          case 'am':
            $textContent = document.createTextNode(`mod freq : ${updates.note.metas.modFreq}\r\n`);
            $paragraph.appendChild($textContent);
            $textContent = document.createTextNode(`mod depth : ${updates.note.metas.modDepth}\r\n`);
            $paragraph.appendChild($textContent);
            break;

          case 'fm':
            $textContent = document.createTextNode(`harmonicity : ${updates.note.metas.harmonicity}\r\n`);
            $paragraph.appendChild($textContent);
            $textContent = document.createTextNode(`mod index : ${updates.note.metas.modIndex}\r\n`);
            $paragraph.appendChild($textContent);
            break;
        }

        $logger.prepend($paragraph);
      }
    });
    window.addEventListener('resize', () => this.render());
    setTimeout(() => {
      this.render();
    }, 100);
    setTimeout(() => {
      for (let i = 1; i <= 6; i++) {
        const $gpControls = document.body.querySelector('#gp' + `${i}` + '-controls');
        this.renderGroupControls(i, $gpControls);
      }
    }, 200); // no workaround ??
    // this.renderGroupControls(document.body.querySelector('#gp1-controls'));
  }

  renderGroupControls(group, container) {
    this.rafId = window.requestAnimationFrame(() => {
      (0, _litHtml.render)((0, _litHtml.html)`
        <p
            style="
              position: absolute;
              left: 2%;
              top: 0%;
              font-size: medium;
            "
          >Group ${group} controls </p>
          <p
            style="
              position: absolute;
              left: 2%;
              top: 25%;
            "
          >Mute: </p>
          <sc-toggle
            style="
              position: absolute;
              left: 15%;
              top: 27%;
            "
            @input="${e => this.groupsMasterControls[group].set({
        mute: e.detail.value
      })}"
          ></sc-toggle>

          <p
            style="
              position: absolute;
              left: 2%;
              top: 50%;
            "
          >Volume: </p>
          <sc-slider
            style="
              position: absolute;
              left: 15%;
              top: 53%;
            "
            height="20"
            width="150"
            min="-60"
            max="0"
            value="${this.groupsMasterControls[group].get('volume')}"
            @input="${e => this.groupsMasterControls[group].set({
        volume: e.detail.value
      })}"
          ></sc-slider>

          <p
            style="
              position: absolute;
              left: 67%;
              top: 75%;
              text-align: center;
            "
          >Low-pass </br>freq </p>
          <sc-slider
            style="
              position: absolute;
              left: 70%;
              top: 10%;
            "
            height="100"
            width="20"
            min="20"
            max="20000"
            value="${this.groupsMasterControls[group].get('lowPassFreq')}"
            orientation="vertical"
            @input="${e => this.groupsMasterControls[group].set({
        lowPassFreq: e.detail.value
      })}"
          ></sc-slider>

          <p
            style="
              position: absolute;
              left: 82%;
              top: 75%;
              text-align: center;
            "
          >High-pass </br> freq </p>
          <sc-slider
            style="
              position: absolute;
              left: 86%;
              top: 10%;
            "
            height="100"
            width="20"
            min="20"
            max="20000"
            value="${this.groupsMasterControls[group].get('highPassFreq')}"
            orientation="vertical"
            @input="${e => this.groupsMasterControls[group].set({
        highPassFreq: e.detail.value
      })}"
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

        <!--Master controls-->
        <div 
          style="
            position: absolute;
            top: 70px;
            left: 320px;
            height: 200px;
            width: 400px;
            background-color: rgba(0,255,0,.1);
          "
          id="master-controls"
        >
          <p
              style="
                position: absolute;
                left: 2%;
                top: 0%;
                font-size: medium;
              "
          >Globals controls </p>
          <p
            style="
              position: absolute;
              left: 2%;
              top: 20%;
            "
          >Mute: </p>
          <sc-toggle
            style="
              position: absolute;
              left: 26%;
              top: 20%;
            "
            @input="${e => this.groupsMasterControls[0].set({
        mute: e.detail.value
      })}"
          ></sc-toggle>

          <p
            style="
              position: absolute;
              left: 2%;
              top: 40%;
            "
          >Volume: </p>
          <sc-slider
            style="
              position: absolute;
              left: 26%;
              top: 43%;
            "
            height="20"
            width="200"
            min="-60"
            max="0"
            value="${this.groupsMasterControls[0].get('volume')}"
            @input="${e => this.groupsMasterControls[0].set({
        volume: e.detail.value
      })}"
            display-number
          ></sc-slider>

          <p
            style="
              position: absolute;
              left: 2%;
              top: 60%;
            "
          >Low-pass freq: </p>
          <sc-slider
            style="
              position: absolute;
              left: 26%;
              top: 63%;
            "
            height="20"
            width="200"
            min="20"
            max="20000"
            value="${this.groupsMasterControls[0].get('lowPassFreq')}"
            @input="${e => this.groupsMasterControls[0].set({
        lowPassFreq: e.detail.value
      })}"
            display-number
          ></sc-slider>

          <p
            style="
              position: absolute;
              left: 2%;
              top: 80%;
            "
          >High-pass freq: </p>
          <sc-slider
            style="
              position: absolute;
              left: 26%;
              top: 83%;
            "
            height="20"
            width="200"
            min="20"
            max="20000"
            value="${this.groupsMasterControls[0].get('highPassFreq')}"
            @input="${e => this.groupsMasterControls[0].set({
        highPassFreq: e.detail.value
      })}"
            display-number
          ></sc-slider>
        </div>

        <!--Group 1 controls-->
        <div 
          style="
            position: absolute;
            top: 310px;
            left: 320px;
            height: 150px;
            width: 400px;
            background-color: rgba(255,0,128,.15);
          "
          id="gp1-controls"
        >
        </div>

        <!--Group 2 controls-->
        <div 
          style="
            position: absolute;
            top: 470px;
            left: 320px;
            height: 150px;
            width: 400px;
            background-color: rgba(255,0,128,.15);
          "
          id="gp2-controls"
        ></div>

        <!--Group 3 controls-->
        <div 
          style="
            position: absolute;
            top: 630px;
            left: 320px;
            height: 150px;
            width: 400px;
            background-color: rgba(255,0,128,.15);
          "
          id="gp3-controls"
        ></div>

        <!--Group 4 controls-->
        <div 
          style="
            position: absolute;
            top: 310px;
            left: 730px;
            height: 150px;
            width: 400px;
            background-color: rgba(255,0,128,.15);
          "
          id="gp4-controls"
        ></div>

        <!--Group 5 controls-->
        <div 
          style="
            position: absolute;
            top: 470px;
            left: 730px;
            height: 150px;
            width: 400px;
            background-color: rgba(255,0,128,.15);
          "
          id="gp5-controls"
        ></div>

        <!--Group 6 controls-->
        <div 
          style="
            position: absolute;
            top: 630px;
            left: 730px;
            height: 150px;
            width: 400px;
            background-color: rgba(255,0,128,.15);
          "
          id="gp6-controls"
        ></div>
        
      `, this.$container);
    });
  }

}

var _default = ControllerExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlIiwiQWJzdHJhY3RFeHBlcmllbmNlIiwiY29uc3RydWN0b3IiLCJjbGllbnQiLCJjb25maWciLCIkY29udGFpbmVyIiwiYXVkaW9Db250ZXh0IiwicmFmSWQiLCJzdGFydCIsInNjb3JlIiwic3RhdGVNYW5hZ2VyIiwiYXR0YWNoIiwiZ3JvdXBzTWFzdGVyQ29udHJvbHMiLCJBcnJheSIsIm9ic2VydmUiLCJzY2hlbWFOYW1lIiwic3RhdGVJZCIsIm5vZGVJZCIsImdyb3VwQ29udHJvbHMiLCJncm91cE5iIiwiZ2V0Iiwic3Vic2NyaWJlIiwidXBkYXRlcyIsImhhc093blByb3BlcnR5IiwiJGxvZ2dlciIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZEVsZW1lbnRDb3VudCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiJHBhcmFncmFwaCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCIkdGV4dENvbnRlbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwibm90ZSIsImZyZXF1ZW5jeSIsInZlbG9jaXR5IiwiZHVyYXRpb24iLCJlbnZlbG9wcGUiLCJtZXRhcyIsInN5bnRoVHlwZSIsIm1vZEZyZXEiLCJtb2REZXB0aCIsImhhcm1vbmljaXR5IiwibW9kSW5kZXgiLCJwcmVwZW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsInNldFRpbWVvdXQiLCJpIiwiJGdwQ29udHJvbHMiLCJyZW5kZXJHcm91cENvbnRyb2xzIiwiZ3JvdXAiLCJjb250YWluZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlIiwic2V0IiwibXV0ZSIsImRldGFpbCIsInZhbHVlIiwidm9sdW1lIiwibG93UGFzc0ZyZXEiLCJoaWdoUGFzc0ZyZXEiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInR5cGUi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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWxQTSxFQWtQRyxLQUFLMUQsVUFsUFI7QUFtUEQsS0FwUFksQ0FBYjtBQXFQRDs7QUEvYW1EOztlQWtidkNMLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RFeHBlcmllbmNlIH0gZnJvbSAnQHNvdW5kd29ya3MvY29yZS9jbGllbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnbGl0LWh0bWwnO1xuaW1wb3J0IHJlbmRlckluaXRpYWxpemF0aW9uU2NyZWVucyBmcm9tICdAc291bmR3b3Jrcy90ZW1wbGF0ZS1oZWxwZXJzL2NsaWVudC9yZW5kZXItaW5pdGlhbGl6YXRpb24tc2NyZWVucy5qcyc7XG5pbXBvcnQgJ0BpcmNhbS9zaW1wbGUtY29tcG9uZW50cy9zYy1iYW5nLmpzJztcbmltcG9ydCAnQGlyY2FtL3NpbXBsZS1jb21wb25lbnRzL3NjLXNsaWRlci5qcyc7XG5pbXBvcnQgJ0BpcmNhbS9zaW1wbGUtY29tcG9uZW50cy9zYy10b2dnbGUuanMnO1xuaW1wb3J0ICdAaXJjYW0vc2ltcGxlLWNvbXBvbmVudHMvc2MtZWRpdG9yLmpzJztcbmltcG9ydCBOb3RlIGZyb20gJy4uLy4uL3V0aWxzL25vdGUnO1xuaW1wb3J0IG1hc3RlckNvbnRyb2xzIGZyb20gJy4uLy4uL3NlcnZlci9zY2hlbWFzL21hc3RlckNvbnRyb2xzJztcblxuXG4vKlxuVE9ETzogXG4tIGRlZmF1bHQgdmFsdWUgb2YgdG9nZ2xlIG11dGUgYWNjb3JkaW5nIHRvIHN0YXRlXG4tIGxvZ2FyaXRobWljIGNvbnRyb2wgZm9yIHZvbHVtZSA/XG4qL1xuXG5jbGFzcyBDb250cm9sbGVyRXhwZXJpZW5jZSBleHRlbmRzIEFic3RyYWN0RXhwZXJpZW5jZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgY29uZmlnLCAkY29udGFpbmVyLCBhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihjbGllbnQpO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcbiAgICB0aGlzLnJhZklkID0gbnVsbDtcblxuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuXG5cbiAgICAvLyByZXF1aXJlIHBsdWdpbnMgaWYgbmVlZGVkXG5cbiAgICByZW5kZXJJbml0aWFsaXphdGlvblNjcmVlbnMoY2xpZW50LCBjb25maWcsICRjb250YWluZXIpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcblxuICAgIHRoaXMuc2NvcmUgPSBhd2FpdCB0aGlzLmNsaWVudC5zdGF0ZU1hbmFnZXIuYXR0YWNoKCdzY29yZScpO1xuXG4gICAgdGhpcy5ncm91cHNNYXN0ZXJDb250cm9scyA9IG5ldyBBcnJheSgpO1xuICAgIHRoaXMuY2xpZW50LnN0YXRlTWFuYWdlci5vYnNlcnZlKGFzeW5jIChzY2hlbWFOYW1lLCBzdGF0ZUlkLCBub2RlSWQpID0+IHtcbiAgICAgIGlmIChzY2hlbWFOYW1lID09IFwibWFzdGVyQ29udHJvbHNcIil7XG4gICAgICAgIGNvbnN0IGdyb3VwQ29udHJvbHMgPSBhd2FpdCB0aGlzLmNsaWVudC5zdGF0ZU1hbmFnZXIuYXR0YWNoKHNjaGVtYU5hbWUsIHN0YXRlSWQpO1xuICAgICAgICBjb25zdCBncm91cE5iID0gZ3JvdXBDb250cm9scy5nZXQoJ2dyb3VwJyk7XG4gICAgICAgIHRoaXMuZ3JvdXBzTWFzdGVyQ29udHJvbHNbZ3JvdXBOYl0gPSBncm91cENvbnRyb2xzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuc2NvcmUuc3Vic2NyaWJlKHVwZGF0ZXMgPT4ge1xuICAgICAgaWYgKHVwZGF0ZXMuaGFzT3duUHJvcGVydHkoJ25vdGUnKSkge1xuXG4gICAgICAgIC8vUHJpbnQgaW4gbG9nZ2VyXG4gICAgICAgIGNvbnN0ICRsb2dnZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWxvZ2dlcicpO1xuICAgICAgICBpZiAoJGxvZ2dlci5jaGlsZEVsZW1lbnRDb3VudCA+IDIwMCkge1xuICAgICAgICAgICRsb2dnZXIucmVtb3ZlQ2hpbGQoJGxvZ2dlci5sYXN0Q2hpbGQpOyAvL1JlbW92ZSBvbGRlc3QgZWxlbWVudCBpZiB0b28gbXVjaCBsb2dnZWRcbiAgICAgICAgfSBcbiAgICAgICAgY29uc3QgJHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgJHBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gICAgICAgIGxldCAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgTkVXIE5PVEU6XFxyXFxuYCk7XG4gICAgICAgICRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJHRleHRDb250ZW50KTtcbiAgICAgICAgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYGZyZXF1ZW5jeSA6ICR7dXBkYXRlcy5ub3RlLmZyZXF1ZW5jeX1cXHJcXG5gKTtcbiAgICAgICAgJHBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgdmVsb2NpdHkgKGRCKSA6ICR7dXBkYXRlcy5ub3RlLnZlbG9jaXR5fVxcclxcbmApO1xuICAgICAgICAkcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBkdXJhdGlvbiAocykgOiAke3VwZGF0ZXMubm90ZS5kdXJhdGlvbn1cXHJcXG5gKTtcbiAgICAgICAgJHBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgZW52ZWxvcHBlIDogJHt1cGRhdGVzLm5vdGUuZW52ZWxvcHBlfVxcclxcbmApO1xuICAgICAgICAkcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBzeW50aCB0eXBlIDogJHt1cGRhdGVzLm5vdGUubWV0YXMuc3ludGhUeXBlfVxcclxcbmApO1xuICAgICAgICAkcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgIHN3aXRjaCAodXBkYXRlcy5ub3RlLm1ldGFzLnN5bnRoVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3NpbmUnOiBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FtJzpcbiAgICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBtb2QgZnJlcSA6ICR7dXBkYXRlcy5ub3RlLm1ldGFzLm1vZEZyZXF9XFxyXFxuYCk7XG4gICAgICAgICAgICAkcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgbW9kIGRlcHRoIDogJHt1cGRhdGVzLm5vdGUubWV0YXMubW9kRGVwdGh9XFxyXFxuYCk7XG4gICAgICAgICAgICAkcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmbSc6IFxuICAgICAgICAgICAgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYGhhcm1vbmljaXR5IDogJHt1cGRhdGVzLm5vdGUubWV0YXMuaGFybW9uaWNpdHl9XFxyXFxuYCk7XG4gICAgICAgICAgICAkcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgbW9kIGluZGV4IDogJHt1cGRhdGVzLm5vdGUubWV0YXMubW9kSW5kZXh9XFxyXFxuYCk7XG4gICAgICAgICAgICAkcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAkbG9nZ2VyLnByZXBlbmQoJHBhcmFncmFwaCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMucmVuZGVyKCkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMucmVuZGVyKCl9LCAxMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDYgOyBpKyspIHtcbiAgICAgICAgY29uc3QgJGdwQ29udHJvbHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNncCcrYCR7aX1gKyctY29udHJvbHMnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJHcm91cENvbnRyb2xzKGksICRncENvbnRyb2xzKTsgXG4gICAgICB9XG4gICAgfSwgMjAwKTsgLy8gbm8gd29ya2Fyb3VuZCA/P1xuICAgIFxuICAgIC8vIHRoaXMucmVuZGVyR3JvdXBDb250cm9scyhkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNncDEtY29udHJvbHMnKSk7XG4gIH1cblxuICByZW5kZXJHcm91cENvbnRyb2xzKGdyb3VwLCBjb250YWluZXIpIHtcbiAgICB0aGlzLnJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICByZW5kZXIoaHRtbGBcbiAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+R3JvdXAgJHtncm91cH0gY29udHJvbHMgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPk11dGU6IDwvcD5cbiAgICAgICAgICA8c2MtdG9nZ2xlXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgICAgICAgdG9wOiAyNyU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgQGlucHV0PVwiJHtlID0+IHRoaXMuZ3JvdXBzTWFzdGVyQ29udHJvbHNbZ3JvdXBdLnNldCh7bXV0ZTogZS5kZXRhaWwudmFsdWV9KX1cIlxuICAgICAgICAgID48L3NjLXRvZ2dsZT5cblxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlZvbHVtZTogPC9wPlxuICAgICAgICAgIDxzYy1zbGlkZXJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICAgICAgICB0b3A6IDUzJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE1MFwiXG4gICAgICAgICAgICBtaW49XCItNjBcIlxuICAgICAgICAgICAgbWF4PVwiMFwiXG4gICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5ncm91cHNNYXN0ZXJDb250cm9sc1tncm91cF0uZ2V0KCd2b2x1bWUnKX1cIlxuICAgICAgICAgICAgQGlucHV0PVwiJHtlID0+IHRoaXMuZ3JvdXBzTWFzdGVyQ29udHJvbHNbZ3JvdXBdLnNldCh7IHZvbHVtZTogZS5kZXRhaWwudmFsdWUgfSl9XCJcbiAgICAgICAgICA+PC9zYy1zbGlkZXI+XG5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA2NyU7XG4gICAgICAgICAgICAgIHRvcDogNzUlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5Mb3ctcGFzcyA8L2JyPmZyZXEgPC9wPlxuICAgICAgICAgIDxzYy1zbGlkZXJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogNzAlO1xuICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICBtaW49XCIyMFwiXG4gICAgICAgICAgICBtYXg9XCIyMDAwMFwiXG4gICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5ncm91cHNNYXN0ZXJDb250cm9sc1tncm91cF0uZ2V0KCdsb3dQYXNzRnJlcScpfVwiXG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLmdyb3Vwc01hc3RlckNvbnRyb2xzW2dyb3VwXS5zZXQoeyBsb3dQYXNzRnJlcTogZS5kZXRhaWwudmFsdWUgfSl9XCJcbiAgICAgICAgICA+PC9zYy1zbGlkZXI+XG5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA4MiU7XG4gICAgICAgICAgICAgIHRvcDogNzUlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5IaWdoLXBhc3MgPC9icj4gZnJlcSA8L3A+XG4gICAgICAgICAgPHNjLXNsaWRlclxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA4NiU7XG4gICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgIG1pbj1cIjIwXCJcbiAgICAgICAgICAgIG1heD1cIjIwMDAwXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLmdyb3Vwc01hc3RlckNvbnRyb2xzW2dyb3VwXS5nZXQoJ2hpZ2hQYXNzRnJlcScpfVwiXG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLmdyb3Vwc01hc3RlckNvbnRyb2xzW2dyb3VwXS5zZXQoeyBoaWdoUGFzc0ZyZXE6IGUuZGV0YWlsLnZhbHVlIH0pfVwiXG4gICAgICAgICAgPjwvc2Mtc2xpZGVyPlxuICAgICAgYCwgY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgLy8gZGVib3VuY2Ugd2l0aCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG5cbiAgICB0aGlzLnJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICByZW5kZXIoaHRtbGBcbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHhcIj5cbiAgICAgICAgICA8aDEgc3R5bGU9XCJtYXJnaW46IDIwcHggMFwiPiR7dGhpcy5jbGllbnQudHlwZX0gW2lkOiAke3RoaXMuY2xpZW50LmlkfV08L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tTm90ZSBsb2dnZXItLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5PU0MgbG9nOiA8L3A+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCk7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgaWQ9XCJub3RlLWxvZ2dlclwiXG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tQ29kZSBmb3IgZGlzcGF0Y2gtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA0ODBweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjcwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+Tm90ZSBkaXNwYXRjaCBjb2RlOiA8L3A+XG4gICAgICAgICAgPHNjLWVkaXRvclxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDE0JTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBoZWlnaHQ9MjUwXG4gICAgICAgICAgICB3aWR0aD0zMDBcbiAgICAgICAgICA+PC9zYy1lZGl0b3I+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS1NYXN0ZXIgY29udHJvbHMtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICAgICAgbGVmdDogMzIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDI1NSwwLC4xKTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGlkPVwibWFzdGVyLWNvbnRyb2xzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgPkdsb2JhbHMgY29udHJvbHMgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPk11dGU6IDwvcD5cbiAgICAgICAgICA8c2MtdG9nZ2xlXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgQGlucHV0PVwiJHtlID0+IHRoaXMuZ3JvdXBzTWFzdGVyQ29udHJvbHNbMF0uc2V0KHsgbXV0ZTogZS5kZXRhaWwudmFsdWUgfSl9XCJcbiAgICAgICAgICA+PC9zYy10b2dnbGU+XG5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgICAgdG9wOiA0MCU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5Wb2x1bWU6IDwvcD5cbiAgICAgICAgICA8c2Mtc2xpZGVyXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICAgICAgdG9wOiA0MyU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgbWluPVwiLTYwXCJcbiAgICAgICAgICAgIG1heD1cIjBcIlxuICAgICAgICAgICAgdmFsdWU9XCIke3RoaXMuZ3JvdXBzTWFzdGVyQ29udHJvbHNbMF0uZ2V0KCd2b2x1bWUnKX1cIlxuICAgICAgICAgICAgQGlucHV0PVwiJHtlID0+IHRoaXMuZ3JvdXBzTWFzdGVyQ29udHJvbHNbMF0uc2V0KHsgdm9sdW1lOiBlLmRldGFpbC52YWx1ZSB9KX1cIlxuICAgICAgICAgICAgZGlzcGxheS1udW1iZXJcbiAgICAgICAgICA+PC9zYy1zbGlkZXI+XG5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5Mb3ctcGFzcyBmcmVxOiA8L3A+XG4gICAgICAgICAgPHNjLXNsaWRlclxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgICAgIHRvcDogNjMlO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgIG1pbj1cIjIwXCJcbiAgICAgICAgICAgIG1heD1cIjIwMDAwXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLmdyb3Vwc01hc3RlckNvbnRyb2xzWzBdLmdldCgnbG93UGFzc0ZyZXEnKX1cIlxuICAgICAgICAgICAgQGlucHV0PVwiJHtlID0+IHRoaXMuZ3JvdXBzTWFzdGVyQ29udHJvbHNbMF0uc2V0KHsgbG93UGFzc0ZyZXE6IGUuZGV0YWlsLnZhbHVlIH0pfVwiXG4gICAgICAgICAgICBkaXNwbGF5LW51bWJlclxuICAgICAgICAgID48L3NjLXNsaWRlcj5cblxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgICB0b3A6IDgwJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPkhpZ2gtcGFzcyBmcmVxOiA8L3A+XG4gICAgICAgICAgPHNjLXNsaWRlclxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgICAgIHRvcDogODMlO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgIG1pbj1cIjIwXCJcbiAgICAgICAgICAgIG1heD1cIjIwMDAwXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLmdyb3Vwc01hc3RlckNvbnRyb2xzWzBdLmdldCgnaGlnaFBhc3NGcmVxJyl9XCJcbiAgICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLmdyb3Vwc01hc3RlckNvbnRyb2xzWzBdLnNldCh7IGhpZ2hQYXNzRnJlcTogZS5kZXRhaWwudmFsdWUgfSl9XCJcbiAgICAgICAgICAgIGRpc3BsYXktbnVtYmVyXG4gICAgICAgICAgPjwvc2Mtc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tR3JvdXAgMSBjb250cm9scy0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDMxMHB4O1xuICAgICAgICAgICAgbGVmdDogMzIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwxMjgsLjE1KTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGlkPVwiZ3AxLWNvbnRyb2xzXCJcbiAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tR3JvdXAgMiBjb250cm9scy0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQ3MHB4O1xuICAgICAgICAgICAgbGVmdDogMzIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwxMjgsLjE1KTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGlkPVwiZ3AyLWNvbnRyb2xzXCJcbiAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgIDwhLS1Hcm91cCAzIGNvbnRyb2xzLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNjMwcHg7XG4gICAgICAgICAgICBsZWZ0OiAzMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwwLDEyOCwuMTUpO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCJncDMtY29udHJvbHNcIlxuICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgPCEtLUdyb3VwIDQgY29udHJvbHMtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAzMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDczMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMTI4LC4xNSk7XG4gICAgICAgICAgXCJcbiAgICAgICAgICBpZD1cImdwNC1jb250cm9sc1wiXG4gICAgICAgID48L2Rpdj5cblxuICAgICAgICA8IS0tR3JvdXAgNSBjb250cm9scy0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQ3MHB4O1xuICAgICAgICAgICAgbGVmdDogNzMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwxMjgsLjE1KTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGlkPVwiZ3A1LWNvbnRyb2xzXCJcbiAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgIDwhLS1Hcm91cCA2IGNvbnRyb2xzLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNjMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA3MzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwwLDEyOCwuMTUpO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCJncDYtY29udHJvbHNcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIFxuICAgICAgYCwgdGhpcy4kY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyRXhwZXJpZW5jZTtcbiJdfQ==