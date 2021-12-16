"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _json = _interopRequireDefault(require("json5"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getConfig(ENV) {
  let envConfig = null;
  let appConfig = null;
  let servicesConfig = null; // parse env config

  try {
    const envConfigPath = _path.default.join('config', 'env', `${ENV}.json`);

    envConfig = _json.default.parse(_fs.default.readFileSync(envConfigPath, 'utf-8'));

    if (process.env.PORT) {
      envConfig.port = process.env.PORT;
    }
  } catch (err) {
    console.log(`Invalid "${ENV}" env config file`);
    process.exit(0);
  } // parse app config


  try {
    const appConfigPath = _path.default.join('config', 'application.json');

    appConfig = _json.default.parse(_fs.default.readFileSync(appConfigPath, 'utf-8'));
  } catch (err) {
    console.log(`Invalid app config file`);
    process.exit(0);
  } // parse services config
  // try {
  //   const servicesConfigPath = path.join('config', 'services.json');
  //   servicesConfig = JSON5.parse(fs.readFileSync(servicesConfigPath, 'utf-8'));
  // } catch(err) {
  //   console.log(`Invalid services config file`);
  //   process.exit(0);
  // }


  return {
    env: envConfig,
    app: appConfig
  };
}

var _default = getConfig;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldENvbmZpZy5qcyJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJFTlYiLCJlbnZDb25maWciLCJhcHBDb25maWciLCJzZXJ2aWNlc0NvbmZpZyIsImVudkNvbmZpZ1BhdGgiLCJwYXRoIiwiam9pbiIsIkpTT041IiwicGFyc2UiLCJmcyIsInJlYWRGaWxlU3luYyIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwicG9ydCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJleGl0IiwiYXBwQ29uZmlnUGF0aCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDdEIsTUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLElBQXJCLENBSHNCLENBSXRCOztBQUNBLE1BQUk7QUFDRixVQUFNQyxhQUFhLEdBQUdDLGNBQUtDLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEtBQXBCLEVBQTRCLEdBQUVOLEdBQUksT0FBbEMsQ0FBdEI7O0FBQ0FDLElBQUFBLFNBQVMsR0FBR00sY0FBTUMsS0FBTixDQUFZQyxZQUFHQyxZQUFILENBQWdCTixhQUFoQixFQUErQixPQUEvQixDQUFaLENBQVo7O0FBRUEsUUFBSU8sT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQWhCLEVBQXNCO0FBQ3BCWixNQUFBQSxTQUFTLENBQUNhLElBQVYsR0FBaUJILE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUE3QjtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU1FLEdBQU4sRUFBVztBQUNYQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxZQUFXakIsR0FBSSxtQkFBNUI7QUFDQVcsSUFBQUEsT0FBTyxDQUFDTyxJQUFSLENBQWEsQ0FBYjtBQUNELEdBZnFCLENBZ0J0Qjs7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLGFBQWEsR0FBR2QsY0FBS0MsSUFBTCxDQUFVLFFBQVYsRUFBb0Isa0JBQXBCLENBQXRCOztBQUNBSixJQUFBQSxTQUFTLEdBQUdLLGNBQU1DLEtBQU4sQ0FBWUMsWUFBR0MsWUFBSCxDQUFnQlMsYUFBaEIsRUFBK0IsT0FBL0IsQ0FBWixDQUFaO0FBQ0QsR0FIRCxDQUdFLE9BQU1KLEdBQU4sRUFBVztBQUNYQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSx5QkFBYjtBQUNBTixJQUFBQSxPQUFPLENBQUNPLElBQVIsQ0FBYSxDQUFiO0FBQ0QsR0F2QnFCLENBeUJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFPO0FBQUVOLElBQUFBLEdBQUcsRUFBRVgsU0FBUDtBQUFrQm1CLElBQUFBLEdBQUcsRUFBRWxCO0FBQXZCLEdBQVA7QUFDRDs7ZUFFY0gsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgSlNPTjUgZnJvbSAnanNvbjUnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIGdldENvbmZpZyhFTlYpIHtcbiAgbGV0IGVudkNvbmZpZyA9IG51bGw7XG4gIGxldCBhcHBDb25maWcgPSBudWxsO1xuICBsZXQgc2VydmljZXNDb25maWcgPSBudWxsO1xuICAvLyBwYXJzZSBlbnYgY29uZmlnXG4gIHRyeSB7XG4gICAgY29uc3QgZW52Q29uZmlnUGF0aCA9IHBhdGguam9pbignY29uZmlnJywgJ2VudicsIGAke0VOVn0uanNvbmApO1xuICAgIGVudkNvbmZpZyA9IEpTT041LnBhcnNlKGZzLnJlYWRGaWxlU3luYyhlbnZDb25maWdQYXRoLCAndXRmLTgnKSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuUE9SVCkge1xuICAgICAgZW52Q29uZmlnLnBvcnQgPSBwcm9jZXNzLmVudi5QT1JUO1xuICAgIH1cbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBcIiR7RU5WfVwiIGVudiBjb25maWcgZmlsZWApO1xuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfVxuICAvLyBwYXJzZSBhcHAgY29uZmlnXG4gIHRyeSB7XG4gICAgY29uc3QgYXBwQ29uZmlnUGF0aCA9IHBhdGguam9pbignY29uZmlnJywgJ2FwcGxpY2F0aW9uLmpzb24nKTtcbiAgICBhcHBDb25maWcgPSBKU09ONS5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYXBwQ29uZmlnUGF0aCwgJ3V0Zi04JykpO1xuICB9IGNhdGNoKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBJbnZhbGlkIGFwcCBjb25maWcgZmlsZWApO1xuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfVxuXG4gIC8vIHBhcnNlIHNlcnZpY2VzIGNvbmZpZ1xuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IHNlcnZpY2VzQ29uZmlnUGF0aCA9IHBhdGguam9pbignY29uZmlnJywgJ3NlcnZpY2VzLmpzb24nKTtcbiAgLy8gICBzZXJ2aWNlc0NvbmZpZyA9IEpTT041LnBhcnNlKGZzLnJlYWRGaWxlU3luYyhzZXJ2aWNlc0NvbmZpZ1BhdGgsICd1dGYtOCcpKTtcbiAgLy8gfSBjYXRjaChlcnIpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhgSW52YWxpZCBzZXJ2aWNlcyBjb25maWcgZmlsZWApO1xuICAvLyAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgLy8gfVxuXG4gIHJldHVybiB7IGVudjogZW52Q29uZmlnLCBhcHA6IGFwcENvbmZpZyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb25maWc7XG4iXX0=