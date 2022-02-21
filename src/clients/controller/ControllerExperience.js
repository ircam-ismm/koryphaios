import { AbstractExperience } from '@soundworks/core/client';
import { render, html, nothing } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import '@ircam/simple-components/sc-bang.js';
import '@ircam/simple-components/sc-slider.js';
import '@ircam/simple-components/sc-toggle.js';
import '@ircam/simple-components/sc-editor.js';
import '@ircam/simple-components/sc-button.js';
import '@ircam/simple-components/sc-text.js';
import '@ircam/simple-components/sc-editor.js';
import pluginScriptingFactory from '@soundworks/plugin-scripting/client';

/*
TODO: 
- default value of toggle mute according to state
- logarithmic control for volume ?
*/

class ControllerExperience extends AbstractExperience {
  constructor(client, config, $container, audioContext) {
    super(client);

    this.config = config;
    this.$container = $container;
    this.rafId = null;

    this.audioContext = audioContext;

    this.midiSetupActive = false;
    this.selectedControl = null;

    this.noteLogs = [];
    // require plugins if needed
    this.scripting = this.require('scripting');

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    this.scriptState = await this.client.stateManager.attach('script');
    this.score = await this.client.stateManager.attach('score');

    this.busStates = {};
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName.includes("BusControls")){
        const busState = await this.client.stateManager.attach(schemaName, stateId);
        const name = busState.get('name');
        console.log(name);

        this.busStates[name] = busState;

        busState.subscribe(updates => this.render());

        busState.onDetach(() => {
          delete this.busStates[name]
          this.render();
        })

        this.render();
      }
    });
    
    this.score.subscribe(updates => {
      if ('notes' in updates) {
        updates.notes.forEach(note => this.noteLogs.unshift(note));

        while (this.noteLogs.length > 20) {
          this.noteLogs.pop();
        }
      }

      this.render();
    });

    this.render();
    window.addEventListener('resize', () => this.render());

    //Scripting
    this.scriptState.subscribe(async updates => {
      if ('currentScript' in updates) {
        if (updates.currentScript === null) {
          if (this.currentScript) {
            await this.currentScript.detach();
            this.render();
          }
        } else {
          this.updateCurrentScript(updates.currentScript);
        }
      }
    });

    // track script list updates
    this.scripting.observe(() => this.render());

    


    // MIDI bindings
    // @todo - test again
    this.midiControlDict = {};

    const getMIDIMessage = (midiMessage) => {
      const [deviceId, channel, value] = midiMessage.data;
      if (this.midiSetupActive) {
        if (this.selectedControl !== null) {
          this.midiControlDict[channel] = this.selectedControl.id
        }
      }
      else {
        const control = this.midiControlDict[channel];
        if (control) {
          const synthType = control.split('-')[0];
          const key = control.split('-')[1];
          switch (key) {
            case 'mute':
              console.log(value);
              const muteVal = this.busStates[synthType].get('mute');
              if (value === 127) {
                this.busStates[synthType].set({ mute: !muteVal });
              }
              break;
            case 'volume':
              this.busStates[synthType].set({ volume: -60. + value * 60. / 127. });
              break;
            case 'lowPassFreq':
              this.busStates[synthType].set({ lowPassFreq: 20 + value * (20000 - 20) / 127. });
              break;
            case 'highPassFreq':
              this.busStates[synthType].set({ highPassFreq: 20 + value * (20000 - 20) / 127. });
              break;
          }
        }
      }
    }

    const midiAccess = await navigator.requestMIDIAccess();
    const midiInputDevices = midiAccess.inputs.values();

    for (let device of midiInputDevices) {
      device.addEventListener('midimessage', getMIDIMessage);
    }

    const synths = ['global', 'sine', 'am', 'fm'];
    const controls = ['mute', 'volume', 'lowPassFreq', 'highPassFreq'];

    for (const synth of synths) {
      for (const control of controls) {
        const $control = document.body.querySelector(`#${synth}-${control}`);

        if (!$control) {
          continue;
        }

        $control.addEventListener('click', () => {
          if (this.midiSetupActive) {
            this.selectedControl = $control;
          }
        })
      }
    }
  }

  selectScript(scriptName) {
    // we set the script using the globals state to propagate to all connected clients
    this.scriptState.set({ currentScript: scriptName });
  }

  async createScript(scriptName) {
    if (scriptName !== '') {
      const defaultValue = `// script ${scriptName}
function getSynth() {
  return class CustomSynth {
    constructor(audioContext) {
      this.audioContext = audioContext;

      // Array to store all sound sources
      this.sources = [];

      // Create nodes 
      this.output = new GainNode(audioContext); 
      this._osc = new OscillatorNode(audioContext);
      this.sources.push(this._osc);

      // Connect nodes to output
      this._osc.connect(this.output);
    }

    get detuneParam() {
      return this._osc.detune;
    }

    get frequency() {
      return this._osc.frequency.value;
    }

    set frequency(value) {
      const now = this.audioContext.currentTime;
      this._osc.frequency.setTargetAtTime(value, now, 0.01);
    }

    connect(dest) {
      this.output.connect(dest);
    }

    disconnect(dest) {
      this.output.disconnect(dest);
    }

    start(time) {
      this.sources.forEach(src => {src.start(time)});
    }

    stop(time) {
      this.sources.forEach(src => {src.stop(time)});
    }
  }
}`
      // create the script, it will be available to all node
      await this.scripting.create(scriptName, defaultValue);
      this.selectScript(scriptName);
    }
  }

  async deleteScript(scriptName) {
    await this.scripting.delete(scriptName);

    if (this.scriptState.get('currentScript') === scriptName) {
      this.scriptState.set({ currentScript: null });
    }

    this.render();
  }

  setScriptValue(value) {
    if (this.currentScript) {
      this.currentScript.setValue(value);
    }
  }

  async updateCurrentScript(scriptName) {
    if (this.currentScript) {
      await this.currentScript.detach();
    }

    this.currentScript = await this.scripting.attach(scriptName);

    // subscribe to update and re-execete the script
    this.currentScript.subscribe(updates => {
      if (updates.error) {
        const error = updates.error;
        console.log(error);
        // you may display errors on the screen
      }
      else {
        this.render();
      }
    });

    this.currentScript.onDetach(() => {
      this.currentScript = undefined;
      this.render();
    });

    this.render();
  }   

  render() {
    render(html`
      <div style="padding: 20px">
        <div>
          <h1
            style="margin-top: 0; padding-bottom: 20px; border-bottom: 1px solid #787878"
          >
            ${this.score.get('piece')} by ${this.score.get('composer')}
          </h1>

          <!-- MIDI setup -->
          <div
            style="
              position: absolute;
              top: 20px;
              right: 20px;
            "
          >
            <sc-text
              readonly
              value="MIDI setup mode"
            ></sc-text>
            <sc-toggle
              @change="${e => {
                this.midiSetupActive = e.detail.value;
                this.selectedControl = null;
              }}"
            ></sc-toggle>

          </div>
        </div>

        <div style="
          width: 320px;
          padding:10px;
          background-color: #121212;
          float: left;
        ">

          <div>
            <h2>Performance State</h2>

            <div style="margin-bottom: 4px">
              <sc-text
                readonly
                width="264"
                value="concert mode"
              ></sc-text>
              <sc-toggle
                ?active="${this.score.get('concertMode')}"
                @change="${e => this.score.set({ concertMode: e.detail.value })}"
              ></sc-toggle>
            </div>

            ${['welcome', 'test', 'waiting', 'performance', 'end', 'playground'].map(name => {
              let current = this.score.get('state');
              return html`
                <sc-button
                  style="display: block; margin-bottom: 4px"
                  width="300"
                  value="${name}"
                  ?selected="${name === current}"
                  @input="${e => this.score.set({ state: name })}"
                ></sc-button>
              `;
            })}
          </div>

          <!-- dispatch strategies -->
          <div>
            <h2>Dispatch strategies</h2>
            ${this.score.get('dispatchStrategies').map(name => {
              let current = this.score.get('dispatchStrategy');
              return html`
                <sc-button
                  style="display: block; margin-bottom: 4px"
                  width="300"
                  value="${name}"
                  .selected="${name === current}"
                  @input="${e => this.score.set({ dispatchStrategy: name })}"
                ></sc-button>
              `;
            })}
          </div>

          <!-- logs -->
          <div>
            <h2>Notes</h2>
            <div style="
              width: 300px;
              height: 300px;
              background-color: #343434;
              overflow: auto;
              margin-bottom: 4px;
              padding: 2px;
            ">
              <pre>${this.noteLogs.map(note => JSON.stringify(note)).join('\n\n')}</pre>
            </div>
            <sc-button
              value="clear"
              width="300"
              @input="${e => { this.noteLogs.length = 0; this.render(); }}"
            ></sc-button>
          </div>
        </div>

        <!-- bus controls -->
        <div style="
          width: 500px;
          /*background-color: red;*/
          float: left;
          margin-left: 20px;
        ">
          ${Object.keys(this.busStates).map(name => {
            const state = this.busStates[name];
            // state may not be ready yet
            if (!state) {
              return nothing;
            }

            const config = name === 'master' ?
              this.score.get('masterBusConfig') :
              this.score.get('synthBusConfig');

            return html`
              <div style="
                background-color: #121212;
                margin-bottom: 10px;
                padding: 10px;
              ">
                <h2 style="margin: 0 0 10px 0">${name} bus</h2>

                <div style="margin-bottom: 4px">
                  <sc-text
                    readonly
                    value="mute"
                  ></sc-text>
                  <sc-toggle
                    id="${name}-mute"
                    .active="${state.get('mute')}"
                    @change="${e => state.set({ mute: e.detail.value })}"
                  ></sc-toggle>
                </div>
                <div style="margin-bottom: 4px">
                  <sc-text
                    readonly
                    value="volume - dB"
                  ></sc-text>
                  <sc-slider
                    id="${name}-volume"
                    width="400"
                    display-number
                    min="${state.getSchema('volume').min}"
                    max="${state.getSchema('volume').max}"
                    value="${state.get('volume')}"
                    @input="${e => state.set({ volume: e.detail.value })}"
                  ></sc-slider>
                </div>

                ${config.filter ?
                  html`
                    <div style="margin-bottom: 4px">
                      <sc-text
                        readonly
                        value="lowpass - Hz"
                      ></sc-text>
                      <sc-slider
                        id="${name}-lowPassFreq"
                        width="400"
                        display-number
                        min="${state.getSchema('lowPassFreq').min}"
                        max="${state.getSchema('lowPassFreq').max}"
                        value="${state.get('lowPassFreq')}"
                        @input="${e => state.set({ lowPassFreq: e.detail.value })}"
                      ></sc-slider>
                    </div>
                    <div style="margin-bottom: 4px">
                      <sc-text
                        readonly
                        value="highpass - Hz"
                      ></sc-text>
                      <sc-slider
                        id="${name}-highPassFreq"
                        width="400"
                        display-number
                        min="${state.getSchema('highPassFreq').min}"
                        max="${state.getSchema('highPassFreq').max}"
                        value="${state.get('highPassFreq')}"
                        @input="${e => state.set({ highPassFreq: e.detail.value })}"
                      ></sc-slider>
                    </div>
                  ` : nothing
                }
              </div>
            `;
          })}
        </div>

        <!-- scripting -->
        <div style="
          width: 500px;
          height: 90vh;
          /*background-color: red;*/
          float: left;
          margin-left: 20px;
        ">
          <h1 style="padding: 0; margin: 20px 0px">plugin scripting</h1>
          <section style="margin: 8px 0">
            <sc-text
              value="create script (cmd + s):"
              readonly
            ></sc-text>
            <sc-text
              @change="${e => this.createScript(e.detail.value)}"
            ></sc-text>
          </section>
          ${this.scripting.getList().map((scriptName) => {
            return html`
              <section style="margin: 4px 0">
                <sc-button
                  value="${scriptName}"
                  text="select ${scriptName}"
                  @input="${() => this.selectScript(scriptName)}"
                ></sc-button>
                <sc-button
                  value="${scriptName}"
                  text="delete ${scriptName}"
                  @input="${() => this.deleteScript(scriptName)}"
                ></sc-button>
              </section>
            `;
          })}
          <sc-text
            readonly
            width="500"
            value="open the console to see possible syntax errors when editing"
          ></sc-text>
          <sc-editor
            style="display:block"
            width="500"
            height="500"
            .value="${(this.currentScript && this.currentScript.getValue() || '')}"
            @change="${e => this.setScriptValue(e.detail.value)}"
          ></sc-editor>
        </div>  

      </div>

    `, this.$container);
  }
}

export default ControllerExperience;
