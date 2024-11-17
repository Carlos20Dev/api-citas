"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _empleado = require("../controller/empleado.controller");
var router = (0, _express.Router)();
router.get('/', _empleado.getMedico);
router.get('/:id_medico', _empleado.getMedicoById);
router.post('/', _empleado.crearMedico);
router.put('/:id_medico', _empleado.actualizarMedico);
router["delete"]('/:id_medico', _empleado.eliminarMedico);
var _default = exports["default"] = router;