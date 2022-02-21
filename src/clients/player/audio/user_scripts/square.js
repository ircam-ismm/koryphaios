// script square
      function getSynth() {
        return class CustomSynth {
          constructor(audioContext) {
            this.audioContext = audioContext;

            const buffer = audioContext.createBuffer(2, audioContext.sampleRate * 5, audioContext.sampleRate);
            for (var channel = 0; channel < buffer.numberOfChannels; channel++) {
              // This gives us the actual ArrayBuffer that contains the data
              var nowBuffering = buffer.getChannelData(channel);
              for (var i = 0; i < buffer.length; i++) {
              // Math.random() is in [0; 1.0]
              // audio needs to be in [-1.0; 1.0]
                nowBuffering[i] = Math.random() * 2 - 1;
              }
            }
            
            this._noise = audioContext.createBufferSource();
            this._noise.buffer = buffer;
            
            this.filter = new BiquadFilterNode(audioContext);
            this.filter.type = 'bandpass';
            this.filter.frequency.value = 220
            this.filter.Q.value = 100;
              
            this.modOsc = audioContext.createOscillator();
            this.modOsc.frequency.value = 5;
            
            this.modGain = audioContext.createGain();
            this.modGain.gain.value = 10;
          
            
            
            this._osc = audioContext.createOscillator();
            this._osc.type = 'sine';
            
            this.ws = new WaveShaperNode(audioContext);
            this.ws.curve = this.makeDistortionCurve(100);
            this.ws.oversample = '2x';
            
            this.delay = new DelayNode(audioContext);
            this.delay.delayTime.value = 4.0;
            
            //this._osc.connect(this.ws);
            this._noise.connect(this.filter);
            this.filter.connect(this.ws);
            this.ws.connect(this.delay);
            
            this.modOsc.connect(this.modGain);
            this.modGain.connect(this.filter.frequency);
          }

          get detuneParam() {
            return this.filter.detune;
          }

          get frequency() {
            return this._osc.frequency.value;
          }

          set frequency(value) {
            const now = this.audioContext.currentTime;
            this.filter.frequency.setTargetAtTime(value, now, 0.01);
          }

          connect(dest) {
            this.delay.connect(dest);
          }

          disconnect(dest) {
            this.delay.disconnect(dest);
          }

          start(time) {
            this._osc.start(time);
            this._noise.start(time);
            this.modOsc.start(time);
            this.filter.Q.setValueAtTime(100, time+1);
            this.filter.Q.linearRampToValueAtTime(50, time+2);
            this.filter.Q.linearRampToValueAtTime(1, time+5);
          }

          stop(time) {
            this._osc.stop(time);
            this._noise.stop(time);
          }
          
          makeDistortionCurve(amount) {
            var k = typeof amount === 'number' ? amount : 50,
            n_samples = 44100,
            curve = new Float32Array(n_samples),
            deg = Math.PI / 180,
            i = 0,
            x;
            for ( ; i < n_samples; ++i ) {
              x = i * 2 / n_samples - 1;
              curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
            }
            return curve;
            };
          }
      }