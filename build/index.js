"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_app["default"].listen(_app["default"].get('port'), function () {
  return console.log('server on port', _app["default"].get('port'));
});