"use strict";

require("source-map-support/register");

var _server = require("@soundworks/core/server");

var _path = _interopRequireDefault(require("path"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

var _templateLiteral = _interopRequireDefault(require("template-literal"));

var _stateManagerOsc = require("@soundworks/state-manager-osc");

var _score = _interopRequireDefault(require("./schemas/score.js"));

var _server2 = _interopRequireDefault(require("@soundworks/plugin-platform/server"));

var _server3 = _interopRequireDefault(require("@soundworks/plugin-sync/server"));

var _PlayerExperience = _interopRequireDefault(require("./PlayerExperience.js"));

var _ControllerExperience = _interopRequireDefault(require("./ControllerExperience.js"));

var _getConfig = _interopRequireDefault(require("../utils/getConfig.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ENV = process.env.ENV || 'default';
const config = (0, _getConfig.default)(ENV);
const server = new _server.Server(); // html template and static files (in most case, this should not be modified)

server.templateEngine = {
  compile: _templateLiteral.default
};
server.templateDirectory = _path.default.join('.build', 'server', 'tmpl');
server.router.use((0, _serveStatic.default)('public'));
server.router.use('build', (0, _serveStatic.default)(_path.default.join('.build', 'public')));
server.router.use('vendors', (0, _serveStatic.default)(_path.default.join('.vendors', 'public')));
console.log(`
--------------------------------------------------------
- launching "${config.app.name}" in "${ENV}" environment
- [pid: ${process.pid}]
--------------------------------------------------------
`); // -------------------------------------------------------------------
// register plugins
// -------------------------------------------------------------------
// server.pluginManager.register(pluginName, pluginFactory, [pluginOptions], [dependencies])

server.pluginManager.register('platform', _server2.default, {}, []);
server.pluginManager.register('sync', _server3.default, {}, []); // -------------------------------------------------------------------
// register schemas
// -------------------------------------------------------------------
// server.stateManager.registerSchema(name, schema);

server.stateManager.registerSchema('score', _score.default);

(async function launch() {
  try {
    await server.init(config, (clientType, config, httpRequest) => {
      return {
        clientType: clientType,
        app: {
          name: config.app.name,
          author: config.app.author
        },
        env: {
          type: config.env.type,
          websockets: config.env.websockets,
          subpath: config.env.subpath
        }
      };
    });
    const score = await server.stateManager.create('score');
    const playerExperience = new _PlayerExperience.default(server, 'player');
    const controllerExperience = new _ControllerExperience.default(server, 'controller'); // start all the things

    await server.start();
    playerExperience.start();
    controllerExperience.start();
    const oscConfig = {
      // these are the defaults
      localAddress: '0.0.0.0',
      localPort: 57121,
      remoteAddress: '127.0.0.1',
      remotePort: 57122
    };
    const oscStateManager = new _stateManagerOsc.StateManagerOsc(server.stateManager, oscConfig);
    await oscStateManager.init();
  } catch (err) {
    console.error(err.stack);
  }
})();

process.on('unhandledRejection', (reason, p) => {
  console.log('> Unhandled Promise Rejection');
  console.log(reason);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkVOViIsInByb2Nlc3MiLCJlbnYiLCJjb25maWciLCJzZXJ2ZXIiLCJTZXJ2ZXIiLCJ0ZW1wbGF0ZUVuZ2luZSIsImNvbXBpbGUiLCJ0ZW1wbGF0ZURpcmVjdG9yeSIsInBhdGgiLCJqb2luIiwicm91dGVyIiwidXNlIiwiY29uc29sZSIsImxvZyIsImFwcCIsIm5hbWUiLCJwaWQiLCJwbHVnaW5NYW5hZ2VyIiwicmVnaXN0ZXIiLCJwbHVnaW5QbGF0Zm9ybUZhY3RvcnkiLCJwbHVnaW5TeW5jRmFjdG9yeSIsInN0YXRlTWFuYWdlciIsInJlZ2lzdGVyU2NoZW1hIiwic2NvcmVTY2hlbWEiLCJsYXVuY2giLCJpbml0IiwiY2xpZW50VHlwZSIsImh0dHBSZXF1ZXN0IiwiYXV0aG9yIiwidHlwZSIsIndlYnNvY2tldHMiLCJzdWJwYXRoIiwic2NvcmUiLCJjcmVhdGUiLCJwbGF5ZXJFeHBlcmllbmNlIiwiUGxheWVyRXhwZXJpZW5jZSIsImNvbnRyb2xsZXJFeHBlcmllbmNlIiwiQ29udHJvbGxlckV4cGVyaWVuY2UiLCJzdGFydCIsIm9zY0NvbmZpZyIsImxvY2FsQWRkcmVzcyIsImxvY2FsUG9ydCIsInJlbW90ZUFkZHJlc3MiLCJyZW1vdGVQb3J0Iiwib3NjU3RhdGVNYW5hZ2VyIiwiU3RhdGVNYW5hZ2VyT3NjIiwiZXJyIiwiZXJyb3IiLCJzdGFjayIsIm9uIiwicmVhc29uIiwicCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUNBLE1BQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosSUFBbUIsU0FBL0I7QUFDQSxNQUFNRyxNQUFNLEdBQUcsd0JBQVVILEdBQVYsQ0FBZjtBQUNBLE1BQU1JLE1BQU0sR0FBRyxJQUFJQyxjQUFKLEVBQWYsQyxDQUVBOztBQUNBRCxNQUFN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Q0FBb0IxQyxNQUFNLENBQUNrQixZQUEzQixFQUF5Q2tCLFNBQXpDLENBQXhCO0FBQ0EsVUFBTUssZUFBZSxDQUFDbkIsSUFBaEIsRUFBTjtBQUVELEdBcENELENBb0NFLE9BQU9xQixHQUFQLEVBQVk7QUFDWmxDLElBQUFBLE9BQU8sQ0FBQ21DLEtBQVIsQ0FBY0QsR0FBRyxDQUFDRSxLQUFsQjtBQUNEO0FBQ0YsQ0F4Q0Q7O0FBMENBaEQsT0FBTyxDQUFDaUQsRUFBUixDQUFXLG9CQUFYLEVBQWlDLENBQUNDLE1BQUQsRUFBU0MsQ0FBVCxLQUFlO0FBQzlDdkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7QUFDQUQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlxQyxNQUFaO0FBQ0QsQ0FIRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ0Bzb3VuZHdvcmtzL2NvcmUvc2VydmVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHNlcnZlU3RhdGljIGZyb20gJ3NlcnZlLXN0YXRpYyc7XG5pbXBvcnQgY29tcGlsZSBmcm9tICd0ZW1wbGF0ZS1saXRlcmFsJztcblxuaW1wb3J0IHsgU3RhdGVNYW5hZ2VyT3NjIH0gZnJvbSAnQHNvdW5kd29ya3Mvc3RhdGUtbWFuYWdlci1vc2MnO1xuXG5pbXBvcnQgc2NvcmVTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL3Njb3JlLmpzJztcblxuaW1wb3J0IHBsdWdpblBsYXRmb3JtRmFjdG9yeSBmcm9tICdAc291bmR3b3Jrcy9wbHVnaW4tcGxhdGZvcm0vc2VydmVyJztcbmltcG9ydCBwbHVnaW5TeW5jRmFjdG9yeSBmcm9tICdAc291bmR3b3Jrcy9wbHVnaW4tc3luYy9zZXJ2ZXInO1xuXG5pbXBvcnQgUGxheWVyRXhwZXJpZW5jZSBmcm9tICcuL1BsYXllckV4cGVyaWVuY2UuanMnO1xuaW1wb3J0IENvbnRyb2xsZXJFeHBlcmllbmNlIGZyb20gJy4vQ29udHJvbGxlckV4cGVyaWVuY2UuanMnO1xuXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4uL3V0aWxzL2dldENvbmZpZy5qcyc7XG5jb25zdCBFTlYgPSBwcm9jZXNzLmVudi5FTlYgfHwgJ2RlZmF1bHQnO1xuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKEVOVik7XG5jb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKCk7XG5cbi8vIGh0bWwgdGVtcGxhdGUgYW5kIHN0YXRpYyBmaWxlcyAoaW4gbW9zdCBjYXNlLCB0aGlzIHNob3VsZCBub3QgYmUgbW9kaWZpZWQpXG5zZXJ2ZXIudGVtcGxhdGVFbmdpbmUgPSB7IGNvbXBpbGUgfTtcbnNlcnZlci50ZW1wbGF0ZURpcmVjdG9yeSA9IHBhdGguam9pbignLmJ1aWxkJywgJ3NlcnZlcicsICd0bXBsJyk7XG5zZXJ2ZXIucm91dGVyLnVzZShzZXJ2ZVN0YXRpYygncHVibGljJykpO1xuc2VydmVyLnJvdXRlci51c2UoJ2J1aWxkJywgc2VydmVTdGF0aWMocGF0aC5qb2luKCcuYnVpbGQnLCAncHVibGljJykpKTtcbnNlcnZlci5yb3V0ZXIudXNlKCd2ZW5kb3JzJywgc2VydmVTdGF0aWMocGF0aC5qb2luKCcudmVuZG9ycycsICdwdWJsaWMnKSkpO1xuXG5jb25zb2xlLmxvZyhgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLSBsYXVuY2hpbmcgXCIke2NvbmZpZy5hcHAubmFtZX1cIiBpbiBcIiR7RU5WfVwiIGVudmlyb25tZW50XG4tIFtwaWQ6ICR7cHJvY2Vzcy5waWR9XVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyByZWdpc3RlciBwbHVnaW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXJ2ZXIucGx1Z2luTWFuYWdlci5yZWdpc3RlcihwbHVnaW5OYW1lLCBwbHVnaW5GYWN0b3J5LCBbcGx1Z2luT3B0aW9uc10sIFtkZXBlbmRlbmNpZXNdKVxuc2VydmVyLnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIoJ3BsYXRmb3JtJywgcGx1Z2luUGxhdGZvcm1GYWN0b3J5LCB7fSwgW10pO1xuc2VydmVyLnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIoJ3N5bmMnLCBwbHVnaW5TeW5jRmFjdG9yeSwge30sIFtdKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVnaXN0ZXIgc2NoZW1hc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYShuYW1lLCBzY2hlbWEpO1xuc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYSgnc2NvcmUnLCBzY29yZVNjaGVtYSk7XG5cblxuKGFzeW5jIGZ1bmN0aW9uIGxhdW5jaCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzZXJ2ZXIuaW5pdChjb25maWcsIChjbGllbnRUeXBlLCBjb25maWcsIGh0dHBSZXF1ZXN0KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnRUeXBlOiBjbGllbnRUeXBlLFxuICAgICAgICBhcHA6IHtcbiAgICAgICAgICBuYW1lOiBjb25maWcuYXBwLm5hbWUsXG4gICAgICAgICAgYXV0aG9yOiBjb25maWcuYXBwLmF1dGhvcixcbiAgICAgICAgfSxcbiAgICAgICAgZW52OiB7XG4gICAgICAgICAgdHlwZTogY29uZmlnLmVudi50eXBlLFxuICAgICAgICAgIHdlYnNvY2tldHM6IGNvbmZpZy5lbnYud2Vic29ja2V0cyxcbiAgICAgICAgICBzdWJwYXRoOiBjb25maWcuZW52LnN1YnBhdGgsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBzY29yZSA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdzY29yZScpO1xuXG4gICAgY29uc3QgcGxheWVyRXhwZXJpZW5jZSA9IG5ldyBQbGF5ZXJFeHBlcmllbmNlKHNlcnZlciwgJ3BsYXllcicpO1xuICAgIGNvbnN0IGNvbnRyb2xsZXJFeHBlcmllbmNlID0gbmV3IENvbnRyb2xsZXJFeHBlcmllbmNlKHNlcnZlciwgJ2NvbnRyb2xsZXInKTtcblxuICAgIC8vIHN0YXJ0IGFsbCB0aGUgdGhpbmdzXG4gICAgYXdhaXQgc2VydmVyLnN0YXJ0KCk7XG4gICAgcGxheWVyRXhwZXJpZW5jZS5zdGFydCgpO1xuICAgIGNvbnRyb2xsZXJFeHBlcmllbmNlLnN0YXJ0KCk7XG5cbiAgICBjb25zdCBvc2NDb25maWcgPSB7IC8vIHRoZXNlIGFyZSB0aGUgZGVmYXVsdHNcbiAgICAgIGxvY2FsQWRkcmVzczogJzAuMC4wLjAnLFxuICAgICAgbG9jYWxQb3J0OiA1NzEyMSxcbiAgICAgIHJlbW90ZUFkZHJlc3M6ICcxMjcuMC4wLjEnLFxuICAgICAgcmVtb3RlUG9ydDogNTcxMjIsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBvc2NTdGF0ZU1hbmFnZXIgPSBuZXcgU3RhdGVNYW5hZ2VyT3NjKHNlcnZlci5zdGF0ZU1hbmFnZXIsIG9zY0NvbmZpZyk7XG4gICAgYXdhaXQgb3NjU3RhdGVNYW5hZ2VyLmluaXQoKTtcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gIH1cbn0pKCk7XG5cbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb24sIHApID0+IHtcbiAgY29uc29sZS5sb2coJz4gVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uJyk7XG4gIGNvbnNvbGUubG9nKHJlYXNvbik7XG59KTtcbiJdfQ==