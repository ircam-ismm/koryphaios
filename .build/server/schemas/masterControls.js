"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  synth: {
    type: 'string',
    nullable: true,
    default: null
  },
  mute: {
    type: 'boolean',
    default: false
  },
  volume: {
    type: 'float',
    min: -60.,
    max: 0.,
    default: 0.
  },
  lowPassFreq: {
    type: 'float',
    min: 20,
    max: 20000,
    default: 20000
  },
  highPassFreq: {
    type: 'float',
    min: 20,
    max: 20000,
    default: 20
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3RlckNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbInN5bnRoIiwidHlwZSIsIm51bGxhYmxlIiwiZGVmYXVsdCIsIm11dGUiLCJ2b2x1bWUiLCJtaW4iLCJtYXgiLCJsb3dQYXNzRnJlcSIsImhpZ2hQYXNzRnJlcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQWU7QUFDYkEsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRSxRQUREO0FBRUxDLElBQUFBLFFBQVEsRUFBRSxJQUZMO0FBR0xDLElBQUFBLE9BQU8sRUFBRTtBQUhKLEdBRE07QUFNYkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pILElBQUFBLElBQUksRUFBRSxTQURGO0FBRUpFLElBQUFBLE9BQU8sRUFBRTtBQUZMLEdBTk87QUFVYkUsRUFBQUEsTUFBTSxFQUFFO0FBQ05KLElBQUFBLElBQUksRUFBRSxPQURBO0FBRU5LLElBQUFBLEdBQUcsRUFBRSxDQUFDLEdBRkE7QUFHTkMsSUFBQUEsR0FBRyxFQUFFLEVBSEM7QUFJTkosSUFBQUEsT0FBTyxFQUFFO0FBSkgsR0FWSztBQWdCYkssRUFBQUEsV0FBVyxFQUFFO0FBQ1hQLElBQUFBLElBQUksRUFBRSxPQURLO0FBRVhLLElBQUFBLEdBQUcsRUFBRSxFQUZNO0FBR1hDLElBQUFBLEdBQUcsRUFBRSxLQUhNO0FBSVhKLElBQUFBLE9BQU8sRUFBRTtBQUpFLEdBaEJBO0FBc0JiTSxFQUFBQSxZQUFZLEVBQUU7QUFDWlIsSUFBQUEsSUFBSSxFQUFFLE9BRE07QUFFWkssSUFBQUEsR0FBRyxFQUFFLEVBRk87QUFHWkMsSUFBQUEsR0FBRyxFQUFFLEtBSE87QUFJWkosSUFBQUEsT0FBTyxFQUFFO0FBSkc7QUF0QkQsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc3ludGg6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBudWxsYWJsZTogdHJ1ZSxcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICBtdXRlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB2b2x1bWU6IHtcbiAgICB0eXBlOiAnZmxvYXQnLFxuICAgIG1pbjogLTYwLixcbiAgICBtYXg6IDAuLFxuICAgIGRlZmF1bHQ6IDAuLFxuICB9LFxuICBsb3dQYXNzRnJlcToge1xuICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgbWluOiAyMCxcbiAgICBtYXg6IDIwMDAwLFxuICAgIGRlZmF1bHQ6IDIwMDAwLFxuICB9LFxuICBoaWdoUGFzc0ZyZXE6IHtcbiAgICB0eXBlOiAnZmxvYXQnLFxuICAgIG1pbjogMjAsXG4gICAgbWF4OiAyMDAwMCxcbiAgICBkZWZhdWx0OiAyMCxcbiAgfVxufSJdfQ==