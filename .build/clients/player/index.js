"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _client = require("@soundworks/core/client");

var _initQos = _interopRequireDefault(require("@soundworks/template-helpers/client/init-qos.js"));

var _PlayerExperience = _interopRequireDefault(require("./PlayerExperience.js"));

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
    (0, _initQos.default)(client);
    const experience = new _PlayerExperience.default(client, config, $container, audioContext); // store exprience for emulated clients

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImF1ZGlvQ29udGV4dCIsImNvbmZpZyIsInNvdW5kd29ya3NDb25maWciLCJleHBlcmllbmNlcyIsIlNldCIsImxhdW5jaCIsIiRjb250YWluZXIiLCJpbmRleCIsImNsaWVudCIsIkNsaWVudCIsInBsdWdpbk1hbmFnZXIiLCJyZWdpc3RlciIsInBsdWdpblBsYXRmb3JtRmFjdG9yeSIsImZlYXR1cmVzIiwicGx1Z2luU3luY0ZhY3RvcnkiLCJpbml0IiwiZXhwZXJpZW5jZSIsIlBsYXllckV4cGVyaWVuY2UiLCJhZGQiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicXVlcnlTZWxlY3RvciIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwibnVtRW11bGF0ZWRDbGllbnRzIiwicGFyc2VJbnQiLCJnZXQiLCJpIiwiJGRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIiRpbml0UGxhdGZvcm1CdG4iLCJ0ZXh0Q29udGVudCIsImluaXRQbGF0Zm9ybXMiLCJlIiwiZm9yRWFjaCIsInBsYXRmb3JtIiwib25Vc2VyR2VzdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxNQUFNLENBQUNELFlBQVAsSUFBdUJDLE1BQU0sQ0FBQ0Msa0JBQW5EO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLElBQUlILFlBQUosRUFBckI7QUFFQSxNQUFNSSxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksZ0JBQXRCLEMs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O0FBQ0Q7QUFDRixLQUpEO0FBS0FILElBQUFBLGdCQUFnQixDQUFDTyxtQkFBakIsQ0FBcUMsT0FBckMsRUFBOENMLGFBQTlDO0FBQ0FGLElBQUFBLGdCQUFnQixDQUFDbkIsTUFBakI7QUFDRDs7QUFFRG1CLEVBQUFBLGdCQUFnQixDQUFDUSxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkNOLGFBQTNDO0FBRUFyQyxFQUFBQSxVQUFVLENBQUNrQyxXQUFYLENBQXVCQyxnQkFBdkI7QUFDRCxDQTFCRCxNQTBCTztBQUNMcEMsRUFBQUEsTUFBTSxDQUFDQyxVQUFELEVBQWEsQ0FBYixDQUFOO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJ0Bzb3VuZHdvcmtzL2NvcmUvY2xpZW50JztcbmltcG9ydCBpbml0UW9TIGZyb20gJ0Bzb3VuZHdvcmtzL3RlbXBsYXRlLWhlbHBlcnMvY2xpZW50L2luaXQtcW9zLmpzJztcblxuaW1wb3J0IFBsYXllckV4cGVyaWVuY2UgZnJvbSAnLi9QbGF5ZXJFeHBlcmllbmNlLmpzJztcblxuaW1wb3J0IHBsdWdpblBsYXRmb3JtRmFjdG9yeSBmcm9tICdAc291bmR3b3Jrcy9wbHVnaW4tcGxhdGZvcm0vY2xpZW50JztcbmltcG9ydCBwbHVnaW5TeW5jRmFjdG9yeSBmcm9tICdAc291bmR3b3Jrcy9wbHVnaW4tc3luYy9jbGllbnQnO1xuXG5jb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5jb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbmNvbnN0IGNvbmZpZyA9IHdpbmRvdy5zb3VuZHdvcmtzQ29uZmlnO1xuLy8gc3RvcmUgZXhwZXJpZW5jZXMgb2YgZW11bGF0ZWQgY2xpZW50c1xuY29uc3QgZXhwZXJpZW5jZXMgPSBuZXcgU2V0KCk7XG5cblxuYXN5bmMgZnVuY3Rpb24gbGF1bmNoKCRjb250YWluZXIsIGluZGV4KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHJlZ2lzdGVyIHBsdWdpbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gY2xpZW50LnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIocGx1Z2luTmFtZSwgcGx1Z2luRmFjdG9yeSwgW3BsdWdpbk9wdGlvbnNdLCBbZGVwZW5kZW5jaWVzXSlcblxuICAgIGNsaWVudC5wbHVnaW5NYW5hZ2VyLnJlZ2lzdGVyKCdwbGF0Zm9ybScsIHBsdWdpblBsYXRmb3JtRmFjdG9yeSwge1xuICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgWyd3ZWItYXVkaW8nLCBhdWRpb0NvbnRleHRdLFxuICAgICAgXVxuICAgIH0sIFtdKTtcbiAgICBjbGllbnQucGx1Z2luTWFuYWdlci5yZWdpc3Rlcignc3luYycsIHBsdWdpblN5bmNGYWN0b3J5LCB7fSwgW10pO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBsYXVuY2ggYXBwbGljYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXdhaXQgY2xpZW50LmluaXQoY29uZmlnKTtcbiAgICBpbml0UW9TKGNsaWVudCk7XG5cbiAgICBjb25zdCBleHBlcmllbmNlID0gbmV3IFBsYXllckV4cGVyaWVuY2UoY2xpZW50LCBjb25maWcsICRjb250YWluZXIsIGF1ZGlvQ29udGV4dCk7XG4gICAgLy8gc3RvcmUgZXhwcmllbmNlIGZvciBlbXVsYXRlZCBjbGllbnRzXG4gICAgZXhwZXJpZW5jZXMuYWRkKGV4cGVyaWVuY2UpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgICAvLyBzdGFydCBhbGwgdGhlIHRoaW5nc1xuICAgIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuICAgIGV4cGVyaWVuY2Uuc3RhcnQoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYm9vdHN0cmFwcGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX3NvdW5kd29ya3MtY29udGFpbmVyJyk7XG5jb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuLy8gZW5hYmxlIGluc3RhbmNpYXRpb24gb2YgbXVsdGlwbGUgY2xpZW50cyBpbiB0aGUgc2FtZSBwYWdlIHRvIGZhY2lsaXRhdGVcbi8vIGRldmVsb3BtZW50IGFuZCB0ZXN0aW5nIChiZSBjYXJlZnVsIGluIHByb2R1Y3Rpb24uLi4pXG5jb25zdCBudW1FbXVsYXRlZENsaWVudHMgPSBwYXJzZUludChzZWFyY2hQYXJhbXMuZ2V0KCdlbXVsYXRlJykpIHx8IDE7XG5cbi8vIHNwZWNpYWwgbG9naWMgZm9yIGVtdWxhdGVkIGNsaWVudHMgKDEgY2xpY2sgdG8gcnVsZSB0aGVtIGFsbClcbmlmIChudW1FbXVsYXRlZENsaWVudHMgPiAxKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRW11bGF0ZWRDbGllbnRzOyBpKyspIHtcbiAgICBjb25zdCAkZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGRpdi5jbGFzc0xpc3QuYWRkKCdlbXVsYXRlJyk7XG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkZGl2KTtcblxuICAgIGxhdW5jaCgkZGl2LCBpKTtcbiAgfVxuXG4gIGNvbnN0ICRpbml0UGxhdGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgJGluaXRQbGF0Zm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdpbml0LXBsYXRmb3JtJyk7XG4gICRpbml0UGxhdGZvcm1CdG4udGV4dENvbnRlbnQgPSAncmVzdW1lIGFsbCc7XG5cbiAgZnVuY3Rpb24gaW5pdFBsYXRmb3JtcyhlKSB7XG4gICAgZXhwZXJpZW5jZXMuZm9yRWFjaChleHBlcmllbmNlID0+IHtcbiAgICAgIGlmIChleHBlcmllbmNlLnBsYXRmb3JtKSB7XG4gICAgICAgIGV4cGVyaWVuY2UucGxhdGZvcm0ub25Vc2VyR2VzdHVyZShlKVxuICAgICAgfVxuICAgIH0pO1xuICAgICRpbml0UGxhdGZvcm1CdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0UGxhdGZvcm1zKTtcbiAgICAkaW5pdFBsYXRmb3JtQnRuLnJlbW92ZSgpO1xuICB9XG5cbiAgJGluaXRQbGF0Zm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRQbGF0Zm9ybXMpO1xuXG4gICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGluaXRQbGF0Zm9ybUJ0bik7XG59IGVsc2Uge1xuICBsYXVuY2goJGNvbnRhaW5lciwgMCk7XG59XG4iXX0=