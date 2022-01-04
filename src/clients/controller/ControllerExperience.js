import { AbstractExperience } from '@soundworks/core/client';
import { render, html } from 'lit-html';
import renderInitializationScreens from '@soundworks/template-helpers/client/render-initialization-screens.js';
import '@ircam/simple-components/sc-bang.js';
import '@ircam/simple-components/sc-slider.js';
import '@ircam/simple-components/sc-toggle.js';
import '@ircam/simple-components/sc-editor.js';
import Note from '../../utils/note';
import masterControls from '../../server/schemas/masterControls';


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


    // require plugins if needed

    renderInitializationScreens(client, config, $container);
  }

  async start() {
    super.start();

    this.score = await this.client.stateManager.attach('score');

    this.groupsMasterControls = new Array();
    this.client.stateManager.observe(async (schemaName, stateId, nodeId) => {
      if (schemaName == "masterControls"){
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
    setTimeout(() => {this.render()}, 100);
    setTimeout(() => { 
      for (let i = 1; i <= 6 ; i++) {
        const $gpControls = document.body.querySelector('#gp'+`${i}`+'-controls');
        this.renderGroupControls(i, $gpControls); 
      }
    }, 200); // no workaround ??
    
    // this.renderGroupControls(document.body.querySelector('#gp1-controls'));
  }

  renderGroupControls(group, container) {
    this.rafId = window.requestAnimationFrame(() => {
      render(html`
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
            @input="${e => this.groupsMasterControls[group].set({mute: e.detail.value})}"
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
            @input="${e => this.groupsMasterControls[group].set({ volume: e.detail.value })}"
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
            @input="${e => this.groupsMasterControls[group].set({ lowPassFreq: e.detail.value })}"
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
            @input="${e => this.groupsMasterControls[group].set({ highPassFreq: e.detail.value })}"
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
            @input="${e => this.groupsMasterControls[0].set({ mute: e.detail.value })}"
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
            @input="${e => this.groupsMasterControls[0].set({ volume: e.detail.value })}"
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
            @input="${e => this.groupsMasterControls[0].set({ lowPassFreq: e.detail.value })}"
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
            @input="${e => this.groupsMasterControls[0].set({ highPassFreq: e.detail.value })}"
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

export default ControllerExperience;
