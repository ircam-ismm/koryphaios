import { AbstractExperience } from '@soundworks/core/client';
import { render, html } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import '@ircam/simple-components/sc-bang.js';
import '@ircam/simple-components/sc-slider.js';
import '@ircam/simple-components/sc-toggle.js';
import '@ircam/simple-components/sc-editor.js';
import '@ircam/simple-components/sc-button.js';

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

    // require plugins if needed

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    this.score = await this.client.stateManager.attach('score');

    this.masterControls = {};
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName.includes("BusControls")){
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
    window.addEventListener('resize', () => this.render());

    //MIDI
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
              const muteVal = this.masterControls[synthType].get('mute');
              if (value === 127) {
                this.masterControls[synthType].set({ mute: !muteVal });
              }
              break;
            case 'volume':
              this.masterControls[synthType].set({ volume: -60. + value * 60. / 127. });
              break;
            case 'lowPassFreq':
              this.masterControls[synthType].set({ lowPassFreq: 20 + value * (20000 - 20) / 127. });
              break;
            case 'highPassFreq':
              this.masterControls[synthType].set({ highPassFreq: 20 + value * (20000 - 20) / 127. });
              break;
          }
        }
      }
    }

    const midiAccess = await navigator.requestMIDIAccess();
    const midiInputDevices = midiAccess.inputs.values();
    for (let device of midiInputDevices) {      
      device.addEventListener('midimessage', getMIDIMessage);
      // device.onmidimessage = getMIDIMessage;
    } 



    //Rendering
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
          })
        }
      }
    }, 200);
    
    // this.renderGroupControls(document.body.querySelector('#gp1-controls'));
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
    if (activated) {this.selectedControl = null}
  }

  renderGroupControls(synthType, container) {
    this.rafId = window.requestAnimationFrame(() => {
      render(html`
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
          @change="${e => this.masterControls[synthType].set({ mute: e.detail.value })}"
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
          @input="${e => this.masterControls[synthType].set({ volume: e.detail.value })}"
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
          @input="${e => this.masterControls[synthType].set({ lowPassFreq: e.detail.value })}"
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
          @input="${e => this.masterControls[synthType].set({ highPassFreq: e.detail.value })}"
          display-number
        ></sc-slider>
      `, container);
    });
  }



  render() {
    // debounce with requestAnimationFrame
    window.cancelAnimationFrame(this.rafId);

    this.rafId = window.requestAnimationFrame(() => {
      render(html`
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

export default ControllerExperience;
