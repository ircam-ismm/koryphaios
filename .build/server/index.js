"use strict";

require("source-map-support/register");

var _server = require("@soundworks/core/server");

var _path = _interopRequireDefault(require("path"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

var _templateLiteral = _interopRequireDefault(require("template-literal"));

var _stateManagerOsc = require("@soundworks/state-manager-osc");

var _score = _interopRequireDefault(require("./schemas/score.js"));

var _player = _interopRequireDefault(require("./schemas/player.js"));

var _masterControls = _interopRequireDefault(require("./schemas/masterControls.js"));

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
server.stateManager.registerSchema('masterControls', _masterControls.default);

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
    const ngroups = 6;
    const score = await server.stateManager.create('score');
    const globalMasterControls = await server.stateManager.create('masterControls', {
      synth: 'global'
    });
    const sineMasterControls = await server.stateManager.create('masterControls', {
      synth: 'sine'
    });
    const amMasterControls = await server.stateManager.create('masterControls', {
      synth: 'am'
    });
    const fmMasterControls = await server.stateManager.create('masterControls', {
      synth: 'fm'
    });
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
      if (updates.hasOwnProperty('message')) {
        console.log(updates.message);
      }

      if (updates.hasOwnProperty('notes')) {
        console.log("note received"); // if (Array.isArray(noteDict)) {
        //   for (let i = 0; i < noteDict.length; i++) {
        //     //Parsing Max list into smth readable by js
        //     const splitStr = noteDict[i].enveloppe.split(' ');
        //     const env = [];
        //     let i = 1;
        //     while (i < splitStr.length - 1) {
        //       const bp = [];
        //       bp.push(parseFloat(splitStr[i + 1]));
        //       bp.push(parseFloat(splitStr[i + 2]));
        //       bp.push(parseFloat(splitStr[i + 3]));
        //       env.push(bp);
        //       i += 5;
        //     }
        //     noteDict[i].enveloppe = env;
        //   }
        // } else {
        //   //Parsing Max list into smth readable by js
        //   // console.log(noteDict.enveloppe);
        //   const splitStr = noteDict.enveloppe;
        //   const env = [];
        //   let i = 1;
        //   while (i < splitStr.length - 1) {
        //     const bp = [];
        //     bp.push(parseFloat(splitStr[i + 1]));
        //     bp.push(parseFloat(splitStr[i + 2]));
        //     bp.push(parseFloat(splitStr[i + 3]));
        //     env.push(bp);
        //     i += 5;
        //   }
        //   noteDict.enveloppe = env;
        // }
        //Dispatch note among players

        players.forEach(playerState => {
          // const id = playerState.get('id');
          // if (id % modCounter === noteCounter) {
          playerState.set({
            note: updates.notes,
            playTime: sync.getSyncTime() + 0.2
          }); // }
        }); // noteCounter = (noteCounter+1) % modCounter;
      }
    });
  } catch (err) {
    console.error(err.stack);
  }
})();

process.on('unhandledRejection', (reason, p) => {
  console.log('> Unhandled Promise Rejection');
  console.log(reason);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkVOViIsInByb2Nlc3MiLCJlbnYiLCJjb25maWciLCJzZXJ2ZXIiLCJTZXJ2ZXIiLCJ0ZW1wbGF0ZUVuZ2luZSIsImNvbXBpbGUiLCJ0ZW1wbGF0ZURpcmVjdG9yeSIsInBhdGgiLCJqb2luIiwicm91dGVyIiwidXNlIiwiY29uc29sZSIsImxvZyIsImFwcCIsIm5hbWUiLCJwaWQiLCJwbHVnaW5NYW5hZ2VyIiwicmVnaXN0ZXIiLCJwbHVnaW5QbGF0Zm9ybUZhY3RvcnkiLCJwbHVnaW5TeW5jRmFjdG9yeSIsInBsdWdpbkNoZWNraW5GYWN0b3J5Iiwic3RhdGVNYW5hZ2VyIiwicmVnaXN0ZXJTY2hlbWEiLCJzY29yZVNjaGVtYSIsInBsYXllclNjaGVtYSIsIm1hc3RlckNvbnRyb2xzU2NoZW1hIiwibGF1bmNoIiwiaW5pdCIsImNsaWVudFR5cGUiLCJodHRwUmVxdWVzdCIsImF1dGhvciIsInR5cGUiLCJ3ZWJzb2NrZXRzIiwic3VicGF0aCIsInN5bmMiLCJnZXQiLCJuZ3JvdXBzIiwic2NvcmUiLCJjcmVhdGUiLCJnbG9iYWxNYXN0ZXJDb250cm9scyIsInN5bnRoIiwic2luZU1hc3RlckNvbnRyb2xzIiwiYW1NYXN0ZXJDb250cm9scyIsImZtTWFzdGVyQ29udHJvbHMiLCJwbGF5ZXJFeHBlcmllbmNlIiwiUGxheWVyRXhwZXJpZW5jZSIsImNvbnRyb2xsZXJFeHBlcmllbmNlIiwiQ29udHJvbGxlckV4cGVyaWVuY2UiLCJzdGFydCIsIm9zY0NvbmZpZyIsImxvY2FsQWRkcmVzcyIsImxvY2FsUG9ydCIsInJlbW90ZUFkZHJlc3MiLCJyZW1vdGVQb3J0Iiwib3NjU3RhdGVNYW5hZ2VyIiwiU3RhdGVNYW5hZ2VyT3NjIiwicGxheWVycyIsIlNldCIsIm5vdGVDb3VudGVyIiwibW9kQ291bnRlciIsIm9ic2VydmUiLCJzY2hlbWFOYW1lIiwic3RhdGVJZCIsIm5vZGVJZCIsInBsYXllclN0YXRlIiwiYXR0YWNoIiwib25EZXRhY2giLCJkZWxldGUiLCJhZGQiLCJzdWJzY3JpYmUiLCJ1cGRhdGVzIiwiaGFzT3duUHJvcGVydHkiLCJtZXNzYWdlIiwiZm9yRWFjaCIsInNldCIsIm5vdGUiLCJub3RlcyIsInBsYXlUaW1lIiwiZ2V0U3luY1RpbWUiLCJlcnIiLCJlcnJvciIsInN0YWNrIiwib24iLCJyZWFzb24iLCJwIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixJQUFtQixTQUEvQjtBQUNBLE1BQU1HLE1BQU0sR0FBRyx3QkFBVUgsR0FBVixDQUFmO0FBQ0EsTUFBTUksTUFBTSxHQUFHLElBQUlDLGNBQUosRUFBZixDLENBRUE7O0FBQ0FELE1BQU0sQ0FBQ0UsY0FBUCxHQUF3QjtBQUFFQyxFQUFBQSxPQUFPLEVBQVBBO0FBQUYsQ0FBeEI7QUFDQUgsTUFBTSxDQUFDSSxpQkFBUCxHQUEyQkMsY0FBS0MsSUFBTCxDQUFVLFFBQVYsRUFBb0IsUUFBcEIsRUFBOEIsTUFBOUIsQ0FBM0I7QUFDQU4sTUFBTSxDQUFDTyxNQUFQLENBQWNDLEdBQWQsQ0FBa0IsMEJBQVksUUFBWixDQUFsQjtBQUNBUixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixPQUFsQixFQUEyQiwwQkFBWUgsY0FBS0MsSUFBTCxDQUFVLFFBQVYsRUFBb0IsUUFBcEIsQ0FBWixDQUEzQjtBQUNBTixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixTQUFsQixFQUE2QiwwQkFBWUgsY0FBS0MsSUFBTCxDQUFVLFVBQVYsRUFBc0IsUUFBdEIsQ0FBWixDQUE3QjtBQUVBRyxPQUFPLENBQUNDLEdBQVIsQ0FBYTtBQUNiO0FBQ0EsZUFBZVgsTUFBTSxDQUFDWSxHQUFQLENBQVdDLElBQUssU0FBUWhC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QUFDRCxDQUhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnQHNvdW5kd29ya3MvY29yZS9zZXJ2ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgc2VydmVTdGF0aWMgZnJvbSAnc2VydmUtc3RhdGljJztcbmltcG9ydCBjb21waWxlIGZyb20gJ3RlbXBsYXRlLWxpdGVyYWwnO1xuXG5pbXBvcnQgeyBTdGF0ZU1hbmFnZXJPc2MgfSBmcm9tICdAc291bmR3b3Jrcy9zdGF0ZS1tYW5hZ2VyLW9zYyc7XG5cbmltcG9ydCBzY29yZVNjaGVtYSBmcm9tICcuL3NjaGVtYXMvc2NvcmUuanMnO1xuaW1wb3J0IHBsYXllclNjaGVtYSBmcm9tICcuL3NjaGVtYXMvcGxheWVyLmpzJztcbmltcG9ydCBtYXN0ZXJDb250cm9sc1NjaGVtYSBmcm9tICcuL3NjaGVtYXMvbWFzdGVyQ29udHJvbHMuanMnO1xuXG5pbXBvcnQgcGx1Z2luUGxhdGZvcm1GYWN0b3J5IGZyb20gJ0Bzb3VuZHdvcmtzL3BsdWdpbi1wbGF0Zm9ybS9zZXJ2ZXInO1xuaW1wb3J0IHBsdWdpblN5bmNGYWN0b3J5IGZyb20gJ0Bzb3VuZHdvcmtzL3BsdWdpbi1zeW5jL3NlcnZlcic7XG5pbXBvcnQgcGx1Z2luQ2hlY2tpbkZhY3RvcnkgZnJvbSAnQHNvdW5kd29ya3MvcGx1Z2luLWNoZWNraW4vc2VydmVyJztcblxuaW1wb3J0IFBsYXllckV4cGVyaWVuY2UgZnJvbSAnLi9QbGF5ZXJFeHBlcmllbmNlLmpzJztcbmltcG9ydCBDb250cm9sbGVyRXhwZXJpZW5jZSBmcm9tICcuL0NvbnRyb2xsZXJFeHBlcmllbmNlLmpzJztcblxuaW1wb3J0IGdldENvbmZpZyBmcm9tICcuLi91dGlscy9nZXRDb25maWcuanMnO1xuaW1wb3J0IHBsYXllciBmcm9tICcuL3NjaGVtYXMvcGxheWVyLmpzJztcbmNvbnN0IEVOViA9IHByb2Nlc3MuZW52LkVOViB8fCAnZGVmYXVsdCc7XG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoRU5WKTtcbmNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoKTtcblxuLy8gaHRtbCB0ZW1wbGF0ZSBhbmQgc3RhdGljIGZpbGVzIChpbiBtb3N0IGNhc2UsIHRoaXMgc2hvdWxkIG5vdCBiZSBtb2RpZmllZClcbnNlcnZlci50ZW1wbGF0ZUVuZ2luZSA9IHsgY29tcGlsZSB9O1xuc2VydmVyLnRlbXBsYXRlRGlyZWN0b3J5ID0gcGF0aC5qb2luKCcuYnVpbGQnLCAnc2VydmVyJywgJ3RtcGwnKTtcbnNlcnZlci5yb3V0ZXIudXNlKHNlcnZlU3RhdGljKCdwdWJsaWMnKSk7XG5zZXJ2ZXIucm91dGVyLnVzZSgnYnVpbGQnLCBzZXJ2ZVN0YXRpYyhwYXRoLmpvaW4oJy5idWlsZCcsICdwdWJsaWMnKSkpO1xuc2VydmVyLnJvdXRlci51c2UoJ3ZlbmRvcnMnLCBzZXJ2ZVN0YXRpYyhwYXRoLmpvaW4oJy52ZW5kb3JzJywgJ3B1YmxpYycpKSk7XG5cbmNvbnNvbGUubG9nKGBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tIGxhdW5jaGluZyBcIiR7Y29uZmlnLmFwcC5uYW1lfVwiIGluIFwiJHtFTlZ9XCIgZW52aXJvbm1lbnRcbi0gW3BpZDogJHtwcm9jZXNzLnBpZH1dXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHJlZ2lzdGVyIHBsdWdpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcnZlci5wbHVnaW5NYW5hZ2VyLnJlZ2lzdGVyKHBsdWdpbk5hbWUsIHBsdWdpbkZhY3RvcnksIFtwbHVnaW5PcHRpb25zXSwgW2RlcGVuZGVuY2llc10pXG5zZXJ2ZXIucGx1Z2luTWFuYWdlci5yZWdpc3RlcigncGxhdGZvcm0nLCBwbHVnaW5QbGF0Zm9ybUZhY3RvcnksIHt9LCBbXSk7XG5zZXJ2ZXIucGx1Z2luTWFuYWdlci5yZWdpc3Rlcignc3luYycsIHBsdWdpblN5bmNGYWN0b3J5LCB7fSwgW10pO1xuc2VydmVyLnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIoJ2NoZWNraW4nLCBwbHVnaW5DaGVja2luRmFjdG9yeSwge30sIFtdKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVnaXN0ZXIgc2NoZW1hc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYShuYW1lLCBzY2hlbWEpO1xuc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYSgnc2NvcmUnLCBzY29yZVNjaGVtYSk7XG5zZXJ2ZXIuc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyU2NoZW1hKCdwbGF5ZXInLCBwbGF5ZXJTY2hlbWEpO1xuc2VydmVyLnN0YXRlTWFuYWdlci5yZWdpc3RlclNjaGVtYSgnbWFzdGVyQ29udHJvbHMnLCBtYXN0ZXJDb250cm9sc1NjaGVtYSk7XG5cblxuXG4oYXN5bmMgZnVuY3Rpb24gbGF1bmNoKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHNlcnZlci5pbml0KGNvbmZpZywgKGNsaWVudFR5cGUsIGNvbmZpZywgaHR0cFJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudFR5cGU6IGNsaWVudFR5cGUsXG4gICAgICAgIGFwcDoge1xuICAgICAgICAgIG5hbWU6IGNvbmZpZy5hcHAubmFtZSxcbiAgICAgICAgICBhdXRob3I6IGNvbmZpZy5hcHAuYXV0aG9yLFxuICAgICAgICB9LFxuICAgICAgICBlbnY6IHtcbiAgICAgICAgICB0eXBlOiBjb25maWcuZW52LnR5cGUsXG4gICAgICAgICAgd2Vic29ja2V0czogY29uZmlnLmVudi53ZWJzb2NrZXRzLFxuICAgICAgICAgIHN1YnBhdGg6IGNvbmZpZy5lbnYuc3VicGF0aCxcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN5bmMgPSBzZXJ2ZXIucGx1Z2luTWFuYWdlci5nZXQoJ3N5bmMnKTtcblxuICAgIGNvbnN0IG5ncm91cHMgPSA2O1xuXG4gICAgY29uc3Qgc2NvcmUgPSBhd2FpdCBzZXJ2ZXIuc3RhdGVNYW5hZ2VyLmNyZWF0ZSgnc2NvcmUnKTtcbiAgICBjb25zdCBnbG9iYWxNYXN0ZXJDb250cm9scyA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdtYXN0ZXJDb250cm9scycsIHtzeW50aDogJ2dsb2JhbCd9KTtcbiAgICBjb25zdCBzaW5lTWFzdGVyQ29udHJvbHMgPSBhd2FpdCBzZXJ2ZXIuc3RhdGVNYW5hZ2VyLmNyZWF0ZSgnbWFzdGVyQ29udHJvbHMnLCB7IHN5bnRoOiAnc2luZScgfSk7XG4gICAgY29uc3QgYW1NYXN0ZXJDb250cm9scyA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdtYXN0ZXJDb250cm9scycsIHsgc3ludGg6ICdhbScgfSk7XG4gICAgY29uc3QgZm1NYXN0ZXJDb250cm9scyA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdtYXN0ZXJDb250cm9scycsIHsgc3ludGg6ICdmbScgfSk7XG5cbiAgICBjb25zdCBwbGF5ZXJFeHBlcmllbmNlID0gbmV3IFBsYXllckV4cGVyaWVuY2Uoc2VydmVyLCAncGxheWVyJyk7XG4gICAgY29uc3QgY29udHJvbGxlckV4cGVyaWVuY2UgPSBuZXcgQ29udHJvbGxlckV4cGVyaWVuY2Uoc2VydmVyLCAnY29udHJvbGxlcicpO1xuXG4gICAgLy8gc3RhcnQgYWxsIHRoZSB0aGluZ3NcbiAgICBhd2FpdCBzZXJ2ZXIuc3RhcnQoKTtcbiAgICBwbGF5ZXJFeHBlcmllbmNlLnN0YXJ0KCk7XG4gICAgY29udHJvbGxlckV4cGVyaWVuY2Uuc3RhcnQoKTtcblxuICAgIGNvbnN0IG9zY0NvbmZpZyA9IHsgLy8gdGhlc2UgYXJlIHRoZSBkZWZhdWx0c1xuICAgICAgbG9jYWxBZGRyZXNzOiAnMC4wLjAuMCcsXG4gICAgICBsb2NhbFBvcnQ6IDU3MTIxLFxuICAgICAgcmVtb3RlQWRkcmVzczogJzEyNy4wLjAuMScsXG4gICAgICByZW1vdGVQb3J0OiA1NzEyMixcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IG9zY1N0YXRlTWFuYWdlciA9IG5ldyBTdGF0ZU1hbmFnZXJPc2Moc2VydmVyLnN0YXRlTWFuYWdlciwgb3NjQ29uZmlnKTtcbiAgICBhd2FpdCBvc2NTdGF0ZU1hbmFnZXIuaW5pdCgpO1xuXG4gICAgY29uc3QgcGxheWVycyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgbm90ZUNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IG1vZENvdW50ZXIgPSAzO1xuXG4gICAgc2VydmVyLnN0YXRlTWFuYWdlci5vYnNlcnZlKGFzeW5jIChzY2hlbWFOYW1lLCBzdGF0ZUlkLCBub2RlSWQpID0+IHtcbiAgICAgIHN3aXRjaCAoc2NoZW1hTmFtZSkge1xuICAgICAgICBjYXNlICdwbGF5ZXInOlxuICAgICAgICAgIGNvbnN0IHBsYXllclN0YXRlID0gYXdhaXQgc2VydmVyLnN0YXRlTWFuYWdlci5hdHRhY2goc2NoZW1hTmFtZSwgc3RhdGVJZCk7XG4gICAgICAgICAgcGxheWVyU3RhdGUub25EZXRhY2goKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2xlYW4gdGhpbmdzXG4gICAgICAgICAgICBwbGF5ZXJzLmRlbGV0ZShwbGF5ZXJTdGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGxheWVycy5hZGQocGxheWVyU3RhdGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvL1JlY2VpdmluZyBub3RlcyBmcm9tIE1heCBieSBPU0NcbiAgICBzY29yZS5zdWJzY3JpYmUoYXN5bmMgdXBkYXRlcyA9PiB7XG4gICAgICBpZiAodXBkYXRlcy5oYXNPd25Qcm9wZXJ0eSgnbWVzc2FnZScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZXMubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBpZiAodXBkYXRlcy5oYXNPd25Qcm9wZXJ0eSgnbm90ZXMnKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGUgcmVjZWl2ZWRcIik7XG4gICAgICAgIC8vIGlmIChBcnJheS5pc0FycmF5KG5vdGVEaWN0KSkge1xuICAgICAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZURpY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIC8vUGFyc2luZyBNYXggbGlzdCBpbnRvIHNtdGggcmVhZGFibGUgYnkganNcbiAgICAgICAgLy8gICAgIGNvbnN0IHNwbGl0U3RyID0gbm90ZURpY3RbaV0uZW52ZWxvcHBlLnNwbGl0KCcgJyk7XG4gICAgICAgIC8vICAgICBjb25zdCBlbnYgPSBbXTtcbiAgICAgICAgLy8gICAgIGxldCBpID0gMTtcbiAgICAgICAgLy8gICAgIHdoaWxlIChpIDwgc3BsaXRTdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyAgICAgICBjb25zdCBicCA9IFtdO1xuICAgICAgICAvLyAgICAgICBicC5wdXNoKHBhcnNlRmxvYXQoc3BsaXRTdHJbaSArIDFdKSk7XG4gICAgICAgIC8vICAgICAgIGJwLnB1c2gocGFyc2VGbG9hdChzcGxpdFN0cltpICsgMl0pKTtcbiAgICAgICAgLy8gICAgICAgYnAucHVzaChwYXJzZUZsb2F0KHNwbGl0U3RyW2kgKyAzXSkpO1xuICAgICAgICAvLyAgICAgICBlbnYucHVzaChicCk7XG4gICAgICAgIC8vICAgICAgIGkgKz0gNTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIG5vdGVEaWN0W2ldLmVudmVsb3BwZSA9IGVudjtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgLy9QYXJzaW5nIE1heCBsaXN0IGludG8gc210aCByZWFkYWJsZSBieSBqc1xuICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKG5vdGVEaWN0LmVudmVsb3BwZSk7XG4gICAgICAgIC8vICAgY29uc3Qgc3BsaXRTdHIgPSBub3RlRGljdC5lbnZlbG9wcGU7XG4gICAgICAgIC8vICAgY29uc3QgZW52ID0gW107XG4gICAgICAgIC8vICAgbGV0IGkgPSAxO1xuICAgICAgICAvLyAgIHdoaWxlIChpIDwgc3BsaXRTdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyAgICAgY29uc3QgYnAgPSBbXTtcbiAgICAgICAgLy8gICAgIGJwLnB1c2gocGFyc2VGbG9hdChzcGxpdFN0cltpICsgMV0pKTtcbiAgICAgICAgLy8gICAgIGJwLnB1c2gocGFyc2VGbG9hdChzcGxpdFN0cltpICsgMl0pKTtcbiAgICAgICAgLy8gICAgIGJwLnB1c2gocGFyc2VGbG9hdChzcGxpdFN0cltpICsgM10pKTtcbiAgICAgICAgLy8gICAgIGVudi5wdXNoKGJwKTtcbiAgICAgICAgLy8gICAgIGkgKz0gNTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICAgbm90ZURpY3QuZW52ZWxvcHBlID0gZW52O1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvL0Rpc3BhdGNoIG5vdGUgYW1vbmcgcGxheWVyc1xuICAgICAgICBwbGF5ZXJzLmZvckVhY2gocGxheWVyU3RhdGUgPT4ge1xuICAgICAgICAgIC8vIGNvbnN0IGlkID0gcGxheWVyU3RhdGUuZ2V0KCdpZCcpO1xuICAgICAgICAgIC8vIGlmIChpZCAlIG1vZENvdW50ZXIgPT09IG5vdGVDb3VudGVyKSB7XG4gICAgICAgICAgcGxheWVyU3RhdGUuc2V0KHsgbm90ZTogdXBkYXRlcy5ub3RlcywgcGxheVRpbWU6IHN5bmMuZ2V0U3luY1RpbWUoKSArIDAuMiB9KTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0pOyAgICBcbiAgICAgICAgLy8gbm90ZUNvdW50ZXIgPSAobm90ZUNvdW50ZXIrMSkgJSBtb2RDb3VudGVyO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICB9XG59KSgpO1xuXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uLCBwKSA9PiB7XG4gIGNvbnNvbGUubG9nKCc+IFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbicpO1xuICBjb25zb2xlLmxvZyhyZWFzb24pO1xufSk7XG5cbiJdfQ==