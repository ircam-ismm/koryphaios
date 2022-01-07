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
    this.audioContext = audioContext;
    this.midiSetupActive = false;
    this.selectedControl = null; // require plugins if needed

    (0, _renderInitializationScreens.default)(client, config, $container);
  }

  async start() {
    super.start();
    this.score = await this.client.stateManager.attach('score');
    this.masterControls = {};
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName.includes("BusControls")) {
        const synthType = schemaName.substring(0, schemaName.indexOf("BusControls"));
        const groupControls = await this.client.stateManager.attach(schemaName, stateId);
        this.masterControls[synthType] = groupControls;
        groupControls.subscribe(updates => {
          const synths = ['global', 'sine', 'am', 'fm'];

          for (const synth of synths) {
            const $controls = document.body.querySelector(`#${synth}-controls`);
            this.renderGroupControls(synth, $controls);
          }
        });
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
    window.addEventListener('resize', () => this.render()); //MIDI

    this.midiControlDict = {};

    const getMIDIMessage = midiMessage => {
      const [deviceId, channel, value] = midiMessage.data;

      if (this.midiSetupActive) {
        if (this.selectedControl !== null) {
          this.midiControlDict[channel] = this.selectedControl.id;
        }
      } else {
        const control = this.midiControlDict[channel];

        if (control) {
          const synthType = control.split('-')[0];
          const key = control.split('-')[1];

          switch (key) {
            case 'mute':
              console.log(value);
              const muteVal = this.masterControls[synthType].get('mute');

              if (value === 127) {
                this.masterControls[synthType].set({
                  mute: !muteVal
                });
              }

              break;

            case 'volume':
              this.masterControls[synthType].set({
                volume: -60. + value * 60. / 127.
              });
              break;

            case 'lowPassFreq':
              this.masterControls[synthType].set({
                lowPassFreq: 20 + value * (20000 - 20) / 127.
              });
              break;

            case 'highPassFreq':
              this.masterControls[synthType].set({
                highPassFreq: 20 + value * (20000 - 20) / 127.
              });
              break;
          }
        }
      }
    };

    const midiAccess = await navigator.requestMIDIAccess();
    const midiInputDevices = midiAccess.inputs.values();

    for (let device of midiInputDevices) {
      device.addEventListener('midimessage', getMIDIMessage); // device.onmidimessage = getMIDIMessage;
    } //Rendering


    this.render();
    setTimeout(() => {
      const synths = ['global', 'sine', 'am', 'fm'];

      for (let i = 0; i < synths.length; i++) {
        const $controls = document.body.querySelector(`#${synths[i]}-controls`);
        this.renderGroupControls(synths[i], $controls);
      }
    }, 50); // no workaround ??
    //MIDI setup mode

    setTimeout(() => {
      const synths = ['global', 'sine', 'am', 'fm'];
      const controls = ['mute', 'volume', 'lowPassFreq', 'highPassFreq'];

      for (const synth of synths) {
        for (const control of controls) {
          const $control = document.body.querySelector(`#${synth}-${control}`);
          $control.addEventListener('click', () => {
            if (this.midiSetupActive) {
              this.selectedControl = $control;
            }
          });
        }
      }
    }, 200); // this.renderGroupControls(document.body.querySelector('#gp1-controls'));
  }

  clearLog() {
    const $logger = document.body.querySelector('#note-logger');
    const nLogged = $logger.childElementCount;

    for (var i = 0; i < nLogged; i++) {
      $logger.removeChild($logger.lastChild);
    }
  }

  activateMidiSetup(activated) {
    this.midiSetupActive = activated;

    if (activated) {
      this.selectedControl = null;
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
          id="${synthType}-mute";
          width="50";
          height="50";
          ?active="${this.masterControls[synthType].get('mute')}"
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
          id="${synthType}-volume";
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
          id="${synthType}-lowPassFreq";
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
          id="${synthType}-highPassFreq";
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

        <!--Toggle MIDI setup-->
        <div
          style="
            position: absolute;
            top: 70px;
            left: 1200px;
          "
        >
          <p
            style="font-size: large"
          >MIDI</br> setup</br> mode:<p>
          <sc-toggle
            height="50";
            width="50";
            @change="${e => this.activateMidiSetup(e.detail.value)}";
          ></sc-toggle>

        </div>
        
      `, this.$container);
    });
  }

}

var _default = ControllerExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXJFeHBlcmllbmNlIiwiQWJzdHJhY3RFeHBlcmllbmNlIiwiY29uc3RydWN0b3IiLCJjbGllbnQiLCJjb25maWciLCIkY29udGFpbmVyIiwiYXVkaW9Db250ZXh0IiwicmFmSWQiLCJtaWRpU2V0dXBBY3RpdmUiLCJzZWxlY3RlZENvbnRyb2wiLCJzdGFydCIsInNjb3JlIiwic3RhdGVNYW5hZ2VyIiwiYXR0YWNoIiwibWFzdGVyQ29udHJvbHMiLCJvYnNlcnZlIiwic2NoZW1hTmFtZSIsInN0YXRlSWQiLCJub2RlSWQiLCJpbmNsdWRlcyIsInN5bnRoVHlwZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJncm91cENvbnRyb2xzIiwic3Vic2NyaWJlIiwidXBkYXRlcyIsInN5bnRocyIsInN5bnRoIiwiJGNvbnRyb2xzIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInJlbmRlckdyb3VwQ29udHJvbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIiRsb2dnZXIiLCJjaGlsZEVsZW1lbnRDb3VudCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiJGNob3JkUGFyYWdyYXBoIiwiY3JlYXRlRWxlbWVudCIsIiR0ZXh0Q29udGVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJpIiwibm90ZXMiLCJsZW5ndGgiLCIkbm90ZXBhcmFncmFwaCIsInNldEF0dHJpYnV0ZSIsImZyZXF1ZW5jeSIsInZlbG9jaXR5IiwiZHVyYXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwiZW52ZWxvcHBlIiwibWV0YXMiLCJtb2RGcmVxIiwibW9kRGVwdGgiLCJoYXJtb25pY2l0eSIsIm1vZEluZGV4IiwicHJlcGVuZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJtaWRpQ29udHJvbERpY3QiLCJnZXRNSURJTWVzc2FnZSIsIm1pZGlNZXNzYWdlIiwiZGV2aWNlSWQiLCJjaGFubmVsIiwidmFsdWUiLCJkYXRhIiwiaWQiLCJjb250cm9sIiwic3BsaXQiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwibXV0ZVZhbCIsImdldCIsInNldCIsIm11dGUiLCJ2b2x1bWUiLCJsb3dQYXNzRnJlcSIsImhpZ2hQYXNzRnJlcSIsIm1pZGlBY2Nlc3MiLCJuYXZpZ2F0b3IiLCJyZXF1ZXN0TUlESUFjY2VzcyIsIm1pZGlJbnB1dERldmljZXMiLCJpbnB1dHMiLCJ2YWx1ZXMiLCJkZXZpY2UiLCJzZXRUaW1lb3V0IiwiY29udHJvbHMiLCIkY29udHJvbCIsImNsZWFyTG9nIiwibkxvZ2dlZCIsImFjdGl2YXRlTWlkaVNldHVwIiwiYWN0aXZhdGVkIiwiY29udGFpbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZSIsImRldGFpbCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLG9CQUFOLFNBQW1DQywwQkFBbkMsQ0FBc0Q7QUFDcERDLEVBQUFBLFdBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxVQUFqQixFQUE2QkMsWUFBN0IsRUFBMkM7QUFDcEQsVUFBTUgsTUFBTjtBQUVBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0UsS0FBTCxHQUFhLElBQWI7QUFFQSxTQUFLRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUVBLFNBQUtFLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLElBQXZCLENBVm9ELENBWXBEOztBQUVBLDhDQUE0Qk4sTUFBNUIsRUFBb0NDLE1BQXBDLEVBQTRDQyxVQUE1QztBQUNEOztBQUVVLFFBQUxLLEtBQUssR0FBRztBQUNaLFVBQU1BLEtBQU47QUFFQSxTQUFL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUJNLENBQUMsSUFBSSxLQUFLSixpQkFBTCxDQUF1QkksQ0FBQyxDQUFDQyxNQUFGLENBQVNoQyxLQUFoQyxDQUF1QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BbkpNLEVBbUpHLEtBQUsvRCxVQW5KUjtBQW9KRCxLQXJKWSxDQUFiO0FBc0pEOztBQXhibUQ7O2VBMmJ2Q0wsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEV4cGVyaWVuY2UgfSBmcm9tICdAc291bmR3b3Jrcy9jb3JlL2NsaWVudCc7XG5pbXBvcnQgeyByZW5kZXIsIGh0bWwgfSBmcm9tICdsaXQtaHRtbCc7XG5pbXBvcnQgcmVuZGVySW5pdGlhbGl6YXRpb25TY3JlZW5zIGZyb20gJ0Bzb3VuZHdvcmtzL3RlbXBsYXRlLWhlbHBlcnMvY2xpZW50L3JlbmRlci1pbml0aWFsaXphdGlvbi1zY3JlZW5zLmpzJztcbmltcG9ydCAnQGlyY2FtL3NpbXBsZS1jb21wb25lbnRzL3NjLWJhbmcuanMnO1xuaW1wb3J0ICdAaXJjYW0vc2ltcGxlLWNvbXBvbmVudHMvc2Mtc2xpZGVyLmpzJztcbmltcG9ydCAnQGlyY2FtL3NpbXBsZS1jb21wb25lbnRzL3NjLXRvZ2dsZS5qcyc7XG5pbXBvcnQgJ0BpcmNhbS9zaW1wbGUtY29tcG9uZW50cy9zYy1lZGl0b3IuanMnO1xuaW1wb3J0ICdAaXJjYW0vc2ltcGxlLWNvbXBvbmVudHMvc2MtYnV0dG9uLmpzJztcblxuLypcblRPRE86IFxuLSBkZWZhdWx0IHZhbHVlIG9mIHRvZ2dsZSBtdXRlIGFjY29yZGluZyB0byBzdGF0ZVxuLSBsb2dhcml0aG1pYyBjb250cm9sIGZvciB2b2x1bWUgP1xuKi9cblxuY2xhc3MgQ29udHJvbGxlckV4cGVyaWVuY2UgZXh0ZW5kcyBBYnN0cmFjdEV4cGVyaWVuY2Uge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGNvbmZpZywgJGNvbnRhaW5lciwgYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoY2xpZW50KTtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG4gICAgdGhpcy5yYWZJZCA9IG51bGw7XG5cbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcblxuICAgIHRoaXMubWlkaVNldHVwQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZENvbnRyb2wgPSBudWxsO1xuXG4gICAgLy8gcmVxdWlyZSBwbHVnaW5zIGlmIG5lZWRlZFxuXG4gICAgcmVuZGVySW5pdGlhbGl6YXRpb25TY3JlZW5zKGNsaWVudCwgY29uZmlnLCAkY29udGFpbmVyKTtcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0KCkge1xuICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICB0aGlzLnNjb3JlID0gYXdhaXQgdGhpcy5jbGllbnQuc3RhdGVNYW5hZ2VyLmF0dGFjaCgnc2NvcmUnKTtcblxuICAgIHRoaXMubWFzdGVyQ29udHJvbHMgPSB7fTtcbiAgICB0aGlzLmNsaWVudC5zdGF0ZU1hbmFnZXIub2JzZXJ2ZShhc3luYyAoc2NoZW1hTmFtZSwgc3RhdGVJZCwgbm9kZUlkKSA9PiB7XG4gICAgICBpZiAoc2NoZW1hTmFtZS5pbmNsdWRlcyhcIkJ1c0NvbnRyb2xzXCIpKXtcbiAgICAgICAgY29uc3Qgc3ludGhUeXBlID0gc2NoZW1hTmFtZS5zdWJzdHJpbmcoMCwgc2NoZW1hTmFtZS5pbmRleE9mKFwiQnVzQ29udHJvbHNcIikpO1xuICAgICAgICBjb25zdCBncm91cENvbnRyb2xzID0gYXdhaXQgdGhpcy5jbGllbnQuc3RhdGVNYW5hZ2VyLmF0dGFjaChzY2hlbWFOYW1lLCBzdGF0ZUlkKTtcbiAgICAgICAgdGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdID0gZ3JvdXBDb250cm9scztcblxuICAgICAgICBncm91cENvbnRyb2xzLnN1YnNjcmliZSh1cGRhdGVzID0+IHtcbiAgICAgICAgICBjb25zdCBzeW50aHMgPSBbJ2dsb2JhbCcsICdzaW5lJywgJ2FtJywgJ2ZtJ107XG4gICAgICAgICAgZm9yIChjb25zdCBzeW50aCBvZiBzeW50aHMpIHtcbiAgICAgICAgICAgIGNvbnN0ICRjb250cm9scyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgIyR7c3ludGh9LWNvbnRyb2xzYCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckdyb3VwQ29udHJvbHMoc3ludGgsICRjb250cm9scyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnNjb3JlLnN1YnNjcmliZSh1cGRhdGVzID0+IHtcbiAgICAgIGlmICh1cGRhdGVzLmhhc093blByb3BlcnR5KCdub3RlcycpKSB7XG4gICAgICAgIC8vUHJpbnQgaW4gbG9nZ2VyXG4gICAgICAgIGNvbnN0ICRsb2dnZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWxvZ2dlcicpO1xuICAgICAgICBpZiAoJGxvZ2dlci5jaGlsZEVsZW1lbnRDb3VudCA+IDEwMCkge1xuICAgICAgICAgICRsb2dnZXIucmVtb3ZlQ2hpbGQoJGxvZ2dlci5sYXN0Q2hpbGQpOyAvL1JlbW92ZSBvbGRlc3QgZWxlbWVudCBpZiB0b28gbXVjaCBsb2dnZWRcbiAgICAgICAgfSBcbiAgICAgICAgY29uc3QgJGNob3JkUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYE5FVyBDSE9SRDpcXHJcXG5gKTtcbiAgICAgICAgJGNob3JkUGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZXMubm90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCAkbm90ZXBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAkbm90ZXBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gICAgICAgICAgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYE5vdGUgJHtpfVxcclxcbmApO1xuICAgICAgICAgICRub3RlcGFyYWdyYXBoLmFwcGVuZENoaWxkKCR0ZXh0Q29udGVudCk7XG4gICAgICAgICAgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYGZyZXF1ZW5jeSA6ICR7dXBkYXRlcy5ub3Rlc1tpXS5mcmVxdWVuY3l9XFxyXFxuYCk7XG4gICAgICAgICAgJG5vdGVwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJHRleHRDb250ZW50KTtcbiAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgdmVsb2NpdHkgKGRCKSA6ICR7dXBkYXRlcy5ub3Rlc1tpXS52ZWxvY2l0eX1cXHJcXG5gKTtcbiAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBkdXJhdGlvbiAocykgOiAke3VwZGF0ZXMubm90ZXNbaV0uZHVyYXRpb259XFxyXFxuYCk7XG4gICAgICAgICAgJG5vdGVwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJHRleHRDb250ZW50KTtcbiAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgZW52ZWxvcHBlIDogJHtKU09OLnN0cmluZ2lmeSh1cGRhdGVzLm5vdGVzW2ldLmVudmVsb3BwZSl9XFxyXFxuYCk7XG4gICAgICAgICAgJG5vdGVwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJHRleHRDb250ZW50KTtcbiAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgc3ludGggdHlwZSA6ICR7dXBkYXRlcy5ub3Rlc1tpXS5tZXRhcy5zeW50aFR5cGV9XFxyXFxuYCk7XG4gICAgICAgICAgJG5vdGVwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoJHRleHRDb250ZW50KTtcbiAgICAgICAgICBzd2l0Y2ggKHVwZGF0ZXMubm90ZXNbaV0ubWV0YXMuc3ludGhUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzaW5lJzpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbSc6XG4gICAgICAgICAgICAgICR0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBtb2QgZnJlcSA6ICR7dXBkYXRlcy5ub3Rlc1tpXS5tZXRhcy5tb2RGcmVxfVxcclxcbmApO1xuICAgICAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgbW9kIGRlcHRoIDogJHt1cGRhdGVzLm5vdGVzW2ldLm1ldGFzLm1vZERlcHRofVxcclxcbmApO1xuICAgICAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZtJzpcbiAgICAgICAgICAgICAgJHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYGhhcm1vbmljaXR5IDogJHt1cGRhdGVzLm5vdGVzW2ldLm1ldGFzLmhhcm1vbmljaXR5fVxcclxcbmApO1xuICAgICAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAkdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgbW9kIGluZGV4IDogJHt1cGRhdGVzLm5vdGVzW2ldLm1ldGFzLm1vZEluZGV4fVxcclxcbmApO1xuICAgICAgICAgICAgICAkbm90ZXBhcmFncmFwaC5hcHBlbmRDaGlsZCgkdGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgJGNob3JkUGFyYWdyYXBoLmFwcGVuZENoaWxkKCRub3RlcGFyYWdyYXBoKTtcbiAgICAgICAgfSAgXG4gICAgICAgICRsb2dnZXIucHJlcGVuZCgkY2hvcmRQYXJhZ3JhcGgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLnJlbmRlcigpKTtcblxuICAgIC8vTUlESVxuICAgIHRoaXMubWlkaUNvbnRyb2xEaWN0ID0ge307XG5cbiAgICBjb25zdCBnZXRNSURJTWVzc2FnZSA9IChtaWRpTWVzc2FnZSkgPT4ge1xuICAgICAgY29uc3QgW2RldmljZUlkLCBjaGFubmVsLCB2YWx1ZV0gPSBtaWRpTWVzc2FnZS5kYXRhO1xuICAgICAgaWYgKHRoaXMubWlkaVNldHVwQWN0aXZlKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ29udHJvbCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMubWlkaUNvbnRyb2xEaWN0W2NoYW5uZWxdID0gdGhpcy5zZWxlY3RlZENvbnRyb2wuaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm1pZGlDb250cm9sRGljdFtjaGFubmVsXTtcbiAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICBjb25zdCBzeW50aFR5cGUgPSBjb250cm9sLnNwbGl0KCctJylbMF07XG4gICAgICAgICAgY29uc3Qga2V5ID0gY29udHJvbC5zcGxpdCgnLScpWzFdO1xuICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdtdXRlJzpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICBjb25zdCBtdXRlVmFsID0gdGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLmdldCgnbXV0ZScpO1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IDEyNykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyQ29udHJvbHNbc3ludGhUeXBlXS5zZXQoeyBtdXRlOiAhbXV0ZVZhbCB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZvbHVtZSc6XG4gICAgICAgICAgICAgIHRoaXMubWFzdGVyQ29udHJvbHNbc3ludGhUeXBlXS5zZXQoeyB2b2x1bWU6IC02MC4gKyB2YWx1ZSAqIDYwLiAvIDEyNy4gfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbG93UGFzc0ZyZXEnOlxuICAgICAgICAgICAgICB0aGlzLm1hc3RlckNvbnRyb2xzW3N5bnRoVHlwZV0uc2V0KHsgbG93UGFzc0ZyZXE6IDIwICsgdmFsdWUgKiAoMjAwMDAgLSAyMCkgLyAxMjcuIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2hQYXNzRnJlcSc6XG4gICAgICAgICAgICAgIHRoaXMubWFzdGVyQ29udHJvbHNbc3ludGhUeXBlXS5zZXQoeyBoaWdoUGFzc0ZyZXE6IDIwICsgdmFsdWUgKiAoMjAwMDAgLSAyMCkgLyAxMjcuIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtaWRpQWNjZXNzID0gYXdhaXQgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKCk7XG4gICAgY29uc3QgbWlkaUlucHV0RGV2aWNlcyA9IG1pZGlBY2Nlc3MuaW5wdXRzLnZhbHVlcygpO1xuICAgIGZvciAobGV0IGRldmljZSBvZiBtaWRpSW5wdXREZXZpY2VzKSB7ICAgICAgXG4gICAgICBkZXZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbWlkaW1lc3NhZ2UnLCBnZXRNSURJTWVzc2FnZSk7XG4gICAgICAvLyBkZXZpY2Uub25taWRpbWVzc2FnZSA9IGdldE1JRElNZXNzYWdlO1xuICAgIH0gXG5cblxuXG4gICAgLy9SZW5kZXJpbmdcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgIGNvbnN0IHN5bnRocyA9IFsnZ2xvYmFsJywgJ3NpbmUnLCAnYW0nLCAnZm0nXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ludGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0ICRjb250cm9scyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgIyR7c3ludGhzW2ldfS1jb250cm9sc2ApO1xuICAgICAgICB0aGlzLnJlbmRlckdyb3VwQ29udHJvbHMoc3ludGhzW2ldLCAkY29udHJvbHMpOyBcbiAgICAgIH1cbiAgICB9LCA1MCk7IC8vIG5vIHdvcmthcm91bmQgPz9cblxuICAgIC8vTUlESSBzZXR1cCBtb2RlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzeW50aHMgPSBbJ2dsb2JhbCcsICdzaW5lJywgJ2FtJywgJ2ZtJ107XG4gICAgICBjb25zdCBjb250cm9scyA9IFsnbXV0ZScsICd2b2x1bWUnLCAnbG93UGFzc0ZyZXEnLCAnaGlnaFBhc3NGcmVxJ107XG4gICAgICBmb3IgKGNvbnN0IHN5bnRoIG9mIHN5bnRocykge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2wgb2YgY29udHJvbHMpIHtcbiAgICAgICAgICBjb25zdCAkY29udHJvbCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgIyR7c3ludGh9LSR7Y29udHJvbH1gKTtcbiAgICAgICAgICAkY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pZGlTZXR1cEFjdGl2ZSkge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29udHJvbCA9ICRjb250cm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICAgIFxuICAgIC8vIHRoaXMucmVuZGVyR3JvdXBDb250cm9scyhkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNncDEtY29udHJvbHMnKSk7XG4gIH1cblxuICBjbGVhckxvZygpIHtcbiAgICBjb25zdCAkbG9nZ2VyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjbm90ZS1sb2dnZXInKTtcbiAgICBjb25zdCBuTG9nZ2VkID0gJGxvZ2dlci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5Mb2dnZWQ7IGkrKykge1xuICAgICAgJGxvZ2dlci5yZW1vdmVDaGlsZCgkbG9nZ2VyLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZhdGVNaWRpU2V0dXAoYWN0aXZhdGVkKSB7XG4gICAgdGhpcy5taWRpU2V0dXBBY3RpdmUgPSBhY3RpdmF0ZWQ7XG4gICAgaWYgKGFjdGl2YXRlZCkge3RoaXMuc2VsZWN0ZWRDb250cm9sID0gbnVsbH1cbiAgfVxuXG4gIHJlbmRlckdyb3VwQ29udHJvbHMoc3ludGhUeXBlLCBjb250YWluZXIpIHtcbiAgICB0aGlzLnJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICByZW5kZXIoaHRtbGBcbiAgICAgICAgPHBcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICB0b3A6IDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgPiR7c3ludGhUeXBlfSBjb250cm9scyA8L3A+XG4gICAgICAgIDxwXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgdG9wOiAyMiU7XG4gICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICBcIlxuICAgICAgICA+TXV0ZTogPC9wPlxuICAgICAgICA8c2MtdG9nZ2xlXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICAgIHRvcDogMjIlO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCIke3N5bnRoVHlwZX0tbXV0ZVwiO1xuICAgICAgICAgIHdpZHRoPVwiNTBcIjtcbiAgICAgICAgICBoZWlnaHQ9XCI1MFwiO1xuICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMubWFzdGVyQ29udHJvbHNbc3ludGhUeXBlXS5nZXQoJ211dGUnKX1cIlxuICAgICAgICAgIEBjaGFuZ2U9XCIke2UgPT4gdGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLnNldCh7IG11dGU6IGUuZGV0YWlsLnZhbHVlIH0pfVwiXG4gICAgICAgID48L3NjLXRvZ2dsZT5cblxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgXCJcbiAgICAgICAgPlZvbHVtZTogPC9wPlxuICAgICAgICA8c2Mtc2xpZGVyXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICAgIHRvcDogNDIlO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCIke3N5bnRoVHlwZX0tdm9sdW1lXCI7XG4gICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgIHdpZHRoPVwiMjkwXCJcbiAgICAgICAgICBtaW49XCItNjBcIlxuICAgICAgICAgIG1heD1cIjBcIlxuICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLm1hc3RlckNvbnRyb2xzW3N5bnRoVHlwZV0uZ2V0KCd2b2x1bWUnKX1cIlxuICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLm1hc3RlckNvbnRyb2xzW3N5bnRoVHlwZV0uc2V0KHsgdm9sdW1lOiBlLmRldGFpbC52YWx1ZSB9KX1cIlxuICAgICAgICAgIGRpc3BsYXktbnVtYmVyXG4gICAgICAgID48L3NjLXNsaWRlcj5cblxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgIHRvcDogNTglO1xuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgXCJcbiAgICAgICAgPkxvdy1wYXNzIDwvYnI+ZnJlcTogPC9wPlxuICAgICAgICA8c2Mtc2xpZGVyXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICAgIHRvcDogNjIlO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCIke3N5bnRoVHlwZX0tbG93UGFzc0ZyZXFcIjtcbiAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgd2lkdGg9XCIyOTBcIlxuICAgICAgICAgIG1pbj1cIjIwXCJcbiAgICAgICAgICBtYXg9XCIyMDAwMFwiXG4gICAgICAgICAgdmFsdWU9XCIke3RoaXMubWFzdGVyQ29udHJvbHNbc3ludGhUeXBlXS5nZXQoJ2xvd1Bhc3NGcmVxJyl9XCJcbiAgICAgICAgICBAaW5wdXQ9XCIke2UgPT4gdGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLnNldCh7IGxvd1Bhc3NGcmVxOiBlLmRldGFpbC52YWx1ZSB9KX1cIlxuICAgICAgICAgIGRpc3BsYXktbnVtYmVyXG4gICAgICAgID48L3NjLXNsaWRlcj5cblxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgIHRvcDogNzglO1xuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgXCJcbiAgICAgICAgPkhpZ2gtcGFzcyA8L2JyPmZyZXE6IDwvcD5cbiAgICAgICAgPHNjLXNsaWRlclxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgICB0b3A6IDgyJTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGlkPVwiJHtzeW50aFR5cGV9LWhpZ2hQYXNzRnJlcVwiO1xuICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICB3aWR0aD1cIjI5MFwiXG4gICAgICAgICAgbWluPVwiMjBcIlxuICAgICAgICAgIG1heD1cIjIwMDAwXCJcbiAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLmdldCgnaGlnaFBhc3NGcmVxJyl9XCJcbiAgICAgICAgICBAaW5wdXQ9XCIke2UgPT4gdGhpcy5tYXN0ZXJDb250cm9sc1tzeW50aFR5cGVdLnNldCh7IGhpZ2hQYXNzRnJlcTogZS5kZXRhaWwudmFsdWUgfSl9XCJcbiAgICAgICAgICBkaXNwbGF5LW51bWJlclxuICAgICAgICA+PC9zYy1zbGlkZXI+XG4gICAgICBgLCBjb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBkZWJvdW5jZSB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcblxuICAgIHRoaXMucmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHJlbmRlcihodG1sYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweFwiPlxuICAgICAgICAgIDxoMSBzdHlsZT1cIm1hcmdpbjogMjBweCAwXCI+JHt0aGlzLmNsaWVudC50eXBlfSBbaWQ6ICR7dGhpcy5jbGllbnQuaWR9XTwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS1Ob3RlIGxvZ2dlci0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPk9TQyBsb2c6IDwvcD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBpZD1cIm5vdGUtbG9nZ2VyXCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPHNjLWJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDM3MHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBAcHJlc3M9XCIke2UgPT4gdGhpcy5jbGVhckxvZygpfVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjUwXCJcbiAgICAgICAgICAgIHRleHQ9XCJjbGVhclwiXG4gICAgICAgICAgPjwvc2MtYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS1Db2RlIGZvciBkaXNwYXRjaC0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQ4MHB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5Ob3RlIGRpc3BhdGNoIGNvZGU6IDwvcD5cbiAgICAgICAgICA8c2MtZWRpdG9yXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMTQlO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGhlaWdodD0yNTBcbiAgICAgICAgICAgIHdpZHRoPTMwMFxuICAgICAgICAgID48L3NjLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLUdsb2JhbCBjb250cm9scy0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICBsZWZ0OiAzMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMjU1LDAsLjEpO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCJnbG9iYWwtY29udHJvbHNcIlxuICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS1TaW5lIGNvbnRyb2xzLS0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDczMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMTI4LC4xNSk7XG4gICAgICAgICAgXCJcbiAgICAgICAgICBpZD1cInNpbmUtY29udHJvbHNcIlxuICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS1BTSBjb250cm9scy0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQzMHB4O1xuICAgICAgICAgICAgbGVmdDogMzIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsMCwyNTUsLjE1KTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIGlkPVwiYW0tY29udHJvbHNcIlxuICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS1GTSBjb250cm9scy0tPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQzMHB4O1xuICAgICAgICAgICAgbGVmdDogNzMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTksMTI4LDcsLjMpO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgaWQ9XCJmbS1jb250cm9sc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLVRvZ2dsZSBNSURJIHNldHVwLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICAgICAgbGVmdDogMTIwMHB4O1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IGxhcmdlXCJcbiAgICAgICAgICA+TUlESTwvYnI+IHNldHVwPC9icj4gbW9kZTo8cD5cbiAgICAgICAgICA8c2MtdG9nZ2xlXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MFwiO1xuICAgICAgICAgICAgd2lkdGg9XCI1MFwiO1xuICAgICAgICAgICAgQGNoYW5nZT1cIiR7ZSA9PiB0aGlzLmFjdGl2YXRlTWlkaVNldHVwKGUuZGV0YWlsLnZhbHVlKX1cIjtcbiAgICAgICAgICA+PC9zYy10b2dnbGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgYCwgdGhpcy4kY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyRXhwZXJpZW5jZTtcbiJdfQ==