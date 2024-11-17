"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _database = require("./database");
var _empleado = _interopRequireDefault(require("./routes/empleado.routes"));
var _regTurno = _interopRequireDefault(require("./routes/reg-turno.routes"));
var _citas = _interopRequireDefault(require("./routes/citas.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _database.getConnection)();
var app = (0, _express["default"])();
app.set('port', _config["default"].port);

// Ruta para la raíz
app.get('/', function (req, res) {
  res.send('Hospital API');
});
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use('/api/medico', _empleado["default"]);
app.use('/api/turno', _regTurno["default"]);
app.use('/api/citas', _citas["default"]);
var _default = exports["default"] = app;