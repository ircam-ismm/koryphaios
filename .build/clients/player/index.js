"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _client = require("@soundworks/core/client");

var _initQos = _interopRequireDefault(require("@soundworks/template-helpers/client/init-qos.js"));

var _PlayerExperience = _interopRequireDefault(require("./PlayerExperience.js"));

var _client2 = _interopRequireDefault(require("@soundworks/plugin-platform/client"));

var _client3 = _interopRequireDefault(require("@soundworks/plugin-sync/client"));

var _client4 = _interopRequireDefault(require("@soundworks/plugin-checkin/client"));

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
    client.pluginManager.register('sync', _client3.default, {}, []);
    client.pluginManager.register('checkin', _client4.default, {}, []); // -------------------------------------------------------------------
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImF1ZGlvQ29udGV4dCIsImNvbmZpZyIsInNvdW5kd29ya3NDb25maWciLCJleHBlcmllbmNlcyIsIlNldCIsImxhdW5jaCIsIiRjb250YWluZXIiLCJpbmRleCIsImNsaWVudCIsIkNsaWVudCIsInBsdWdpbk1hbmFnZXIiLCJyZWdpc3RlciIsInBsdWdpblBsYXRmb3JtRmFjdG9yeSIsImZlYXR1cmVzIiwicGx1Z2luU3luY0ZhY3RvcnkiLCJwbHVnaW5DaGVja2luRmFjdG9yeSIsImluaXQiLCJleHBlcmllbmNlIiwiUGxheWVyRXhwZXJpZW5jZSIsImFkZCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0YXJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJudW1FbXVsYXRlZENsaWVudHMiLCJwYXJzZUludCIsImdldCIsImkiLCIkZGl2IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiJGluaXRQbGF0Zm9ybUJ0biIsInRleHRDb250ZW50IiwiaW5pdFBsYXRmb3JtcyIsImUiLCJmb3JFYWNoIiwicGxhdGZvcm0iLCJvblVzZXJHZXN0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0QsWUFBUCxJQUF1QkMsTUFBTSxDQUFDQyxrQkFBbkQ7QUFDQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUgsWUFBSixFQUFyQjtBQUVBLE1BQU1JLE1B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LENBQUMyQyxPQUFaLENBQW9CN0IsVUFBVSxJQUFJO0FBQ2hDLFVBQUlBLFVBQVUsQ0FBQzhCLFFBQWYsRUFBeUI7QUFDdkI5QixRQUFBQSxVQUFVLENBQUM4QixRQUFYLENBQW9CQyxhQUFwQixDQUFrQ0gsQ0FBbEM7QUFDRDtBQUNGLEtBSkQ7QUFLQUgsSUFBQUEsZ0JBQWdCLENBQUNPLG1CQUFqQixDQUFxQyxPQUFyQyxFQUE4Q0wsYUFBOUM7QUFDQUYsSUFBQUEsZ0JBQWdCLENBQUNuQixNQUFqQjtBQUNEOztBQUVEbUIsRUFBQUEsZ0JBQWdCLENBQUNRLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQ04sYUFBM0M7QUFFQXRDLEVBQUFBLFVBQVUsQ0FBQ21DLFdBQVgsQ0FBdUJDLGdCQUF2QjtBQUNELENBMUJELE1BMEJPO0FBQ0xyQyxFQUFBQSxNQUFNLENBQUNDLFVBQUQsRUFBYSxDQUFiLENBQU47QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnQHNvdW5kd29ya3MvY29yZS9jbGllbnQnO1xuaW1wb3J0IGluaXRRb1MgZnJvbSAnQHNvdW5kd29ya3MvdGVtcGxhdGUtaGVscGVycy9jbGllbnQvaW5pdC1xb3MuanMnO1xuXG5pbXBvcnQgUGxheWVyRXhwZXJpZW5jZSBmcm9tICcuL1BsYXllckV4cGVyaWVuY2UuanMnO1xuXG5pbXBvcnQgcGx1Z2luUGxhdGZvcm1GYWN0b3J5IGZyb20gJ0Bzb3VuZHdvcmtzL3BsdWdpbi1wbGF0Zm9ybS9jbGllbnQnO1xuaW1wb3J0IHBsdWdpblN5bmNGYWN0b3J5IGZyb20gJ0Bzb3VuZHdvcmtzL3BsdWdpbi1zeW5jL2NsaWVudCc7XG5pbXBvcnQgcGx1Z2luQ2hlY2tpbkZhY3RvcnkgZnJvbSAnQHNvdW5kd29ya3MvcGx1Z2luLWNoZWNraW4vY2xpZW50JztcblxuY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG5jb25zdCBjb25maWcgPSB3aW5kb3cuc291bmR3b3Jrc0NvbmZpZztcbi8vIHN0b3JlIGV4cGVyaWVuY2VzIG9mIGVtdWxhdGVkIGNsaWVudHNcbmNvbnN0IGV4cGVyaWVuY2VzID0gbmV3IFNldCgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaCgkY29udGFpbmVyLCBpbmRleCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyByZWdpc3RlciBwbHVnaW5zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGNsaWVudC5wbHVnaW5NYW5hZ2VyLnJlZ2lzdGVyKHBsdWdpbk5hbWUsIHBsdWdpbkZhY3RvcnksIFtwbHVnaW5PcHRpb25zXSwgW2RlcGVuZGVuY2llc10pXG5cbiAgICBjbGllbnQucGx1Z2luTWFuYWdlci5yZWdpc3RlcigncGxhdGZvcm0nLCBwbHVnaW5QbGF0Zm9ybUZhY3RvcnksIHtcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgIFsnd2ViLWF1ZGlvJywgYXVkaW9Db250ZXh0XSxcbiAgICAgIF1cbiAgICB9LCBbXSk7XG4gICAgY2xpZW50LnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIoJ3N5bmMnLCBwbHVnaW5TeW5jRmFjdG9yeSwge30sIFtdKTtcbiAgICBjbGllbnQucGx1Z2luTWFuYWdlci5yZWdpc3RlcignY2hlY2tpbicsIHBsdWdpbkNoZWNraW5GYWN0b3J5LCB7fSwgW10pO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBsYXVuY2ggYXBwbGljYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXdhaXQgY2xpZW50LmluaXQoY29uZmlnKTtcbiAgICBpbml0UW9TKGNsaWVudCk7XG5cbiAgICBjb25zdCBleHBlcmllbmNlID0gbmV3IFBsYXllckV4cGVyaWVuY2UoY2xpZW50LCBjb25maWcsICRjb250YWluZXIsIGF1ZGlvQ29udGV4dCk7XG4gICAgLy8gc3RvcmUgZXhwcmllbmNlIGZvciBlbXVsYXRlZCBjbGllbnRzXG4gICAgZXhwZXJpZW5jZXMuYWRkKGV4cGVyaWVuY2UpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgICAvLyBzdGFydCBhbGwgdGhlIHRoaW5nc1xuICAgIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuICAgIGV4cGVyaWVuY2Uuc3RhcnQoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYm9vdHN0cmFwcGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX3NvdW5kd29ya3MtY29udGFpbmVyJyk7XG5jb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuLy8gZW5hYmxlIGluc3RhbmNpYXRpb24gb2YgbXVsdGlwbGUgY2xpZW50cyBpbiB0aGUgc2FtZSBwYWdlIHRvIGZhY2lsaXRhdGVcbi8vIGRldmVsb3BtZW50IGFuZCB0ZXN0aW5nIChiZSBjYXJlZnVsIGluIHByb2R1Y3Rpb24uLi4pXG5jb25zdCBudW1FbXVsYXRlZENsaWVudHMgPSBwYXJzZUludChzZWFyY2hQYXJhbXMuZ2V0KCdlbXVsYXRlJykpIHx8IDE7XG5cbi8vIHNwZWNpYWwgbG9naWMgZm9yIGVtdWxhdGVkIGNsaWVudHMgKDEgY2xpY2sgdG8gcnVsZSB0aGVtIGFsbClcbmlmIChudW1FbXVsYXRlZENsaWVudHMgPiAxKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRW11bGF0ZWRDbGllbnRzOyBpKyspIHtcbiAgICBjb25zdCAkZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGRpdi5jbGFzc0xpc3QuYWRkKCdlbXVsYXRlJyk7XG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkZGl2KTtcblxuICAgIGxhdW5jaCgkZGl2LCBpKTtcbiAgfVxuXG4gIGNvbnN0ICRpbml0UGxhdGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgJGluaXRQbGF0Zm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdpbml0LXBsYXRmb3JtJyk7XG4gICRpbml0UGxhdGZvcm1CdG4udGV4dENvbnRlbnQgPSAncmVzdW1lIGFsbCc7XG5cbiAgZnVuY3Rpb24gaW5pdFBsYXRmb3JtcyhlKSB7XG4gICAgZXhwZXJpZW5jZXMuZm9yRWFjaChleHBlcmllbmNlID0+IHtcbiAgICAgIGlmIChleHBlcmllbmNlLnBsYXRmb3JtKSB7XG4gICAgICAgIGV4cGVyaWVuY2UucGxhdGZvcm0ub25Vc2VyR2VzdHVyZShlKVxuICAgICAgfVxuICAgIH0pO1xuICAgICRpbml0UGxhdGZvcm1CdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0UGxhdGZvcm1zKTtcbiAgICAkaW5pdFBsYXRmb3JtQnRuLnJlbW92ZSgpO1xuICB9XG5cbiAgJGluaXRQbGF0Zm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRQbGF0Zm9ybXMpO1xuXG4gICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGluaXRQbGF0Zm9ybUJ0bik7XG59IGVsc2Uge1xuICBsYXVuY2goJGNvbnRhaW5lciwgMCk7XG59XG4iXX0=