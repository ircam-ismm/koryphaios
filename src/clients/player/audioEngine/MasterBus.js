import '@ircam/simple-components/sc-slider.js';
import '@ircam/simple-components/sc-toggle.js';
import '@ircam/simple-components/sc-text.js';
import decibelToLinear from '../math/decibelToLinear';
import { render, html } from 'lit-html';


/*
- send aux
*/


export default class MasterBus {
  constructor(audioContext, { panner = false, filter = false} = {}) {
    this.audioContext = audioContext;

    this._hasPanner = panner;
    this._hasFilter = filter;


    //User set parameters 
    this.userParams = {
      mute: {
        type: 'boolean',
        default: false,
        value: false,
      },
      panning: {
        type: 'number',
        min: -1.0,
        max: 1.0,
        default: 0.0,
        value: 0.0,
      },
      volume: {
        type: 'number',
        min: -60.0,
        max: 12.0,
        default: -6.0,
        value: -6.0,
      },
      lowPassFreq: {
        type: 'number',
        min: 20.0,
        max: 20000.0,
        default: 20000.0,
        value: 20000.0,
      },
      highPassFreq: {
        type: 'number',
        min: 20.0,
        max: 20000.0,
        default: 20.0,
        value: 20.0,
      },
    };

    // // Dev set parameters;
    // const _lowPassFreq = 20;
    // const _highPassFreq = 12000;

    //Create audio nodes
    this._output = this.audioContext.createGain();
    this._mute = this.audioContext.createGain(); 
    this._mute.gain.value = this.userParams.mute.default ? 0 : 1;
    this._volumeNode = this.audioContext.createGain();
    this._volumeNode.gain.value = decibelToLinear(this.userParams.volume.default);
    this._input = this.audioContext.createGain();
      //optionals
    if (this._hasPanner) {
      this._panNode = this.audioContext.createStereoPanner();
      this._panNode.pan.value = this.userParams.panning.default;
    }
    if (this._hasFilter) {  
      this._highFilter = this.audioContext.createBiquadFilter();
      this._highFilter.type = "highpass";
      this._highFilter.frequency.value = this.userParams.highPassFreq.default;
      this._lowFilter = this.audioContext.createBiquadFilter();
      this._lowFilter.type = "lowpass";
      this._lowFilter.frequency.value = this.userParams.lowPassFreq.default;
    }


    this.paramToNode = {
      'mute': this._mute.gain,
      'volume': this._volumeNode.gain,
    }
    if (this._hasPanner) {this.paramToNode['panning'] = this._panNode.pan;}
    if (this._hasFilter) {
      this.paramToNode['lowPassFreq'] = this._lowFilter.frequency;
      this.paramToNode['highPassFreq'] = this._highFilter.frequency;
    }

    //Setting up internal connections
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
    this._mute.connect(this._output);

    //Dynamically define setters and getters for userParams;
    Object.keys(this.userParams).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return this.userParams[key].value;
        },
        set(val) {
          const expectedType = this.userParams[key].type;
          if (!(typeof(val) === expectedType)) {throw `${key} value must be of type ${expectedType} (type given : ${typeof(val)})`};
          if ("min" in this.userParams[key] && val < this.userParams[key].min) {throw `${key} value must be higher than ${this.userParams[key].min} (value given : ${val})`}
          if ("max" in this.userParams[key] && val > this.userParams[key].max) {throw `${key} value must be lower than ${this.userParams[key].max} (value given : ${val})`}
          this.userParams[key].value = val;

          const now = this.audioContext.currentTime;
          if (key === 'mute') {
            if (val) {
              this._mute.gain.setTargetAtTime(0, now, 0.02)
            } else {
              this._mute.gain.setTargetAtTime(1, now, 0.02);
            }
          } else if (key === 'volume') {
            this._volumeNode.gain.setTargetAtTime(decibelToLinear(val), now, 0.02);
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

  disconnect() {
    this._output.disconnect();
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
