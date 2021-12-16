"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _client = require("@soundworks/core/client");

var _initQos = _interopRequireDefault(require("@soundworks/template-helpers/client/init-qos.js"));

var _ControllerExperience = _interopRequireDefault(require("./ControllerExperience.js"));

var _client2 = _interopRequireDefault(require("@soundworks/plugin-platform/client"));

var _client3 = _interopRequireDefault(require("@soundworks/plugin-sync/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const config = window.soundworksConfig; // store experiences of emulated clients

const experiences = new Set();

async function launch($container, index) {
  try {
    const client = new _client.Client(); // -------------------------------------------------------------------
    // register plugins
    // -------------------------------------------------------------------
    // client.pluginManager.register(pluginName, pluginFactory, [pluginOptions], [dependencies])

    client.pluginManager.register('platform', _client2.default, {
      features: [['web-audio', audioContext]]
    }, []);
    client.pluginManager.register('sync', _client3.default, {}, []); // -------------------------------------------------------------------
    // launch application
    // -------------------------------------------------------------------

    await client.init(config);
    (0, _initQos.default)(client, {
      visibilityChange: false
    });
    const experience = new _ControllerExperience.default(client, config, $container, audioContext); // store exprience for emulated clients

    experiences.add(experience);
    document.body.classList.remove('loading'); // start all the things

    await client.start();
    experience.start();
    return Promise.resolve();
  } catch (err) {
    console.error(err);
  }
} // -------------------------------------------------------------------
// bootstrapping
// -------------------------------------------------------------------


const $container = document.querySelector('#__soundworks-container');
const searchParams = new URLSearchParams(window.location.search); // enable instanciation of multiple clients in the same page to facilitate
// development and testing (be careful in production...)

const numEmulatedClients = parseInt(searchParams.get('emulate')) || 1; // special logic for emulated clients (1 click to rule them all)

if (numEmulatedClients > 1) {
  for (let i = 0; i < numEmulatedClients; i++) {
    const $div = document.createElement('div');
    $div.classList.add('emulate');
    $container.appendChild($div);
    launch($div, i);
  }

  const $initPlatformBtn = document.createElement('div');
  $initPlatformBtn.classList.add('init-platform');
  $initPlatformBtn.textContent = 'resume all';

  function initPlatforms(e) {
    experiences.forEach(experience => {
      if (experience.platform) {
        experience.platform.onUserGesture(e);
      }
    });
    $initPlatformBtn.removeEventListener('click', initPlatforms);
    $initPlatformBtn.remove();
  }

  $initPlatformBtn.addEventListener('click', initPlatforms);
  $container.appendChild($initPlatformBtn);
} else {
  launch($container, 0);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImF1ZGlvQ29udGV4dCIsImNvbmZpZyIsInNvdW5kd29ya3NDb25maWciLCJleHBlcmllbmNlcyIsIlNldCIsImxhdW5jaCIsIiRjb250YWluZXIiLCJpbmRleCIsImNsaWVudCIsIkNsaWVudCIsInBsdWdpbk1hbmFnZXIiLCJyZWdpc3RlciIsInBsdWdpblBsYXRmb3JtRmFjdG9yeSIsImZlYXR1cmVzIiwicGx1Z2luU3luY0ZhY3RvcnkiLCJpbml0IiwidmlzaWJpbGl0eUNoYW5nZSIsImV4cGVyaWVuY2UiLCJDb250cm9sbGVyRXhwZXJpZW5jZSIsImFkZCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0YXJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJudW1FbXVsYXRlZENsaWVudHMiLCJwYXJzZUludCIsImdldCIsImkiLCIkZGl2IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiJGluaXRQbGF0Zm9ybUJ0biIsInRleHRDb250ZW50IiwiaW5pdFBsYXRmb3JtcyIsImUiLCJmb3JFYWNoIiwicGxhdGZvcm0iLCJvblVzZXJHZXN0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0QsWUFBUCxJQUF1QkMsTUFBTSxDQUFDQyxrQkFBbkQ7QUFDQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUgsWUFBSixFQUFyQjtBQUVBLE1BQU1JLE1BQU0sR0FB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UUFBZixFQUF5QjtBQUN2QjlCLFFBQUFBLFVBQVUsQ0FBQzhCLFFBQVgsQ0FBb0JDLGFBQXBCLENBQWtDSCxDQUFsQztBQUNEO0FBQ0YsS0FKRDtBQUtBSCxJQUFBQSxnQkFBZ0IsQ0FBQ08sbUJBQWpCLENBQXFDLE9BQXJDLEVBQThDTCxhQUE5QztBQUNBRixJQUFBQSxnQkFBZ0IsQ0FBQ25CLE1BQWpCO0FBQ0Q7O0FBRURtQixFQUFBQSxnQkFBZ0IsQ0FBQ1EsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDTixhQUEzQztBQUVBdEMsRUFBQUEsVUFBVSxDQUFDbUMsV0FBWCxDQUF1QkMsZ0JBQXZCO0FBQ0QsQ0ExQkQsTUEwQk87QUFDTHJDLEVBQUFBLE1BQU0sQ0FBQ0MsVUFBRCxFQUFhLENBQWIsQ0FBTjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICdAc291bmR3b3Jrcy9jb3JlL2NsaWVudCc7XG5pbXBvcnQgaW5pdFFvUyBmcm9tICdAc291bmR3b3Jrcy90ZW1wbGF0ZS1oZWxwZXJzL2NsaWVudC9pbml0LXFvcy5qcyc7XG5cbmltcG9ydCBDb250cm9sbGVyRXhwZXJpZW5jZSBmcm9tICcuL0NvbnRyb2xsZXJFeHBlcmllbmNlLmpzJztcblxuaW1wb3J0IHBsdWdpblBsYXRmb3JtRmFjdG9yeSBmcm9tICdAc291bmR3b3Jrcy9wbHVnaW4tcGxhdGZvcm0vY2xpZW50JztcbmltcG9ydCBwbHVnaW5TeW5jRmFjdG9yeSBmcm9tICdAc291bmR3b3Jrcy9wbHVnaW4tc3luYy9jbGllbnQnO1xuXG5jb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5jb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbmNvbnN0IGNvbmZpZyA9IHdpbmRvdy5zb3VuZHdvcmtzQ29uZmlnO1xuLy8gc3RvcmUgZXhwZXJpZW5jZXMgb2YgZW11bGF0ZWQgY2xpZW50c1xuY29uc3QgZXhwZXJpZW5jZXMgPSBuZXcgU2V0KCk7XG5cblxuYXN5bmMgZnVuY3Rpb24gbGF1bmNoKCRjb250YWluZXIsIGluZGV4KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHJlZ2lzdGVyIHBsdWdpbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gY2xpZW50LnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIocGx1Z2luTmFtZSwgcGx1Z2luRmFjdG9yeSwgW3BsdWdpbk9wdGlvbnNdLCBbZGVwZW5kZW5jaWVzXSlcbiAgICBjbGllbnQucGx1Z2luTWFuYWdlci5yZWdpc3RlcigncGxhdGZvcm0nLCBwbHVnaW5QbGF0Zm9ybUZhY3RvcnksIHtcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgIFsnd2ViLWF1ZGlvJywgYXVkaW9Db250ZXh0XSxcbiAgICAgIF1cbiAgICB9LCBbXSk7XG4gICAgY2xpZW50LnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIoJ3N5bmMnLCBwbHVnaW5TeW5jRmFjdG9yeSwge30sIFtdKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBsYXVuY2ggYXBwbGljYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXdhaXQgY2xpZW50LmluaXQoY29uZmlnKTtcbiAgICBpbml0UW9TKGNsaWVudCwgeyB2aXNpYmlsaXR5Q2hhbmdlOiBmYWxzZSB9KTtcblxuICAgIGNvbnN0IGV4cGVyaWVuY2UgPSBuZXcgQ29udHJvbGxlckV4cGVyaWVuY2UoY2xpZW50LCBjb25maWcsICRjb250YWluZXIsIGF1ZGlvQ29udGV4dCk7XG4gICAgLy8gc3RvcmUgZXhwcmllbmNlIGZvciBlbXVsYXRlZCBjbGllbnRzXG4gICAgZXhwZXJpZW5jZXMuYWRkKGV4cGVyaWVuY2UpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgICAvLyBzdGFydCBhbGwgdGhlIHRoaW5nc1xuICAgIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuICAgIGV4cGVyaWVuY2Uuc3RhcnQoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYm9vdHN0cmFwcGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX3NvdW5kd29ya3MtY29udGFpbmVyJyk7XG5jb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuLy8gZW5hYmxlIGluc3RhbmNpYXRpb24gb2YgbXVsdGlwbGUgY2xpZW50cyBpbiB0aGUgc2FtZSBwYWdlIHRvIGZhY2lsaXRhdGVcbi8vIGRldmVsb3BtZW50IGFuZCB0ZXN0aW5nIChiZSBjYXJlZnVsIGluIHByb2R1Y3Rpb24uLi4pXG5jb25zdCBudW1FbXVsYXRlZENsaWVudHMgPSBwYXJzZUludChzZWFyY2hQYXJhbXMuZ2V0KCdlbXVsYXRlJykpIHx8IDE7XG5cbi8vIHNwZWNpYWwgbG9naWMgZm9yIGVtdWxhdGVkIGNsaWVudHMgKDEgY2xpY2sgdG8gcnVsZSB0aGVtIGFsbClcbmlmIChudW1FbXVsYXRlZENsaWVudHMgPiAxKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRW11bGF0ZWRDbGllbnRzOyBpKyspIHtcbiAgICBjb25zdCAkZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGRpdi5jbGFzc0xpc3QuYWRkKCdlbXVsYXRlJyk7XG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkZGl2KTtcblxuICAgIGxhdW5jaCgkZGl2LCBpKTtcbiAgfVxuXG4gIGNvbnN0ICRpbml0UGxhdGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgJGluaXRQbGF0Zm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdpbml0LXBsYXRmb3JtJyk7XG4gICRpbml0UGxhdGZvcm1CdG4udGV4dENvbnRlbnQgPSAncmVzdW1lIGFsbCc7XG5cbiAgZnVuY3Rpb24gaW5pdFBsYXRmb3JtcyhlKSB7XG4gICAgZXhwZXJpZW5jZXMuZm9yRWFjaChleHBlcmllbmNlID0+IHtcbiAgICAgIGlmIChleHBlcmllbmNlLnBsYXRmb3JtKSB7XG4gICAgICAgIGV4cGVyaWVuY2UucGxhdGZvcm0ub25Vc2VyR2VzdHVyZShlKVxuICAgICAgfVxuICAgIH0pO1xuICAgICRpbml0UGxhdGZvcm1CdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0UGxhdGZvcm1zKTtcbiAgICAkaW5pdFBsYXRmb3JtQnRuLnJlbW92ZSgpO1xuICB9XG5cbiAgJGluaXRQbGF0Zm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRQbGF0Zm9ybXMpO1xuXG4gICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGluaXRQbGF0Zm9ybUJ0bik7XG59IGVsc2Uge1xuICBsYXVuY2goJGNvbnRhaW5lciwgMCk7XG59XG4iXX0=