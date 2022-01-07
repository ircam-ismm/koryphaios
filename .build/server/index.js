"use strict";

require("source-map-support/register");

var _server = require("@soundworks/core/server");

var _path = _interopRequireDefault(require("path"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

var _templateLiteral = _interopRequireDefault(require("template-literal"));

var _stateManagerOsc = require("@soundworks/state-manager-osc");

var _score = _interopRequireDefault(require("./schemas/score.js"));

var _player = _interopRequireDefault(require("./schemas/player.js"));

var _busControls = _interopRequireDefault(require("./schemas/busControls.js"));

var _server2 = _interopRequireDefault(require("@soundworks/plugin-platform/server"));

var _server3 = _interopRequireDefault(require("@soundworks/plugin-sync/server"));

var _server4 = _interopRequireDefault(require("@soundworks/plugin-checkin/server"));

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
server.pluginManager.register('sync', _server3.default, {}, []);
server.pluginManager.register('checkin', _server4.default, {}, []); // -------------------------------------------------------------------
// register schemas
// -------------------------------------------------------------------
// server.stateManager.registerSchema(name, schema);

server.stateManager.registerSchema('score', _score.default);
server.stateManager.registerSchema('player', _player.default);
server.stateManager.registerSchema('globalBusControls', _busControls.default);
server.stateManager.registerSchema('sineBusControls', _busControls.default);
server.stateManager.registerSchema('amBusControls', _busControls.default);
server.stateManager.registerSchema('fmBusControls', _busControls.default);

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
    const sync = server.pluginManager.get('sync');
    console.log('random grouping :', randomGrouping(7, 3));
    const score = await server.stateManager.create('score');
    const globalMasterControls = await server.stateManager.create('globalBusControls');
    const sineMasterControls = await server.stateManager.create('sineBusControls');
    const amMasterControls = await server.stateManager.create('amBusControls');
    const fmMasterControls = await server.stateManager.create('fmBusControls');
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
    await oscStateManager.init(); //Observe players connections

    const players = new Set();
    let noteCounter = 0;
    const modCounter = 3;
    server.stateManager.observe(async (schemaName, stateId, nodeId) => {
      switch (schemaName) {
        case 'player':
          const playerState = await server.stateManager.attach(schemaName, stateId);
          playerState.onDetach(() => {
            // clean things
            players.delete(playerState);
          });
          players.add(playerState);
          break;
      }
    }); //Receiving notes from Max by OSC

    score.subscribe(async updates => {
      if (updates.hasOwnProperty('notes')) {
        // console.log("note received", updates.notes.length);
        const dispatchStrategy = score.get('dispatchStrategy');

        switch (dispatchStrategy) {
          case 'sendAll':
            players.forEach(playerState => {
              playerState.set({
                note: updates.notes,
                playTime: sync.getSyncTime() + 0.1
              });
            });
            break;

          case 'randomSpread':
            const nNotes = updates.notes.length;
            break;
        }
      }
    });
  } catch (err) {
    console.error(err.stack);
  }
})();

function randomGrouping(nGroups, nPlayers) {
  const players = Array.from(Array(nPlayers).keys());
  ;
  const groups = Array.from(new Array(nGroups), () => []);
  let gp = 0;

  while (players.length > 0) {
    const randomIdx = Math.floor(Math.random() * players.length);
    const player = players[randomIdx];
    groups[gp].push(player);
    players.splice(randomIdx, 1);
    gp = (gp + 1) % nGroups;
  }

  return groups;
}

process.on('unhandledRejection', (reason, p) => {
  console.log('> Unhandled Promise Rejection');
  console.log(reason);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkVOViIsInByb2Nlc3MiLCJlbnYiLCJjb25maWciLCJzZXJ2ZXIiLCJTZXJ2ZXIiLCJ0ZW1wbGF0ZUVuZ2luZSIsImNvbXBpbGUiLCJ0ZW1wbGF0ZURpcmVjdG9yeSIsInBhdGgiLCJqb2luIiwicm91dGVyIiwidXNlIiwiY29uc29sZSIsImxvZyIsImFwcCIsIm5hbWUiLCJwaWQiLCJwbHVnaW5NYW5hZ2VyIiwicmVnaXN0ZXIiLCJwbHVnaW5QbGF0Zm9ybUZhY3RvcnkiLCJwbHVnaW5TeW5jRmFjdG9yeSIsInBsdWdpbkNoZWNraW5GYWN0b3J5Iiwic3RhdGVNYW5hZ2VyIiwicmVnaXN0ZXJTY2hlbWEiLCJzY29yZVNjaGVtYSIsInBsYXllclNjaGVtYSIsImJ1c0NvbnRyb2xzU2NoZW1hIiwibGF1bmNoIiwiaW5pdCIsImNsaWVudFR5cGUiLCJodHRwUmVxdWVzdCIsImF1dGhvciIsInR5cGUiLCJ3ZWJzb2NrZXRzIiwic3VicGF0aCIsInN5bmMiLCJnZXQiLCJyYW5kb21Hcm91cGluZyIsInNjb3JlIiwiY3JlYXRlIiwiZ2xvYmFsTWFzdGVyQ29udHJvbHMiLCJzaW5lTWFzdGVyQ29udHJvbHMiLCJhbU1hc3RlckNvbnRyb2xzIiwiZm1NYXN0ZXJDb250cm9scyIsInBsYXllckV4cGVyaWVuY2UiLCJQbGF5ZXJFeHBlcmllbmNlIiwiY29udHJvbGxlckV4cGVyaWVuY2UiLCJDb250cm9sbGVyRXhwZXJpZW5jZSIsInN0YXJ0Iiwib3NjQ29uZmlnIiwibG9jYWxBZGRyZXNzIiwibG9jYWxQb3J0IiwicmVtb3RlQWRkcmVzcyIsInJlbW90ZVBvcnQiLCJvc2NTdGF0ZU1hbmFnZXIiLCJTdGF0ZU1hbmFnZXJPc2MiLCJwbGF5ZXJzIiwiU2V0Iiwibm90ZUNvdW50ZXIiLCJtb2RDb3VudGVyIiwib2JzZXJ2ZSIsInNjaGVtYU5hbWUiLCJzdGF0ZUlkIiwibm9kZUlkIiwicGxheWVyU3RhdGUiLCJhdHRhY2giLCJvbkRldGFjaCIsImRlbGV0ZSIsImFkZCIsInN1YnNjcmliZSIsInVwZGF0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImRpc3BhdGNoU3RyYXRlZ3kiLCJmb3JFYWNoIiwic2V0Iiwibm90ZSIsIm5vdGVzIiwicGxheVRpbWUiLCJnZXRTeW5jVGltZSIsIm5Ob3RlcyIsImxlbmd0aCIsImVyciIsImVycm9yIiwic3RhY2siLCJuR3JvdXBzIiwiblBsYXllcnMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiZ3JvdXBzIiwiZ3AiLCJyYW5kb21JZHgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5ZXIiLCJwdXNoIiwic3BsaWNlIiwib24iLCJyZWFzb24iLCJwIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixJQUFtQixTQUEvQjtBQUNBLE1BQU1HLE1BQU0sR0FBRyx3QkFBVUgsR0FBVixDQUFmO0FBQ0EsTUFBTUksTUFBTSxHQUFHLElBQUlDLGNBQUosRUFBZixDLENBRUE7O0FBQ0FELE1BQU0sQ0FBQ0UsY0FBUCxHQUF3QjtBQUFFQyxFQUFBQSxPQUFPLEVBQVBBO0FBQUYsQ0FBeEI7QUFDQUgsTUFBTSxDQUFDSSxpQkFBUCxHQUEyQkMsY0FBS0MsSUFBTCxDQUFVLFFBQVYsRUFBb0IsUUFBcEIsRUFBOEIsTUFBOUIsQ0FBM0I7QUFDQU4sTUFBTSxDQUFDTyxNQUFQLENBQWNDLEdBQWQsQ0FBa0IsMEJBQVksUUFBWixDQUFsQjtBQUNBUixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixPQUFsQixFQUEyQiwwQkFBWUgsY0FBS0MsSUFBTCxDQUFVLFFBQVYsRUFBb0IsUUFBcEIsQ0FBWixDQUEzQjtBQUNBTixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsR0FBZCxDQUFr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QUFOLENBQVdELEtBQUssQ0FBQ0QsUUFBRCxDQUFMLENBQWdCRyxJQUFoQixFQUFYLENBQWhCO0FBQW1EO0FBQ25ELFFBQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDQyxJQUFOLENBQVcsSUFBSUQsS0FBSixDQUFVRixPQUFWLENBQVgsRUFBK0IsTUFBTSxFQUFyQyxDQUFmO0FBQ0EsTUFBSU0sRUFBRSxHQUFHLENBQVQ7O0FBQ0EsU0FBT2xDLE9BQU8sQ0FBQ3dCLE1BQVIsR0FBaUIsQ0FBeEIsRUFBMkI7QUFDekIsVUFBTVcsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCdEMsT0FBTyxDQUFDd0IsTUFBbkMsQ0FBbEI7QUFDQSxVQUFNZSxNQUFNLEdBQUd2QyxPQUFPLENBQUNtQyxTQUFELENBQXRCO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0MsRUFBRCxDQUFOLENBQVdNLElBQVgsQ0FBZ0JELE1BQWhCO0FBQ0F2QyxJQUFBQSxPQUFPLENBQUN5QyxNQUFSLENBQWVOLFNBQWYsRUFBMEIsQ0FBMUI7QUFDQUQsSUFBQUEsRUFBRSxHQUFHLENBQUNBLEVBQUUsR0FBRyxDQUFOLElBQVNOLE9BQWQ7QUFDRDs7QUFDRCxTQUFPSyxNQUFQO0FBQ0Q7O0FBR0R6RixPQUFPLENBQUNrRyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsQ0FBQ0MsTUFBRCxFQUFTQyxDQUFULEtBQWU7QUFDOUN4RixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWjtBQUNBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXNGLE1BQVo7QUFDRCxDQUhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnQHNvdW5kd29ya3MvY29yZS9zZXJ2ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgc2VydmVTdGF0aWMgZnJvbSAnc2VydmUtc3RhdGljJztcbmltcG9ydCBjb21waWxlIGZyb20gJ3RlbXBsYXRlLWxpdGVyYWwnO1xuXG5pbXBvcnQgeyBTdGF0ZU1hbmFnZXJPc2MgfSBmcm9tICdAc291bmR3b3Jrcy9zdGF0ZS1tYW5hZ2VyLW9zYyc7XG5cbmltcG9ydCBzY29yZVNjaGVtYSBmcm9tICcuL3NjaGVtYXMvc2NvcmUuanMnO1xuaW1wb3J0IHBsYXllclNjaGVtYSBmcm9tICcuL3NjaGVtYXMvcGxheWVyLmpzJztcbmltcG9ydCBidXNDb250cm9sc1NjaGVtYSBmcm9tICcuL3NjaGVtYXMvYnVzQ29udHJvbHMuanMnO1xuXG5pbXBvcnQgcGx1Z2luUGxhdGZvcm1GYWN0b3J5IGZyb20gJ0Bzb3VuZHdvcmtzL3BsdWdpbi1wbGF0Zm9ybS9zZXJ2ZXInO1xuaW1wb3J0IHBsdWdpblN5bmNGYWN0b3J5IGZyb20gJ0Bzb3VuZHdvcmtzL3BsdWdpbi1zeW5jL3NlcnZlcic7XG5pbXBvcnQgcGx1Z2luQ2hlY2tpbkZhY3RvcnkgZnJvbSAnQHNvdW5kd29ya3MvcGx1Z2luLWNoZWNraW4vc2VydmVyJztcblxuaW1wb3J0IFBsYXllckV4cGVyaWVuY2UgZnJvbSAnLi9QbGF5ZXJFeHBlcmllbmNlLmpzJztcbmltcG9ydCBDb250cm9sbGVyRXhwZXJpZW5jZSBmcm9tICcuL0NvbnRyb2xsZXJFeHBlcmllbmNlLmpzJztcblxuaW1wb3J0IGdldENvbmZpZyBmcm9tICcuLi91dGlscy9nZXRDb25maWcuanMnO1xuaW1wb3J0IHBsYXllciBmcm9tICcuL3NjaGVtYXMvcGxheWVyLmpzJztcbmNvbnN0IEVOViA9IHByb2Nlc3MuZW52LkVOViB8fCAnZGVmYXVsdCc7XG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoRU5WKTtcbmNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoKTtcblxuLy8gaHRtbCB0ZW1wbGF0ZSBhbmQgc3RhdGljIGZpbGVzIChpbiBtb3N0IGNhc2UsIHRoaXMgc2hvdWxkIG5vdCBiZSBtb2RpZmllZClcbnNlcnZlci50ZW1wbGF0ZUVuZ2luZSA9IHsgY29tcGlsZSB9O1xuc2VydmVyLnRlbXBsYXRlRGlyZWN0b3J5ID0gcGF0aC5qb2luKCcuYnVpbGQnLCAnc2VydmVyJywgJ3RtcGwnKTtcbnNlcnZlci5yb3V0ZXIudXNlKHNlcnZlU3RhdGljKCdwdWJsaWMnKSk7XG5zZXJ2ZXIucm91dGVyLnVzZSgnYnVpbGQnLCBzZXJ2ZVN0YXRpYyhwYXRoLmpvaW4oJy5idWlsZCcsICdwdWJsaWMnKSkpO1xuc2VydmVyLnJvdXRlci51c2UoJ3ZlbmRvcnMnLCBzZXJ2ZVN0YXRpYyhwYXRoLmpvaW4oJy52ZW5kb3JzJywgJ3B1YmxpYycpKSk7XG5cbmNvbnNvbGUubG9nKGBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tIGxhdW5jaGluZyBcIiR7Y29uZmlnLmFwcC5uYW1lfVwiIGluIFwiJHtFTlZ9XCIgZW52aXJvbm1lbnRcbi0gW3BpZDogJHtwcm9jZXNzLnBpZH1dXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHJlZ2lzdGVyIHBsdWdpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcnZlci5wbHVnaW5NYW5hZ2VyLnJlZ2lzdGVyKHBsdWdpbk5hbWUsIHBsdWdpbkZhY3RvcnksIFtwbHVnaW5PcHRpb25zXSwgW2RlcGVuZGVuY2llc10pXG5zZXJ2ZXIucGx1Z2luTWFuYWdlci5yZWdpc3RlcigncGxhdGZvcm0nLCBwbHVnaW5QbGF0Zm9ybUZhY3RvcnksIHt9LCBbXSk7XG5zZXJ2ZXIucGx1Z2luTWFuYWdlci5yZWdpc3Rlcignc3luYycsIHBsdWdpblN5bmNGYWN0b3J5LCB7fSwgW10pO1xuc2VydmVyLnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIoJ2NoZWNraW4nLCBwbHVnaW5DaGVja2luRmFjdG9yeSwge30sIFtdKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVnaXN0ZXIgc2NoZW1hc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYShuYW1lLCBzY2hlbWEpO1xuc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYSgnc2NvcmUnLCBzY29yZVNjaGVtYSk7XG5zZXJ2ZXIuc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyU2NoZW1hKCdwbGF5ZXInLCBwbGF5ZXJTY2hlbWEpO1xuc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYSgnZ2xvYmFsQnVzQ29udHJvbHMnLCBidXNDb250cm9sc1NjaGVtYSk7XG5zZXJ2ZXIuc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyU2NoZW1hKCdzaW5lQnVzQ29udHJvbHMnLCBidXNDb250cm9sc1NjaGVtYSk7XG5zZXJ2ZXIuc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyU2NoZW1hKCdhbUJ1c0NvbnRyb2xzJywgYnVzQ29udHJvbHNTY2hlbWEpO1xuc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYSgnZm1CdXNDb250cm9scycsIGJ1c0NvbnRyb2xzU2NoZW1hKTtcblxuXG4oYXN5bmMgZnVuY3Rpb24gbGF1bmNoKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHNlcnZlci5pbml0KGNvbmZpZywgKGNsaWVudFR5cGUsIGNvbmZpZywgaHR0cFJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudFR5cGU6IGNsaWVudFR5cGUsXG4gICAgICAgIGFwcDoge1xuICAgICAgICAgIG5hbWU6IGNvbmZpZy5hcHAubmFtZSxcbiAgICAgICAgICBhdXRob3I6IGNvbmZpZy5hcHAuYXV0aG9yLFxuICAgICAgICB9LFxuICAgICAgICBlbnY6IHtcbiAgICAgICAgICB0eXBlOiBjb25maWcuZW52LnR5cGUsXG4gICAgICAgICAgd2Vic29ja2V0czogY29uZmlnLmVudi53ZWJzb2NrZXRzLFxuICAgICAgICAgIHN1YnBhdGg6IGNvbmZpZy5lbnYuc3VicGF0aCxcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN5bmMgPSBzZXJ2ZXIucGx1Z2luTWFuYWdlci5nZXQoJ3N5bmMnKTtcblxuICAgIGNvbnNvbGUubG9nKCdyYW5kb20gZ3JvdXBpbmcgOicsIHJhbmRvbUdyb3VwaW5nKDcsIDMpKTtcblxuICAgIGNvbnN0IHNjb3JlID0gYXdhaXQgc2VydmVyLnN0YXRlTWFuYWdlci5jcmVhdGUoJ3Njb3JlJyk7XG4gICAgY29uc3QgZ2xvYmFsTWFzdGVyQ29udHJvbHMgPSBhd2FpdCBzZXJ2ZXIuc3RhdGVNYW5hZ2VyLmNyZWF0ZSgnZ2xvYmFsQnVzQ29udHJvbHMnKTtcbiAgICBjb25zdCBzaW5lTWFzdGVyQ29udHJvbHMgPSBhd2FpdCBzZXJ2ZXIuc3RhdGVNYW5hZ2VyLmNyZWF0ZSgnc2luZUJ1c0NvbnRyb2xzJyk7XG4gICAgY29uc3QgYW1NYXN0ZXJDb250cm9scyA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdhbUJ1c0NvbnRyb2xzJyk7XG4gICAgY29uc3QgZm1NYXN0ZXJDb250cm9scyA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdmbUJ1c0NvbnRyb2xzJyk7XG5cbiAgICBjb25zdCBwbGF5ZXJFeHBlcmllbmNlID0gbmV3IFBsYXllckV4cGVyaWVuY2Uoc2VydmVyLCAncGxheWVyJyk7XG4gICAgY29uc3QgY29udHJvbGxlckV4cGVyaWVuY2UgPSBuZXcgQ29udHJvbGxlckV4cGVyaWVuY2Uoc2VydmVyLCAnY29udHJvbGxlcicpO1xuXG4gICAgLy8gc3RhcnQgYWxsIHRoZSB0aGluZ3NcbiAgICBhd2FpdCBzZXJ2ZXIuc3RhcnQoKTtcbiAgICBwbGF5ZXJFeHBlcmllbmNlLnN0YXJ0KCk7XG4gICAgY29udHJvbGxlckV4cGVyaWVuY2Uuc3RhcnQoKTtcblxuICAgIGNvbnN0IG9zY0NvbmZpZyA9IHsgLy8gdGhlc2UgYXJlIHRoZSBkZWZhdWx0c1xuICAgICAgbG9jYWxBZGRyZXNzOiAnMC4wLjAuMCcsXG4gICAgICBsb2NhbFBvcnQ6IDU3MTIxLFxuICAgICAgcmVtb3RlQWRkcmVzczogJzEyNy4wLjAuMScsXG4gICAgICByZW1vdGVQb3J0OiA1NzEyMixcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IG9zY1N0YXRlTWFuYWdlciA9IG5ldyBTdGF0ZU1hbmFnZXJPc2Moc2VydmVyLnN0YXRlTWFuYWdlciwgb3NjQ29uZmlnKTtcbiAgICBhd2FpdCBvc2NTdGF0ZU1hbmFnZXIuaW5pdCgpO1xuXG4gICAgLy9PYnNlcnZlIHBsYXllcnMgY29ubmVjdGlvbnNcbiAgICBjb25zdCBwbGF5ZXJzID0gbmV3IFNldCgpO1xuICAgIGxldCBub3RlQ291bnRlciA9IDA7XG4gICAgY29uc3QgbW9kQ291bnRlciA9IDM7XG5cbiAgICBzZXJ2ZXIuc3RhdGVNYW5hZ2VyLm9ic2VydmUoYXN5bmMgKHNjaGVtYU5hbWUsIHN0YXRlSWQsIG5vZGVJZCkgPT4ge1xuICAgICAgc3dpdGNoIChzY2hlbWFOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3BsYXllcic6XG4gICAgICAgICAgY29uc3QgcGxheWVyU3RhdGUgPSBhd2FpdCBzZXJ2ZXIuc3RhdGVNYW5hZ2VyLmF0dGFjaChzY2hlbWFOYW1lLCBzdGF0ZUlkKTtcbiAgICAgICAgICBwbGF5ZXJTdGF0ZS5vbkRldGFjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBjbGVhbiB0aGluZ3NcbiAgICAgICAgICAgIHBsYXllcnMuZGVsZXRlKHBsYXllclN0YXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwbGF5ZXJzLmFkZChwbGF5ZXJTdGF0ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vUmVjZWl2aW5nIG5vdGVzIGZyb20gTWF4IGJ5IE9TQ1xuICAgIHNjb3JlLnN1YnNjcmliZShhc3luYyB1cGRhdGVzID0+IHtcbiAgICAgIGlmICh1cGRhdGVzLmhhc093blByb3BlcnR5KCdub3RlcycpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90ZSByZWNlaXZlZFwiLCB1cGRhdGVzLm5vdGVzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoU3RyYXRlZ3kgPSBzY29yZS5nZXQoJ2Rpc3BhdGNoU3RyYXRlZ3knKTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAoZGlzcGF0Y2hTdHJhdGVneSkge1xuICAgICAgICAgIGNhc2UgJ3NlbmRBbGwnOlxuICAgICAgICAgICAgcGxheWVycy5mb3JFYWNoKHBsYXllclN0YXRlID0+IHtcbiAgICAgICAgICAgICAgcGxheWVyU3RhdGUuc2V0KHsgbm90ZTogdXBkYXRlcy5ub3RlcywgcGxheVRpbWU6IHN5bmMuZ2V0U3luY1RpbWUoKSArIDAuMSB9KTtcbiAgICAgICAgICAgIH0pOyAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JhbmRvbVNwcmVhZCc6XG4gICAgICAgICAgICBjb25zdCBuTm90ZXMgPSB1cGRhdGVzLm5vdGVzLmxlbmd0aDsgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIHJhbmRvbUdyb3VwaW5nKG5Hcm91cHMsIG5QbGF5ZXJzKSB7XG4gIGNvbnN0IHBsYXllcnMgPSBBcnJheS5mcm9tKEFycmF5KG5QbGF5ZXJzKS5rZXlzKCkpOztcbiAgY29uc3QgZ3JvdXBzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobkdyb3VwcyksICgpID0+IFtdKTtcbiAgbGV0IGdwID0gMDtcbiAgd2hpbGUgKHBsYXllcnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJhbmRvbUlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYXllcnMubGVuZ3RoKTtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW3JhbmRvbUlkeF07XG4gICAgZ3JvdXBzW2dwXS5wdXNoKHBsYXllcik7XG4gICAgcGxheWVycy5zcGxpY2UocmFuZG9tSWR4LCAxKTtcbiAgICBncCA9IChncCArIDEpJW5Hcm91cHM7XG4gIH1cbiAgcmV0dXJuIGdyb3Vwcztcbn1cblxuXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uLCBwKSA9PiB7XG4gIGNvbnNvbGUubG9nKCc+IFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbicpO1xuICBjb25zb2xlLmxvZyhyZWFzb24pO1xufSk7XG5cbiJdfQ==