"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* 
- mieux ecrire param par defaut ?
- check si c'est la meme implémentation que dans la v1
*/
class AmSynth {
  constructor(audioContext) {
    this.audioContext = audioContext; //User-set parameters

    this.userParams = {
      carrFreq: {
        type: 'number',
        default: 220.0,
        value: 220.0
      },
      carrType: {
        type: 'string',
        default: 'sine',
        value: 'sine'
      },
      modFreq: {
        type: 'number',
        default: 1.0,
        value: 1.0
      },
      modType: {
        type: 'string',
        default: 'sine',
        value: 'sine'
      },
      modDepth: {
        type: 'number',
        min: 0.0,
        max: 1.0,
        default: 0.0,
        value: 0.0
      }
    }; //Creating nodes

    this._carrier = this.audioContext.createOscillator();
    this._carrier.frequency.value = this.userParams.carrFreq.default;
    this._carrier.type = this.userParams.carrType.default;
    this._modulator = this.audioContext.createOscillator();
    this._modulator.frequency.value = this.userParams.modFreq.default;
    this._modulator.type = this.userParams.modType.default;
    this._depth = this.audioContext.createGain();
    this._depth.gain.value = this.userParams.modDepth.default;
    this._offset = this.audioContext.createConstantSource();
    this._offset.offset.value = 1 - this.userParams.modDepth.default;
    this._scale = this.audioContext.createGain();
    this._scale.gain.value = 0.5;
    this._gain = this.audioContext.createGain();
    this._output = this.audioContext.createGain();
    this.modDepth = 0; //Connections

    this._carrier.connect(this._gain);

    this._gain.connect(this._output);

    this._modulator.connect(this._depth);

    this._depth.connect(this._scale);

    this._offset.connect(this._scale);

    this._scale.connect(this._gain.gain); //getters
    // Object.keys(this.userParams).forEach(key => {
    //   Object.defineProperty(this, key, {
    //     get() {
    //       return this.userParams[key].value;
    //     }
    //   });
    // });

  }

  connect(dest) {
    this._output.connect(dest);
  }

  start(time) {
    this._carrier.start(time);

    this._modulator.start(time);

    this._offset.start(time);
  }

  stop(time) {
    this._carrier.stop(time);

    this._modulator.stop(time);

    this._offset.stop(time);
  }

  set carrFreq(f) {
    this.userParams.carrFreq.value = f;
    const now = this.audioContext.currentTime;

    this._carrier.frequency.setTargetAtTime(f, now, 0.01);
  }

  set carrType(type) {
    this.userParams.carrType.value = type;
    this._carrier.type = type;
  }

  set modFreq(f) {
    this.userParams.modFreq.value = f;
    const now = this.audioContext.currentTime;

    this._modulator.frequency.setTargetAtTime(f, now, 0.01);
  }

  set modType(type) {
    this.userParams.modType.value = type;
    this._modulator.type = type;
  }

  set modDepth(depth) {
    this.userParams.modDepth.value = depth;
    const now = this.audioContext.currentTime;

    this._depth.gain.setTargetAtTime(depth, now, 0.01);

    this._offset.offset.setTargetAtTime(1 - depth, now, 0.01);
  }

}

exports.default = AmSynth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtU3ludGguanMiXSwibmFtZXMiOlsiQW1TeW50aCIsImNvbnN0cnVjdG9yIiwiYXVkaW9Db250ZXh0IiwidXNlclBhcmFtcyIsImNhcnJGcmVxIiwidHlwZSIsImRlZmF1bHQiLCJ2YWx1ZSIsImNhcnJUeXBlIiwibW9kRnJlcSIsIm1vZFR5cGUiLCJtb2REZXB0aCIsIm1pbiIsIm1heCIsIl9jYXJyaWVyIiwiY3JlYXRlT3NjaWxsYXRvciIsImZyZXF1ZW5jeSIsIl9tb2R1bGF0b3IiLCJfZGVwdGgiLCJjcmVhdGVHYWluIiwiZ2FpbiIsIl9vZmZzZXQiLCJjcmVhdGVDb25zdGFudFNvdXJjZSIsIm9mZnNldCIsIl9zY2FsZSIsIl9nYWluIiwiX291dHB1dCIsImNvbm5lY3QiLCJkZXN0Iiwic3RhcnQiLCJ0aW1lIiwic3RvcCIsImYiLCJub3ciLCJjdXJyZW50VGltZSIsInNldFRhcmdldEF0VGltZSIsImRlcHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxNQUFNQSxPQUFOLENBQWE7QUFDMUJDLEVBQUFBLFdBQVcsQ0FBQ0MsWUFBRCxFQUFlO0FBQ3hCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCLENBRHdCLENBR3hCOztBQUNBLFNBQUtDLFVBQUwsR0FBa0I7QUFDaEJDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxJQUFJLEVBQUUsUUFERTtBQUVSQyxRQUFBQSxPQUFPLEVBQUUsS0FGRDtBQUdSQyxRQUFBQSxLQUFLLEVBQUU7QUFIQyxPQURNO0FBTWhCQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkgsUUFBQUEsSUFBSSxFQUFFLFFBREU7QUFFUkMsUUFBQUEsT0FBTyxFQUFFLE1BRkQ7QUFHUkMsUUFBQUEsS0FBSyxFQUFFO0FBSEMsT0FOTTtBQVdoQkUsTUFBQUEsT0FBTyxFQUFFO0FBQ1BKLFFBQUFBLElBQUksRUFBRSxRQURDO0FBRVBDLFFBQUFBLE9BQU8sRUFBRSxHQUZGO0FBR1BDLFFBQUFBLEtB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QUwsQ0FBZ0JaLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNEOztBQUVXLE1BQVJNLFFBQVEsQ0FBQ3lCLEtBQUQsRUFBUTtBQUNsQixTQUFLakMsVUFBTCxDQUFnQlEsUUFBaEIsQ0FBeUJKLEtBQXpCLEdBQWlDNkIsS0FBakM7QUFDQSxVQUFNSCxHQUFHLEdBQUcsS0FBSy9CLFlBQUwsQ0FBa0JnQyxXQUE5Qjs7QUFDQSxTQUFLaEIsTUFBTCxDQUFZRSxJQUFaLENBQWlCZSxlQUFqQixDQUFpQ0MsS0FBakMsRUFBd0NILEdBQXhDLEVBQTZDLElBQTdDOztBQUNBLFNBQUtaLE9BQUwsQ0FBYUUsTUFBYixDQUFvQlksZUFBcEIsQ0FBb0MsSUFBRUMsS0FBdEMsRUFBNkNILEdBQTdDLEVBQWtELElBQWxEO0FBQ0Q7O0FBbkh5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuLSBtaWV1eCBlY3JpcmUgcGFyYW0gcGFyIGRlZmF1dCA/XG4tIGNoZWNrIHNpIGMnZXN0IGxhIG1lbWUgaW1wbMOpbWVudGF0aW9uIHF1ZSBkYW5zIGxhIHYxXG4qL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFtU3ludGh7XG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuXG4gICAgLy9Vc2VyLXNldCBwYXJhbWV0ZXJzXG4gICAgdGhpcy51c2VyUGFyYW1zID0ge1xuICAgICAgY2FyckZyZXE6IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIGRlZmF1bHQ6IDIyMC4wLFxuICAgICAgICB2YWx1ZTogMjIwLjAsXG4gICAgICB9LFxuICAgICAgY2FyclR5cGU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlZmF1bHQ6ICdzaW5lJyxcbiAgICAgICAgdmFsdWU6ICdzaW5lJyxcbiAgICAgIH0sXG4gICAgICBtb2RGcmVxOiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICBkZWZhdWx0OiAxLjAsXG4gICAgICAgIHZhbHVlOiAxLjAsXG4gICAgICB9LFxuICAgICAgbW9kVHlwZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVmYXVsdDogJ3NpbmUnLFxuICAgICAgICB2YWx1ZTogJ3NpbmUnLFxuICAgICAgfSxcbiAgICAgIG1vZERlcHRoOiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICBtaW46IDAuMCxcbiAgICAgICAgbWF4OiAxLjAsXG4gICAgICAgIGRlZmF1bHQ6IDAuMCxcbiAgICAgICAgdmFsdWU6IDAuMCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vQ3JlYXRpbmcgbm9kZXNcbiAgICB0aGlzLl9jYXJyaWVyID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIHRoaXMuX2NhcnJpZXIuZnJlcXVlbmN5LnZhbHVlID0gdGhpcy51c2VyUGFyYW1zLmNhcnJGcmVxLmRlZmF1bHQ7XG4gICAgdGhpcy5fY2Fycmllci50eXBlID0gdGhpcy51c2VyUGFyYW1zLmNhcnJUeXBlLmRlZmF1bHQ7XG4gICAgdGhpcy5fbW9kdWxhdG9yID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIHRoaXMuX21vZHVsYXRvci5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLnVzZXJQYXJhbXMubW9kRnJlcS5kZWZhdWx0O1xuICAgIHRoaXMuX21vZHVsYXRvci50eXBlID0gdGhpcy51c2VyUGFyYW1zLm1vZFR5cGUuZGVmYXVsdDtcbiAgICB0aGlzLl9kZXB0aCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLl9kZXB0aC5nYWluLnZhbHVlID0gdGhpcy51c2VyUGFyYW1zLm1vZERlcHRoLmRlZmF1bHQ7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQ29uc3RhbnRTb3VyY2UoKTtcbiAgICB0aGlzLl9vZmZzZXQub2Zmc2V0LnZhbHVlID0gMSAtIHRoaXMudXNlclBhcmFtcy5tb2REZXB0aC5kZWZhdWx0O1xuICAgIHRoaXMuX3NjYWxlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuX3NjYWxlLmdhaW4udmFsdWUgPSAwLjU7XG4gICAgdGhpcy5fZ2FpbiA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLl9vdXRwdXQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG5cbiAgICB0aGlzLm1vZERlcHRoID0gMDtcblxuICAgIC8vQ29ubmVjdGlvbnNcbiAgICB0aGlzLl9jYXJyaWVyLmNvbm5lY3QodGhpcy5fZ2Fpbik7XG4gICAgdGhpcy5fZ2Fpbi5jb25uZWN0KHRoaXMuX291dHB1dCk7XG4gICAgXG4gICAgdGhpcy5fbW9kdWxhdG9yLmNvbm5lY3QodGhpcy5fZGVwdGgpO1xuICAgIHRoaXMuX2RlcHRoLmNvbm5lY3QodGhpcy5fc2NhbGUpO1xuICAgIHRoaXMuX29mZnNldC5jb25uZWN0KHRoaXMuX3NjYWxlKTtcbiAgICB0aGlzLl9zY2FsZS5jb25uZWN0KHRoaXMuX2dhaW4uZ2Fpbik7XG5cbiAgICAvL2dldHRlcnNcbiAgICAvLyBPYmplY3Qua2V5cyh0aGlzLnVzZXJQYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAvLyAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAvLyAgICAgZ2V0KCkge1xuICAgIC8vICAgICAgIHJldHVybiB0aGlzLnVzZXJQYXJhbXNba2V5XS52YWx1ZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBjb25uZWN0KGRlc3QpIHtcbiAgICB0aGlzLl9vdXRwdXQuY29ubmVjdChkZXN0KTtcbiAgfVxuICBcbiAgc3RhcnQodGltZSkge1xuICAgIHRoaXMuX2NhcnJpZXIuc3RhcnQodGltZSk7XG4gICAgdGhpcy5fbW9kdWxhdG9yLnN0YXJ0KHRpbWUpO1xuICAgIHRoaXMuX29mZnNldC5zdGFydCh0aW1lKTtcbiAgfVxuXG4gIHN0b3AodGltZSkge1xuICAgIHRoaXMuX2NhcnJpZXIuc3RvcCh0aW1lKTtcbiAgICB0aGlzLl9tb2R1bGF0b3Iuc3RvcCh0aW1lKTtcbiAgICB0aGlzLl9vZmZzZXQuc3RvcCh0aW1lKTtcbiAgfVxuXG4gIHNldCBjYXJyRnJlcShmKSB7XG4gICAgdGhpcy51c2VyUGFyYW1zLmNhcnJGcmVxLnZhbHVlID0gZjtcbiAgICBjb25zdCBub3cgPSB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZTtcbiAgICB0aGlzLl9jYXJyaWVyLmZyZXF1ZW5jeS5zZXRUYXJnZXRBdFRpbWUoZiwgbm93LCAwLjAxKTtcbiAgfVxuXG4gIHNldCBjYXJyVHlwZSh0eXBlKSB7XG4gICAgdGhpcy51c2VyUGFyYW1zLmNhcnJUeXBlLnZhbHVlID0gdHlwZTtcbiAgICB0aGlzLl9jYXJyaWVyLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0IG1vZEZyZXEoZikge1xuICAgIHRoaXMudXNlclBhcmFtcy5tb2RGcmVxLnZhbHVlID0gZjtcbiAgICBjb25zdCBub3cgPSB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZTtcbiAgICB0aGlzLl9tb2R1bGF0b3IuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShmLCBub3csIDAuMDEpO1xuICB9XG5cbiAgc2V0IG1vZFR5cGUodHlwZSkge1xuICAgIHRoaXMudXNlclBhcmFtcy5tb2RUeXBlLnZhbHVlID0gdHlwZTtcbiAgICB0aGlzLl9tb2R1bGF0b3IudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXQgbW9kRGVwdGgoZGVwdGgpIHtcbiAgICB0aGlzLnVzZXJQYXJhbXMubW9kRGVwdGgudmFsdWUgPSBkZXB0aDtcbiAgICBjb25zdCBub3cgPSB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZTtcbiAgICB0aGlzLl9kZXB0aC5nYWluLnNldFRhcmdldEF0VGltZShkZXB0aCwgbm93LCAwLjAxKTtcbiAgICB0aGlzLl9vZmZzZXQub2Zmc2V0LnNldFRhcmdldEF0VGltZSgxLWRlcHRoLCBub3csIDAuMDEpO1xuICB9XG5cbn0iXX0=