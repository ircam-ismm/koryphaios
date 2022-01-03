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
      group: 0
    });
    const groupMasterControls = new Set();

    for (let i = 1; i <= ngroups; i++) {
      const groupControls = await server.stateManager.create('masterControls', {
        group: i
      });
      groupMasterControls.add(groupControls);
    }

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
      if (updates.hasOwnProperty('note')) {
        const noteDict = updates.note;

        if (Array.isArray(noteDict)) {
          for (let i = 0; i < noteDict.length; i++) {
            //Parsing Max list into smth readable by js
            const splitStr = noteDict[i].enveloppe.split(' ');
            const env = [];
            let i = 1;

            while (i < splitStr.length - 1) {
              const bp = [];
              bp.push(parseFloat(splitStr[i + 1]));
              bp.push(parseFloat(splitStr[i + 2]));
              bp.push(parseFloat(splitStr[i + 3]));
              env.push(bp);
              i += 5;
            }

            noteDict[i].enveloppe = env;
          }
        } else {
          //Parsing Max list into smth readable by js
          const splitStr = noteDict.enveloppe.split(' ');
          const env = [];
          let i = 1;

          while (i < splitStr.length - 1) {
            const bp = [];
            bp.push(parseFloat(splitStr[i + 1]));
            bp.push(parseFloat(splitStr[i + 2]));
            bp.push(parseFloat(splitStr[i + 3]));
            env.push(bp);
            i += 5;
          }

          noteDict.enveloppe = env;
        } //Dispatch note among players


        players.forEach(playerState => {
          const id = playerState.get('id');

          if (id % modCounter === noteCounter) {
            playerState.set({
              note: noteDict,
              playTime: sync.getSyncTime() + 0.2
            });
          }
        });
        noteCounter = (noteCounter + 1) % modCounter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkVOViIsInByb2Nlc3MiLCJlbnYiLCJjb25maWciLCJzZXJ2ZXIiLCJTZXJ2ZXIiLCJ0ZW1wbGF0ZUVuZ2luZSIsImNvbXBpbGUiLCJ0ZW1wbGF0ZURpcmVjdG9yeSIsInBhdGgiLCJqb2luIiwicm91dGVyIiwidXNlIiwiY29uc29sZSIsImxvZyIsImFwcCIsIm5hbWUiLCJwaWQiLCJwbHVnaW5NYW5hZ2VyIiwicmVnaXN0ZXIiLCJwbHVnaW5QbGF0Zm9ybUZhY3RvcnkiLCJwbHVnaW5TeW5jRmFjdG9yeSIsInBsdWdpbkNoZWNraW5GYWN0b3J5Iiwic3RhdGVNYW5hZ2VyIiwicmVnaXN0ZXJTY2hlbWEiLCJzY29yZVNjaGVtYSIsInBsYXllclNjaGVtYSIsIm1hc3RlckNvbnRyb2xzU2NoZW1hIiwibGF1bmNoIiwiaW5pdCIsImNsaWVudFR5cGUiLCJodHRwUmVxdWVzdCIsImF1dGhvciIsInR5cGUiLCJ3ZWJzb2NrZXRzIiwic3VicGF0aCIsInN5bmMiLCJnZXQiLCJuZ3JvdXBzIiwic2NvcmUiLCJjcmVhdGUiLCJnbG9iYWxNYXN0ZXJDb250cm9scyIsImdyb3VwIiwiZ3JvdXBNYXN0ZXJDb250cm9scyIsIlNldCIsImkiLCJncm91cENvbnRyb2xzIiwiYWRkIiwicGxheWVyRXhwZXJpZW5jZSIsIlBsYXllckV4cGVyaWVuY2UiLCJjb250cm9sbGVyRXhwZXJpZW5jZSIsIkNvbnRyb2xsZXJFeHBlcmllbmNlIiwic3RhcnQiLCJvc2NDb25maWciLCJsb2NhbEFkZHJlc3MiLCJsb2NhbFBvcnQiLCJyZW1vdGVBZGRyZXNzIiwicmVtb3RlUG9ydCIsIm9zY1N0YXRlTWFuYWdlciIsIlN0YXRlTWFuYWdlck9zYyIsInBsYXllcnMiLCJub3RlQ291bnRlciIsIm1vZENvdW50ZXIiLCJvYnNlcnZlIiwic2NoZW1hTmFtZSIsInN0YXRlSWQiLCJub2RlSWQiLCJwbGF5ZXJTdGF0ZSIsImF0dGFjaCIsIm9uRGV0YWNoIiwiZGVsZXRlIiwic3Vic2NyaWJlIiwidXBkYXRlcyIsImhhc093blByb3BlcnR5Iiwibm90ZURpY3QiLCJub3RlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic3BsaXRTdHIiLCJlbnZlbG9wcGUiLCJzcGxpdCIsImJwIiwicHVzaCIsInBhcnNlRmxvYXQiLCJmb3JFYWNoIiwiaWQiLCJzZXQiLCJwbGF5VGltZSIsImdldFN5bmNUaW1lIiwiZXJyIiwiZXJyb3IiLCJzdGFjayIsIm9uIiwicmVhc29uIiwicCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosSUFBbUIsU0FBL0I7QUFDQSxNQUFNRyxNQUFNLEdBQUcsd0JBQVVILEdBQVYsQ0FBZjtBQUNBLE1BQU1JLE1BQU0sR0FBRyxJQUFJQyxjQUFKLEVBQWYsQyxDQUVBOztBQUNBRCxNQUFNLENBQUNFLGNBQVAsR0FBd0I7QUFBRUMsRUFBQUEsT0FBTyxFQUFQQTtBQUFGLENBQXhCO0FBQ0FILE1BQU0sQ0FBQ0ksaUJBQVAsR0FBMkJDLGNBQUtDLElBQUwsQ0FBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCLE1BQTlCLENBQTNCO0FBQ0FOLE1BQU0sQ0FBQ08sTUFBUCxDQUFjQyxHQUFkLENBQWtCLDBCQUFZLFFBQVosQ0FBbEI7QUFDQVIsTUFBTSxDQUFDTyxNQUFQLENBQWNDLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMkIsMEJBQVlILGNBQUtDLElBQUwsQ0FBVSxRQUFWLEVBQW9CLFFBQXBCLENBQVosQ0FBM0I7QUFDQU4sTUFBTSxDQUFDTyxNQUFQLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNkIsMEJBQVlILGNBQUtDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLFFBQXRCLENBQVosQ0FBN0I7QUFFQUcsT0FBTyxD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Q0Q7QUFDRixTQUxEO0FBTUE1QixRQUFBQSxXQUFXLEdBQUcsQ0FBQ0EsV0FBVyxHQUFDLENBQWIsSUFBa0JDLFVBQWhDO0FBQ0Q7QUFDRixLQTdDRDtBQWdERCxHQWpIRCxDQWlIRSxPQUFPNEIsR0FBUCxFQUFZO0FBQ1o3RSxJQUFBQSxPQUFPLENBQUM4RSxLQUFSLENBQWNELEdBQUcsQ0FBQ0UsS0FBbEI7QUFDRDtBQUNGLENBckhEOztBQXVIQTNGLE9BQU8sQ0FBQzRGLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxDQUFDQyxNQUFELEVBQVNDLENBQVQsS0FBZTtBQUM5Q2xGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0YsTUFBWjtBQUNELENBSEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdAc291bmR3b3Jrcy9jb3JlL3NlcnZlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzZXJ2ZVN0YXRpYyBmcm9tICdzZXJ2ZS1zdGF0aWMnO1xuaW1wb3J0IGNvbXBpbGUgZnJvbSAndGVtcGxhdGUtbGl0ZXJhbCc7XG5cbmltcG9ydCB7IFN0YXRlTWFuYWdlck9zYyB9IGZyb20gJ0Bzb3VuZHdvcmtzL3N0YXRlLW1hbmFnZXItb3NjJztcblxuaW1wb3J0IHNjb3JlU2NoZW1hIGZyb20gJy4vc2NoZW1hcy9zY29yZS5qcyc7XG5pbXBvcnQgcGxheWVyU2NoZW1hIGZyb20gJy4vc2NoZW1hcy9wbGF5ZXIuanMnO1xuaW1wb3J0IG1hc3RlckNvbnRyb2xzU2NoZW1hIGZyb20gJy4vc2NoZW1hcy9tYXN0ZXJDb250cm9scy5qcyc7XG5cbmltcG9ydCBwbHVnaW5QbGF0Zm9ybUZhY3RvcnkgZnJvbSAnQHNvdW5kd29ya3MvcGx1Z2luLXBsYXRmb3JtL3NlcnZlcic7XG5pbXBvcnQgcGx1Z2luU3luY0ZhY3RvcnkgZnJvbSAnQHNvdW5kd29ya3MvcGx1Z2luLXN5bmMvc2VydmVyJztcbmltcG9ydCBwbHVnaW5DaGVja2luRmFjdG9yeSBmcm9tICdAc291bmR3b3Jrcy9wbHVnaW4tY2hlY2tpbi9zZXJ2ZXInO1xuXG5pbXBvcnQgUGxheWVyRXhwZXJpZW5jZSBmcm9tICcuL1BsYXllckV4cGVyaWVuY2UuanMnO1xuaW1wb3J0IENvbnRyb2xsZXJFeHBlcmllbmNlIGZyb20gJy4vQ29udHJvbGxlckV4cGVyaWVuY2UuanMnO1xuXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4uL3V0aWxzL2dldENvbmZpZy5qcyc7XG5pbXBvcnQgcGxheWVyIGZyb20gJy4vc2NoZW1hcy9wbGF5ZXIuanMnO1xuY29uc3QgRU5WID0gcHJvY2Vzcy5lbnYuRU5WIHx8ICdkZWZhdWx0JztcbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZyhFTlYpO1xuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcigpO1xuXG4vLyBodG1sIHRlbXBsYXRlIGFuZCBzdGF0aWMgZmlsZXMgKGluIG1vc3QgY2FzZSwgdGhpcyBzaG91bGQgbm90IGJlIG1vZGlmaWVkKVxuc2VydmVyLnRlbXBsYXRlRW5naW5lID0geyBjb21waWxlIH07XG5zZXJ2ZXIudGVtcGxhdGVEaXJlY3RvcnkgPSBwYXRoLmpvaW4oJy5idWlsZCcsICdzZXJ2ZXInLCAndG1wbCcpO1xuc2VydmVyLnJvdXRlci51c2Uoc2VydmVTdGF0aWMoJ3B1YmxpYycpKTtcbnNlcnZlci5yb3V0ZXIudXNlKCdidWlsZCcsIHNlcnZlU3RhdGljKHBhdGguam9pbignLmJ1aWxkJywgJ3B1YmxpYycpKSk7XG5zZXJ2ZXIucm91dGVyLnVzZSgndmVuZG9ycycsIHNlcnZlU3RhdGljKHBhdGguam9pbignLnZlbmRvcnMnLCAncHVibGljJykpKTtcblxuY29uc29sZS5sb2coYFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0gbGF1bmNoaW5nIFwiJHtjb25maWcuYXBwLm5hbWV9XCIgaW4gXCIke0VOVn1cIiBlbnZpcm9ubWVudFxuLSBbcGlkOiAke3Byb2Nlc3MucGlkfV1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVnaXN0ZXIgcGx1Z2luc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VydmVyLnBsdWdpbk1hbmFnZXIucmVnaXN0ZXIocGx1Z2luTmFtZSwgcGx1Z2luRmFjdG9yeSwgW3BsdWdpbk9wdGlvbnNdLCBbZGVwZW5kZW5jaWVzXSlcbnNlcnZlci5wbHVnaW5NYW5hZ2VyLnJlZ2lzdGVyKCdwbGF0Zm9ybScsIHBsdWdpblBsYXRmb3JtRmFjdG9yeSwge30sIFtdKTtcbnNlcnZlci5wbHVnaW5NYW5hZ2VyLnJlZ2lzdGVyKCdzeW5jJywgcGx1Z2luU3luY0ZhY3RvcnksIHt9LCBbXSk7XG5zZXJ2ZXIucGx1Z2luTWFuYWdlci5yZWdpc3RlcignY2hlY2tpbicsIHBsdWdpbkNoZWNraW5GYWN0b3J5LCB7fSwgW10pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyByZWdpc3RlciBzY2hlbWFzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXJ2ZXIuc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyU2NoZW1hKG5hbWUsIHNjaGVtYSk7XG5zZXJ2ZXIuc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyU2NoZW1hKCdzY29yZScsIHNjb3JlU2NoZW1hKTtcbnNlcnZlci5zdGF0ZU1hbmFnZXIucmVnaXN0ZXJTY2hlbWEoJ3BsYXllcicsIHBsYXllclNjaGVtYSk7XG5zZXJ2ZXIuc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyU2NoZW1hKCdtYXN0ZXJDb250cm9scycsIG1hc3RlckNvbnRyb2xzU2NoZW1hKTtcblxuXG5cbihhc3luYyBmdW5jdGlvbiBsYXVuY2goKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgc2VydmVyLmluaXQoY29uZmlnLCAoY2xpZW50VHlwZSwgY29uZmlnLCBodHRwUmVxdWVzdCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50VHlwZTogY2xpZW50VHlwZSxcbiAgICAgICAgYXBwOiB7XG4gICAgICAgICAgbmFtZTogY29uZmlnLmFwcC5uYW1lLFxuICAgICAgICAgIGF1dGhvcjogY29uZmlnLmFwcC5hdXRob3IsXG4gICAgICAgIH0sXG4gICAgICAgIGVudjoge1xuICAgICAgICAgIHR5cGU6IGNvbmZpZy5lbnYudHlwZSxcbiAgICAgICAgICB3ZWJzb2NrZXRzOiBjb25maWcuZW52LndlYnNvY2tldHMsXG4gICAgICAgICAgc3VicGF0aDogY29uZmlnLmVudi5zdWJwYXRoLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3luYyA9IHNlcnZlci5wbHVnaW5NYW5hZ2VyLmdldCgnc3luYycpO1xuXG4gICAgY29uc3Qgbmdyb3VwcyA9IDY7XG5cbiAgICBjb25zdCBzY29yZSA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdzY29yZScpO1xuICAgIGNvbnN0IGdsb2JhbE1hc3RlckNvbnRyb2xzID0gYXdhaXQgc2VydmVyLnN0YXRlTWFuYWdlci5jcmVhdGUoJ21hc3RlckNvbnRyb2xzJywge2dyb3VwOiAwfSk7XG4gICAgY29uc3QgZ3JvdXBNYXN0ZXJDb250cm9scyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuZ3JvdXBzOyBpKyspe1xuICAgICAgY29uc3QgZ3JvdXBDb250cm9scyA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuY3JlYXRlKCdtYXN0ZXJDb250cm9scycsIHsgZ3JvdXA6IGkgfSk7XG4gICAgICBncm91cE1hc3RlckNvbnRyb2xzLmFkZChncm91cENvbnRyb2xzKTtcbiAgICB9IFxuXG4gICAgY29uc3QgcGxheWVyRXhwZXJpZW5jZSA9IG5ldyBQbGF5ZXJFeHBlcmllbmNlKHNlcnZlciwgJ3BsYXllcicpO1xuICAgIGNvbnN0IGNvbnRyb2xsZXJFeHBlcmllbmNlID0gbmV3IENvbnRyb2xsZXJFeHBlcmllbmNlKHNlcnZlciwgJ2NvbnRyb2xsZXInKTtcblxuICAgIC8vIHN0YXJ0IGFsbCB0aGUgdGhpbmdzXG4gICAgYXdhaXQgc2VydmVyLnN0YXJ0KCk7XG4gICAgcGxheWVyRXhwZXJpZW5jZS5zdGFydCgpO1xuICAgIGNvbnRyb2xsZXJFeHBlcmllbmNlLnN0YXJ0KCk7XG5cbiAgICBjb25zdCBvc2NDb25maWcgPSB7IC8vIHRoZXNlIGFyZSB0aGUgZGVmYXVsdHNcbiAgICAgIGxvY2FsQWRkcmVzczogJzAuMC4wLjAnLFxuICAgICAgbG9jYWxQb3J0OiA1NzEyMSxcbiAgICAgIHJlbW90ZUFkZHJlc3M6ICcxMjcuMC4wLjEnLFxuICAgICAgcmVtb3RlUG9ydDogNTcxMjIsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBvc2NTdGF0ZU1hbmFnZXIgPSBuZXcgU3RhdGVNYW5hZ2VyT3NjKHNlcnZlci5zdGF0ZU1hbmFnZXIsIG9zY0NvbmZpZyk7XG4gICAgYXdhaXQgb3NjU3RhdGVNYW5hZ2VyLmluaXQoKTtcblxuICAgIGNvbnN0IHBsYXllcnMgPSBuZXcgU2V0KCk7XG4gICAgbGV0IG5vdGVDb3VudGVyID0gMDtcbiAgICBjb25zdCBtb2RDb3VudGVyID0gMztcblxuICAgIHNlcnZlci5zdGF0ZU1hbmFnZXIub2JzZXJ2ZShhc3luYyAoc2NoZW1hTmFtZSwgc3RhdGVJZCwgbm9kZUlkKSA9PiB7XG4gICAgICBzd2l0Y2ggKHNjaGVtYU5hbWUpIHtcbiAgICAgICAgY2FzZSAncGxheWVyJzpcbiAgICAgICAgICBjb25zdCBwbGF5ZXJTdGF0ZSA9IGF3YWl0IHNlcnZlci5zdGF0ZU1hbmFnZXIuYXR0YWNoKHNjaGVtYU5hbWUsIHN0YXRlSWQpO1xuICAgICAgICAgIHBsYXllclN0YXRlLm9uRGV0YWNoKCgpID0+IHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHRoaW5nc1xuICAgICAgICAgICAgcGxheWVycy5kZWxldGUocGxheWVyU3RhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBsYXllcnMuYWRkKHBsYXllclN0YXRlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy9SZWNlaXZpbmcgbm90ZXMgZnJvbSBNYXggYnkgT1NDXG4gICAgc2NvcmUuc3Vic2NyaWJlKGFzeW5jIHVwZGF0ZXMgPT4ge1xuICAgICAgaWYgKHVwZGF0ZXMuaGFzT3duUHJvcGVydHkoJ25vdGUnKSkge1xuICAgICAgICBjb25zdCBub3RlRGljdCA9IHVwZGF0ZXMubm90ZTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZURpY3QpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3RlRGljdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy9QYXJzaW5nIE1heCBsaXN0IGludG8gc210aCByZWFkYWJsZSBieSBqc1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRTdHIgPSBub3RlRGljdFtpXS5lbnZlbG9wcGUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IGVudiA9IFtdO1xuICAgICAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBzcGxpdFN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJwID0gW107XG4gICAgICAgICAgICAgIGJwLnB1c2gocGFyc2VGbG9hdChzcGxpdFN0cltpICsgMV0pKTtcbiAgICAgICAgICAgICAgYnAucHVzaChwYXJzZUZsb2F0KHNwbGl0U3RyW2kgKyAyXSkpO1xuICAgICAgICAgICAgICBicC5wdXNoKHBhcnNlRmxvYXQoc3BsaXRTdHJbaSArIDNdKSk7XG4gICAgICAgICAgICAgIGVudi5wdXNoKGJwKTtcbiAgICAgICAgICAgICAgaSArPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm90ZURpY3RbaV0uZW52ZWxvcHBlID0gZW52O1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vUGFyc2luZyBNYXggbGlzdCBpbnRvIHNtdGggcmVhZGFibGUgYnkganNcbiAgICAgICAgICBjb25zdCBzcGxpdFN0ciA9IG5vdGVEaWN0LmVudmVsb3BwZS5zcGxpdCgnICcpO1xuICAgICAgICAgIGNvbnN0IGVudiA9IFtdO1xuICAgICAgICAgIGxldCBpID0gMTtcbiAgICAgICAgICB3aGlsZSAoaSA8IHNwbGl0U3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJwID0gW107XG4gICAgICAgICAgICBicC5wdXNoKHBhcnNlRmxvYXQoc3BsaXRTdHJbaSArIDFdKSk7XG4gICAgICAgICAgICBicC5wdXNoKHBhcnNlRmxvYXQoc3BsaXRTdHJbaSArIDJdKSk7XG4gICAgICAgICAgICBicC5wdXNoKHBhcnNlRmxvYXQoc3BsaXRTdHJbaSArIDNdKSk7XG4gICAgICAgICAgICBlbnYucHVzaChicCk7XG4gICAgICAgICAgICBpICs9IDU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vdGVEaWN0LmVudmVsb3BwZSA9IGVudjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9EaXNwYXRjaCBub3RlIGFtb25nIHBsYXllcnNcbiAgICAgICAgcGxheWVycy5mb3JFYWNoKHBsYXllclN0YXRlID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IHBsYXllclN0YXRlLmdldCgnaWQnKTtcbiAgICAgICAgICBpZiAoaWQgJSBtb2RDb3VudGVyID09PSBub3RlQ291bnRlcikge1xuICAgICAgICAgICAgcGxheWVyU3RhdGUuc2V0KHsgbm90ZTogbm90ZURpY3QsIHBsYXlUaW1lOiBzeW5jLmdldFN5bmNUaW1lKCkgKyAwLjIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgICAgXG4gICAgICAgIG5vdGVDb3VudGVyID0gKG5vdGVDb3VudGVyKzEpICUgbW9kQ291bnRlcjtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgfVxufSkoKTtcblxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKHJlYXNvbiwgcCkgPT4ge1xuICBjb25zb2xlLmxvZygnPiBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb24nKTtcbiAgY29uc29sZS5sb2cocmVhc29uKTtcbn0pO1xuXG4iXX0=