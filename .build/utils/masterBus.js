"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@ircam/simple-components/sc-slider.js");

require("@ircam/simple-components/sc-toggle.js");

require("@ircam/simple-components/sc-text.js");

var _decibelToLinear = _interopRequireDefault(require("../math/decibelToLinear"));

var _litHtml = require("lit-html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
- send aux
*/
class MasterBus {
  constructor(audioContext, {
    panner = false,
    filter = false
  } = {}) {
    this.audioContext = audioContext;
    this._hasPanner = panner;
    this._hasFilter = filter; //User set parameters 

    this.userParams = {
      mute: {
        type: 'boolean',
        default: false,
        value: false
      },
      panning: {
        type: 'number',
        min: -1.0,
        max: 1.0,
        default: 0.0,
        value: 0.0
      },
      volume: {
        type: 'number',
        min: -60.0,
        max: 0.0,
        default: -6.0,
        value: -6.0
      },
      lowPassFreq: {
        type: 'number',
        min: 20.0,
        max: 20000.0,
        default: 20000.0,
        value: 20000.0
      },
      highPassFreq: {
        type: 'number',
        min: 20.0,
        max: 20000.0,
        default: 20.0,
        value: 20.0
      }
    }; //Dev set parameters;
    // const _lowPassFreq = 80;
    // const _highPassFreq = 12000;
    //Create audio nodes

    this._output = this.audioContext.createGain();
    this._mute = this.audioContext.createGain();
    this._mute.gain.value = this.userParams.mute.default ? 0 : 1;
    this._volumeNode = this.audioContext.createGain();
    this._volumeNode.gain.value = (0, _decibelToLinear.default)(this.userParams.volume.default);
    this._input = this.audioContext.createGain(); //optionals

    if (this._hasPanner) {
      this._panNode = this.audioContext.createStereoPanner();
      this._panNode.pan.value = this.userParams.panning.default;
    }

    if (this._hasFilter) {
      this._highFilter = this.audioContext.createBiquadFilter();
      this._highFilter.type = "highpass";
      this._highFilter.frequency.value = _highPassFreq;
      this._lowFilter = this.audioContext.createBiquadFilter();
      this._lowFilter.type = "lowpass";
      this._lowFilter.frequency.value = _lowPassFreq;
    }

    this.paramToNode = {
      'mute': this._mute.gain,
      'volume': this._volumeNode.gain
    };

    if (this._hasPanner) {
      this.paramToNode['panning'] = this._panNode.pan;
    }

    if (this._hasFilter) {
      this.paramToNode['lowPassFreq'] = this._lowFilter.frequency;
      this.paramToNode['highPassFreq'] = this._highFilter.frequency;
    } //Setting up internal connections


    if (this._hasFilter) {
      this._input.connect(this._lowFilter);

      this._lowFilter.connect(this._highFilter);

      this._highFilter.connect(this._volumeNode);
    } else {
      this._input.connect(this._volumeNode);
    }

    if (this._hasPanner) {
      this._volumeNode.connect(this._panNode);

      this._panNode.connect(this._mute);
    } else {
      this._volumeNode.connect(this._mute);
    }

    this._mute.connect(this._output); //Dynamically define setters and getters for userParams;


    Object.keys(this.userParams).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return this.userParams[key].value;
        },

        set(val) {
          const expectedType = this.userParams[key].type;

          if (!(typeof val === expectedType)) {
            throw `${key} value must be of type ${expectedType} (type given : ${typeof val})`;
          }

          ;

          if ("min" in this.userParams[key] && val < this.userParams[key].min) {
            throw `${key} value must be higher than ${this.userParams[key].min} (value given : ${val})`;
          }

          if ("max" in this.userParams[key] && val > this.userParams[key].max) {
            throw `${key} value must be lower than ${this.userParams[key].max} (value given : ${val})`;
          }

          this.userParams[key].value = val;
          const now = this.audioContext.currentTime;

          if (key === 'mute') {
            if (val) {
              this._mute.gain.setTargetAtTime(0, now, 0.02);
            } else {
              this._mute.gain.setTargetAtTime(1, now, 0.02);
            }
          } else if (key === 'volume') {
            this._volumeNode.gain.setTargetAtTime((0, _decibelToLinear.default)(val), now, 0.02);
          } else if (key in this.userParams) {
            this.paramToNode[key].setTargetAtTime(val, now, 0.02);
          } else {
            console.warn(`${key} is not a valid parameter for master bus`);
          }
        }

      });
    });
  }

  get input() {
    return this._input;
  }

  connect(dest) {
    this._output.connect(dest);
  }

  hasPanner() {
    return this._hasPanner;
  }

  hasFilter() {
    return this._hasFilter;
  }

}
/*
  render(container) {
    this.rafId = window.requestAnimationFrame(() => {
      render(html`
        <div
          style="
            position: relative;
            height: 10em;
            width: 30em;
          "
        >
          <div
            style="
              position: absolute;
            "
          >
            <sc-toggle
              @change="${e => this.mute = e.detail.value}",
            >
            </sc-toggle>
            <sc-text
              readonly
              width="50"
              value="Mute"
            ></sc-text>
          </div>
          
          <div
            style="
              position: absolute;
              top: 25%;
            "
          >
            <sc-slider
              width="150"
              min="${this.userParams.volume.min}"
              max="${this.userParams.volume.max}"
              value="${this.volume}"
              @input="${e => this.volume = e.detail.value}"
            >
            </sc-slider>
            <sc-text
              readonly
              width="52"
              value="Volume"
            ></sc-text>
          </div>

          <div
            style="
              position: absolute;
              top: 50%;
            "
          >
            <sc-slider
              width="150"
              min="${this.userParams.panning.min}"
              max="${this.userParams.panning.max}"
              value="${this.panning}"
              @input="${e => this.panning = e.detail.value}"
            >
            </sc-slider>
            <sc-text
              readonly
              width="50"
              value="Pan"
            ></sc-text>
          </div>

          <div
            style="
              position: absolute;
              left: 50%;
            "
          >
            <sc-slider
              orientation="vertical"
              width="40";
              height="110";
              min="${this.userParams.lowPassGain.min}"
              max="${this.userParams.lowPassGain.max}"
              value="${this.lowPassGain}"
              @input="${e => this.lowPassGain = e.detail.value}"
            >
            </sc-slider>
            <div
              style="
                position: absolute;
                top: 100%;
              "
            >    
              <sc-text
                readonly
                width="40"
                value="Low"
              ></sc-text>
            </div>
          </div>

          <div
            style="
              position: absolute;
              left: 60%;
            "
          >
            <sc-slider
              orientation="vertical"
              width="40";
              height="110";
              min="${this.userParams.midPassGain.min}"
              max="${this.userParams.midPassGain.max}"
              value="${this.midPassGain}"
              @input="${e => this.midPassGain = e.detail.value}"
            >
            </sc-slider>
            <div
              style="
                position: absolute;
                top: 100%;
              "
            >    
              <sc-text
                readonly
                width="40"
                value="Mid"
              ></sc-text>
            </div>
          </div>

          <div
            style="
              position: absolute;
              left: 70%;
            "
          >
            <sc-slider
              orientation="vertical"
              width="40";
              height="110";
              min="${this.userParams.highPassGain.min}"
              max="${this.userParams.highPassGain.max}"
              value="${this.highPassGain}"
              @input="${e => this.highPassGain = e.detail.value}"
            >
            </sc-slider>
            <div
              style="
                position: absolute;
                top: 100%;
              "
            >    
              <sc-text
                readonly
                width="40"
                value="High"
              ></sc-text>
            </div>
          </div>



          
        </div>
      `, container);
    });
  }
  */


exports.default = MasterBus;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3RlckJ1cy5qcyJdLCJuYW1lcyI6WyJNYXN0ZXJCdXMiLCJjb25zdHJ1Y3RvciIsImF1ZGlvQ29udGV4dCIsInBhbm5lciIsImZpbHRlciIsIl9oYXNQYW5uZXIiLCJfaGFzRmlsdGVyIiwidXNlclBhcmFtcyIsIm11dGUiLCJ0eXBlIiwiZGVmYXVsdCIsInZhbHVlIiwicGFubmluZyIsIm1pbiIsIm1heCIsInZvbHVtZSIsImxvd1Bhc3NGcmVxIiwiaGlnaFBhc3NGcmVxIiwiX291dHB1dCIsImNyZWF0ZUdhaW4iLCJfbXV0ZSIsImdhaW4iLCJfdm9sdW1lTm9kZSIsIl9pbnB1dCIsIl9wYW5Ob2RlIiwiY3JlYXRlU3RlcmVvUGFubmVyIiwicGFuIiwiX2hpZ2hGaWx0ZXIiLCJjcmVhdGVCaXF1YWRGaWx0ZXIiLCJmcmVxdWVuY3kiLCJfaGlnaFBhc3NGcmVxIiwiX2xvd0ZpbHRlciIsIl9sb3dQYXNzRnJlcSIsInBhcmFtVG9Ob2RlIiwiY29ubmVjdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJ2YWwiLCJleHBlY3RlZFR5cGUiLCJub3ciLCJjdXJyZW50VGltZSIsInNldFRhcmdldEF0VGltZSIsImNvbnNvbGUiLCJ3YXJuIiwiaW5wdXQiLCJkZXN0IiwiaGFzUGFubmVyIiwiaGFzRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFHZSxNQUFNQSxTQUFOLENBQWdCO0FBQzdCQyxFQUFBQSxXQUFXLENBQUNDLFlBQUQsRUFBZTtBQUFFQyxJQUFBQSxNQUFNLEdBQUcsS0FBWDtBQUFrQkMsSUFBQUEsTUFBTSxHQUFHO0FBQTNCLE1BQW9DLEVBQW5ELEVBQXVEO0FBQ2hFLFNBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBRUEsU0FBS0csVUFBTCxHQUFrQkYsTUFBbEI7QUFDQSxTQUFLRyxVQUFM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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGlyY2FtL3NpbXBsZS1jb21wb25lbnRzL3NjLXNsaWRlci5qcyc7XG5pbXBvcnQgJ0BpcmNhbS9zaW1wbGUtY29tcG9uZW50cy9zYy10b2dnbGUuanMnO1xuaW1wb3J0ICdAaXJjYW0vc2ltcGxlLWNvbXBvbmVudHMvc2MtdGV4dC5qcyc7XG5pbXBvcnQgZGVjaWJlbFRvTGluZWFyIGZyb20gJy4uL21hdGgvZGVjaWJlbFRvTGluZWFyJztcbmltcG9ydCB7IHJlbmRlciwgaHRtbCB9IGZyb20gJ2xpdC1odG1sJztcblxuXG4vKlxuLSBzZW5kIGF1eFxuKi9cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXN0ZXJCdXMge1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQsIHsgcGFubmVyID0gZmFsc2UsIGZpbHRlciA9IGZhbHNlfSA9IHt9KSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG5cbiAgICB0aGlzLl9oYXNQYW5uZXIgPSBwYW5uZXI7XG4gICAgdGhpcy5faGFzRmlsdGVyID0gZmlsdGVyO1xuXG5cbiAgICAvL1VzZXIgc2V0IHBhcmFtZXRlcnMgXG4gICAgdGhpcy51c2VyUGFyYW1zID0ge1xuICAgICAgbXV0ZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcGFubmluZzoge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgbWluOiAtMS4wLFxuICAgICAgICBtYXg6IDEuMCxcbiAgICAgICAgZGVmYXVsdDogMC4wLFxuICAgICAgICB2YWx1ZTogMC4wLFxuICAgICAgfSxcbiAgICAgIHZvbHVtZToge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgbWluOiAtNjAuMCxcbiAgICAgICAgbWF4OiAwLjAsXG4gICAgICAgIGRlZmF1bHQ6IC02LjAsXG4gICAgICAgIHZhbHVlOiAtNi4wLFxuICAgICAgfSxcbiAgICAgIGxvd1Bhc3NGcmVxOiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICBtaW46IDIwLjAsXG4gICAgICAgIG1heDogMjAwMDAuMCxcbiAgICAgICAgZGVmYXVsdDogMjAwMDAuMCxcbiAgICAgICAgdmFsdWU6IDIwMDAwLjAsXG4gICAgICB9LFxuICAgICAgaGlnaFBhc3NGcmVxOiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICBtaW46IDIwLjAsXG4gICAgICAgIG1heDogMjAwMDAuMCxcbiAgICAgICAgZGVmYXVsdDogMjAuMCxcbiAgICAgICAgdmFsdWU6IDIwLjAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvL0RldiBzZXQgcGFyYW1ldGVycztcbiAgICAvLyBjb25zdCBfbG93UGFzc0ZyZXEgPSA4MDtcbiAgICAvLyBjb25zdCBfaGlnaFBhc3NGcmVxID0gMTIwMDA7XG5cbiAgICAvL0NyZWF0ZSBhdWRpbyBub2Rlc1xuICAgIHRoaXMuX291dHB1dCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLl9tdXRlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpOyBcbiAgICB0aGlzLl9tdXRlLmdhaW4udmFsdWUgPSB0aGlzLnVzZXJQYXJhbXMubXV0ZS5kZWZhdWx0ID8gMCA6IDE7XG4gICAgdGhpcy5fdm9sdW1lTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLl92b2x1bWVOb2RlLmdhaW4udmFsdWUgPSBkZWNpYmVsVG9MaW5lYXIodGhpcy51c2VyUGFyYW1zLnZvbHVtZS5kZWZhdWx0KTtcbiAgICB0aGlzLl9pbnB1dCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgIC8vb3B0aW9uYWxzXG4gICAgaWYgKHRoaXMuX2hhc1Bhbm5lcikge1xuICAgICAgdGhpcy5fcGFuTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZVN0ZXJlb1Bhbm5lcigpO1xuICAgICAgdGhpcy5fcGFuTm9kZS5wYW4udmFsdWUgPSB0aGlzLnVzZXJQYXJhbXMucGFubmluZy5kZWZhdWx0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRmlsdGVyKSB7ICBcbiAgICAgIHRoaXMuX2hpZ2hGaWx0ZXIgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICAgIHRoaXMuX2hpZ2hGaWx0ZXIudHlwZSA9IFwiaGlnaHBhc3NcIjtcbiAgICAgIHRoaXMuX2hpZ2hGaWx0ZXIuZnJlcXVlbmN5LnZhbHVlID0gX2hpZ2hQYXNzRnJlcTtcbiAgICAgIHRoaXMuX2xvd0ZpbHRlciA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgICAgdGhpcy5fbG93RmlsdGVyLnR5cGUgPSBcImxvd3Bhc3NcIjtcbiAgICAgIHRoaXMuX2xvd0ZpbHRlci5mcmVxdWVuY3kudmFsdWUgPSBfbG93UGFzc0ZyZXE7XG4gICAgfVxuXG5cbiAgICB0aGlzLnBhcmFtVG9Ob2RlID0ge1xuICAgICAgJ211dGUnOiB0aGlzLl9tdXRlLmdhaW4sXG4gICAgICAndm9sdW1lJzogdGhpcy5fdm9sdW1lTm9kZS5nYWluLFxuICAgIH1cbiAgICBpZiAodGhpcy5faGFzUGFubmVyKSB7dGhpcy5wYXJhbVRvTm9kZVsncGFubmluZyddID0gdGhpcy5fcGFuTm9kZS5wYW47fVxuICAgIGlmICh0aGlzLl9oYXNGaWx0ZXIpIHtcbiAgICAgIHRoaXMucGFyYW1Ub05vZGVbJ2xvd1Bhc3NGcmVxJ10gPSB0aGlzLl9sb3dGaWx0ZXIuZnJlcXVlbmN5O1xuICAgICAgdGhpcy5wYXJhbVRvTm9kZVsnaGlnaFBhc3NGcmVxJ10gPSB0aGlzLl9oaWdoRmlsdGVyLmZyZXF1ZW5jeTtcbiAgICB9XG5cbiAgICAvL1NldHRpbmcgdXAgaW50ZXJuYWwgY29ubmVjdGlvbnNcbiAgICBpZiAodGhpcy5faGFzRmlsdGVyKSB7XG4gICAgICB0aGlzLl9pbnB1dC5jb25uZWN0KHRoaXMuX2xvd0ZpbHRlcik7XG4gICAgICB0aGlzLl9sb3dGaWx0ZXIuY29ubmVjdCh0aGlzLl9oaWdoRmlsdGVyKTtcbiAgICAgIHRoaXMuX2hpZ2hGaWx0ZXIuY29ubmVjdCh0aGlzLl92b2x1bWVOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5wdXQuY29ubmVjdCh0aGlzLl92b2x1bWVOb2RlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc1Bhbm5lcikge1xuICAgICAgdGhpcy5fdm9sdW1lTm9kZS5jb25uZWN0KHRoaXMuX3Bhbk5vZGUpO1xuICAgICAgdGhpcy5fcGFuTm9kZS5jb25uZWN0KHRoaXMuX211dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92b2x1bWVOb2RlLmNvbm5lY3QodGhpcy5fbXV0ZSk7XG4gICAgfVxuICAgIHRoaXMuX211dGUuY29ubmVjdCh0aGlzLl9vdXRwdXQpO1xuXG4gICAgLy9EeW5hbWljYWxseSBkZWZpbmUgc2V0dGVycyBhbmQgZ2V0dGVycyBmb3IgdXNlclBhcmFtcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnVzZXJQYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJQYXJhbXNba2V5XS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZSA9IHRoaXMudXNlclBhcmFtc1trZXldLnR5cGU7XG4gICAgICAgICAgaWYgKCEodHlwZW9mKHZhbCkgPT09IGV4cGVjdGVkVHlwZSkpIHt0aHJvdyBgJHtrZXl9IHZhbHVlIG11c3QgYmUgb2YgdHlwZSAke2V4cGVjdGVkVHlwZX0gKHR5cGUgZ2l2ZW4gOiAke3R5cGVvZih2YWwpfSlgfTtcbiAgICAgICAgICBpZiAoXCJtaW5cIiBpbiB0aGlzLnVzZXJQYXJhbXNba2V5XSAmJiB2YWwgPCB0aGlzLnVzZXJQYXJhbXNba2V5XS5taW4pIHt0aHJvdyBgJHtrZXl9IHZhbHVlIG11c3QgYmUgaGlnaGVyIHRoYW4gJHt0aGlzLnVzZXJQYXJhbXNba2V5XS5taW59ICh2YWx1ZSBnaXZlbiA6ICR7dmFsfSlgfVxuICAgICAgICAgIGlmIChcIm1heFwiIGluIHRoaXMudXNlclBhcmFtc1trZXldICYmIHZhbCA+IHRoaXMudXNlclBhcmFtc1trZXldLm1heCkge3Rocm93IGAke2tleX0gdmFsdWUgbXVzdCBiZSBsb3dlciB0aGFuICR7dGhpcy51c2VyUGFyYW1zW2tleV0ubWF4fSAodmFsdWUgZ2l2ZW4gOiAke3ZhbH0pYH1cbiAgICAgICAgICB0aGlzLnVzZXJQYXJhbXNba2V5XS52YWx1ZSA9IHZhbDtcblxuICAgICAgICAgIGNvbnN0IG5vdyA9IHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdtdXRlJykge1xuICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICB0aGlzLl9tdXRlLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKDAsIG5vdywgMC4wMilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX211dGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUoMSwgbm93LCAwLjAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3ZvbHVtZScpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZvbHVtZU5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUoZGVjaWJlbFRvTGluZWFyKHZhbCksIG5vdywgMC4wMik7XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkgaW4gdGhpcy51c2VyUGFyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtVG9Ob2RlW2tleV0uc2V0VGFyZ2V0QXRUaW1lKHZhbCwgbm93LCAwLjAyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2tleX0gaXMgbm90IGEgdmFsaWQgcGFyYW1ldGVyIGZvciBtYXN0ZXIgYnVzYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gIH1cblxuICBjb25uZWN0KGRlc3QpIHtcbiAgICB0aGlzLl9vdXRwdXQuY29ubmVjdChkZXN0KTtcbiAgfVxuXG4gIGhhc1Bhbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzUGFubmVyO1xuICB9XG5cbiAgaGFzRmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNGaWx0ZXI7XG4gIH1cbn1cblxuXG5cbi8qXG4gIHJlbmRlcihjb250YWluZXIpIHtcbiAgICB0aGlzLnJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICByZW5kZXIoaHRtbGBcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwZW07XG4gICAgICAgICAgICB3aWR0aDogMzBlbTtcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c2MtdG9nZ2xlXG4gICAgICAgICAgICAgIEBjaGFuZ2U9XCIke2UgPT4gdGhpcy5tdXRlID0gZS5kZXRhaWwudmFsdWV9XCIsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3NjLXRvZ2dsZT5cbiAgICAgICAgICAgIDxzYy10ZXh0XG4gICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIk11dGVcIlxuICAgICAgICAgICAgPjwvc2MtdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c2Mtc2xpZGVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTUwXCJcbiAgICAgICAgICAgICAgbWluPVwiJHt0aGlzLnVzZXJQYXJhbXMudm9sdW1lLm1pbn1cIlxuICAgICAgICAgICAgICBtYXg9XCIke3RoaXMudXNlclBhcmFtcy52b2x1bWUubWF4fVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLnZvbHVtZX1cIlxuICAgICAgICAgICAgICBAaW5wdXQ9XCIke2UgPT4gdGhpcy52b2x1bWUgPSBlLmRldGFpbC52YWx1ZX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9zYy1zbGlkZXI+XG4gICAgICAgICAgICA8c2MtdGV4dFxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICB3aWR0aD1cIjUyXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJWb2x1bWVcIlxuICAgICAgICAgICAgPjwvc2MtdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzYy1zbGlkZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgICAgICBtaW49XCIke3RoaXMudXNlclBhcmFtcy5wYW5uaW5nLm1pbn1cIlxuICAgICAgICAgICAgICBtYXg9XCIke3RoaXMudXNlclBhcmFtcy5wYW5uaW5nLm1heH1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5wYW5uaW5nfVwiXG4gICAgICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLnBhbm5pbmcgPSBlLmRldGFpbC52YWx1ZX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9zYy1zbGlkZXI+XG4gICAgICAgICAgICA8c2MtdGV4dFxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJQYW5cIlxuICAgICAgICAgICAgPjwvc2MtdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c2Mtc2xpZGVyXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjQwXCI7XG4gICAgICAgICAgICAgIGhlaWdodD1cIjExMFwiO1xuICAgICAgICAgICAgICBtaW49XCIke3RoaXMudXNlclBhcmFtcy5sb3dQYXNzR2Fpbi5taW59XCJcbiAgICAgICAgICAgICAgbWF4PVwiJHt0aGlzLnVzZXJQYXJhbXMubG93UGFzc0dhaW4ubWF4fVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLmxvd1Bhc3NHYWlufVwiXG4gICAgICAgICAgICAgIEBpbnB1dD1cIiR7ZSA9PiB0aGlzLmxvd1Bhc3NHYWluID0gZS5kZXRhaWwudmFsdWV9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvc2Mtc2xpZGVyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+ICAgIFxuICAgICAgICAgICAgICA8c2MtdGV4dFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJMb3dcIlxuICAgICAgICAgICAgICA+PC9zYy10ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDYwJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNjLXNsaWRlclxuICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiO1xuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMTBcIjtcbiAgICAgICAgICAgICAgbWluPVwiJHt0aGlzLnVzZXJQYXJhbXMubWlkUGFzc0dhaW4ubWlufVwiXG4gICAgICAgICAgICAgIG1heD1cIiR7dGhpcy51c2VyUGFyYW1zLm1pZFBhc3NHYWluLm1heH1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5taWRQYXNzR2Fpbn1cIlxuICAgICAgICAgICAgICBAaW5wdXQ9XCIke2UgPT4gdGhpcy5taWRQYXNzR2FpbiA9IGUuZGV0YWlsLnZhbHVlfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3NjLXNsaWRlcj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgPiAgICBcbiAgICAgICAgICAgICAgPHNjLXRleHRcbiAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiTWlkXCJcbiAgICAgICAgICAgICAgPjwvc2MtdGV4dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA3MCU7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzYy1zbGlkZXJcbiAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDBcIjtcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTEwXCI7XG4gICAgICAgICAgICAgIG1pbj1cIiR7dGhpcy51c2VyUGFyYW1zLmhpZ2hQYXNzR2Fpbi5taW59XCJcbiAgICAgICAgICAgICAgbWF4PVwiJHt0aGlzLnVzZXJQYXJhbXMuaGlnaFBhc3NHYWluLm1heH1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5oaWdoUGFzc0dhaW59XCJcbiAgICAgICAgICAgICAgQGlucHV0PVwiJHtlID0+IHRoaXMuaGlnaFBhc3NHYWluID0gZS5kZXRhaWwudmFsdWV9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvc2Mtc2xpZGVyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+ICAgIFxuICAgICAgICAgICAgICA8c2MtdGV4dFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJIaWdoXCJcbiAgICAgICAgICAgICAgPjwvc2MtdGV4dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbiAgKi8iXX0=