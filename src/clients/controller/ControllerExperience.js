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
    this.synthScripting = this.require('synth-scripting');
    this.dispatchScripting = this.require('dispatch-scripting');

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    this.synthScriptState = await this.client.stateManager.attach('synth-script');
    this.dispatchScriptState = await this.client.stateManager.attach('dispatch-script');
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
    this.synthScriptState.subscribe(async updates => {
      if ('currentScript' in updates) {
        if (updates.currentScript === null) {
          if (this.currentSynthScript) {
            await this.currentSynthScript.detach();
            this.render();
          }
        } else {
          this.updateCurrentSynthScript(updates.currentScript);
        }
      }
    });

    this.dispatchScriptState.subscribe(async updates => {
      if ('currentScript' in updates) {
        if (updates.currentScript === null) {
          if (this.currentDispatchScript) {
            await this.currentDispatchScript.detach();
            this.render();
          }
        } else {
          this.updateCurrentDispatchScript(updates.currentScript);
        }
      }
    });

    // track script list updates
    this.synthScripting.observe(() => this.render());
    this.dispatchScripting.observe(() => this.render());


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

    const synths = ['global', 'osc', 'am', 'fm', 'buffer'];
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

  selectSynthScript(scriptName) {
    // we set the script using the globals state to propagate to all connected clients
    this.synthScriptState.set({ currentScript: scriptName });
  }

  async createSynthScript(scriptName) {
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
        }
      `
      // create the script, it will be available to all node
      await this.synthScripting.create(scriptName, defaultValue);

      this.selectSynthScript(scriptName);
    }
  }

  async deleteSynthScript(scriptName) {
    await this.synthScripting.delete(scriptName);

    if (this.synthScriptState.get('currentScript') === scriptName) {
      this.synthScriptState.set({ currentScript: null });
    }

    this.render();
  }

  setSynthScriptValue(value) {
    if (this.currentSynthScript) {
      this.currentSynthScript.setValue(value);
    }
  }

  async updateCurrentSynthScript(scriptName) {
    if (this.currentSynthScript) {
      await this.currentSynthScript.detach();
    }

    this.currentSynthScript = await this.synthScripting.attach(scriptName);

    // subscribe to update and re-execete the script
    this.currentSynthScript.subscribe(updates => {
      if (updates.error) {
        const error = updates.error;
        console.log(error);
        // you may display errors on the screen
      }
      else {
        this.render();
      }
    });

    this.currentSynthScript.onDetach(() => {
      this.currentSynthScript = undefined;
      this.render();
    });

    this.render();
  }   



  selectDispatchScript(scriptName) {
    // we set the script using the globals state to propagate to all connected clients
    this.dispatchScriptState.set({ currentScript: scriptName });
  }

  async createDispatchScript(scriptName) {
    if (scriptName !== '') {
      const defaultValue = `// script ${scriptName}
function getDispatchStrategy() {
  return (players, notes, syncTime) => {
    // Your code here
  }
}
      `
      // create the script, it will be available to all node
      await this.dispatchScripting.create(scriptName, defaultValue);
      this.selectDispatchScript(scriptName);
    }
  }

  async deleteDispatchScript(scriptName) {
    await this.dispatchScripting.delete(scriptName);

    if (this.dispatchScriptState.get('currentScript') === scriptName) {
      this.dispatchScriptState.set({ currentScript: null });
    }

    this.render();
  }

  setDispatchScriptValue(value) {
    if (this.currentDispatchScript) {
      this.currentDispatchScript.setValue(value);
    }
  }

  async updateCurrentDispatchScript(scriptName) {
    if (this.currentDispatchScript) {
      await this.currentDispatchScript.detach();
    }

    this.currentDispatchScript = await this.dispatchScripting.attach(scriptName);

    // subscribe to update and re-execete the script
    this.currentDispatchScript.subscribe(updates => {
      if (updates.error) {
        const error = updates.error;
        console.log(error);
        // you may display errors on the screen
      }
      else {
        this.render();
      }
    });

    this.currentDispatchScript.onDetach(() => {
      this.currentDispatchScript = undefined;
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
            <p>Connected players: ${this.score.get('connectedPlayers')}</p>  
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

          <!-- default synth -->
          <div>
            <h2>Default synth</h2>
            ${this.score.get('availableSynths').map(name => {
              let current = this.score.get('defaultSynth');
              return html`
                <sc-button
                  style="display: block; margin-bottom: 4px"
                  width="300"
                  value="${name}"
                  .selected="${name === current}"
                  @input="${e => this.score.set({ defaultSynth: name })}"
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

          <!-- dispatch strategies -->
          <div>
            <h2>Time synchronization offset</h2>
            <p>Time added to synchronized playing time to provide enough time to the process of dispatching notes. Set higher for a larger number of connected clients.</p>
            <sc-number
              style="display: block; margin-bottom: 4px;"
              value="${this.score.get('offsetSyncTime')}"
              @change="${e => this.score.set({ offsetSyncTime: e.detail.value })}"
            ></sc-number>
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

          <h2 style="padding: 0; margin: 20px 0px">synthesizers</h2>

          <section style="margin: 8px 0">
            <sc-text
              value="create script (cmd + s):"
              readonly
            ></sc-text>
            <sc-text
              @change="${e => this.createSynthScript(e.detail.value)}"
            ></sc-text>
          </section>
          ${this.synthScripting.getList().map((scriptName) => {
            return html`
              <section style="margin: 4px 0">
                <sc-button
                  value="${scriptName}"
                  text="select ${scriptName}"
                  @input="${() => this.selectSynthScript(scriptName)}"
                ></sc-button>
                <sc-button
                  value="${scriptName}"
                  text="delete ${scriptName}"
                  @input="${() => this.deleteSynthScript(scriptName)}"
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
            .value="${(this.currentSynthScript && this.currentSynthScript.getValue() || '')}"
            @change="${e => this.setSynthScriptValue(e.detail.value)}"
          ></sc-editor>



          <h2 style="padding: 0; margin: 20px 0px">dispatch strategies</h2>

          <section style="margin: 8px 0">
            <sc-text
              value="create script (cmd + s):"
              readonly
            ></sc-text>
            <sc-text
              @change="${e => this.createDispatchScript(e.detail.value)}"
            ></sc-text>
          </section>
          ${this.dispatchScripting.getList().map((scriptName) => {
            return html`
              <section style="margin: 4px 0">
                <sc-button
                  value="${scriptName}"
                  text="select ${scriptName}"
                  @input="${() => this.selectDispatchScript(scriptName)}"
                ></sc-button>
                <sc-button
                  value="${scriptName}"
                  text="delete ${scriptName}"
                  @input="${() => this.deleteDispatchScript(scriptName)}"
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
            height="300"
            .value="${(this.currentDispatchScript && this.currentDispatchScript.getValue() || '')}"
            @change="${e => this.setDispatchScriptValue(e.detail.value)}"
          ></sc-editor>

        </div>  


          

      </div>

    `, this.$container);
  }
}

export default ControllerExperience;
