"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _empleado = require("../controller/empleado.controller");
var router = (0, _express.Router)();
router.get('/', _empleado.getEmpleado);
router.get('/:id_empleado', _empleado.getEmpleadoById);
router.post('/', _empleado.crearEmpleado);
router["delete"]('/:id_empleado', _empleado.eliminarEmpleado);
var _default = exports["default"] = router;