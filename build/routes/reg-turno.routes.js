"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _regTurno = require("../controller/reg-turno.controller");
var router = (0, _express.Router)();
router.get('/', _regTurno.getRegistroTurno);
router.get('/:id_rt', _regTurno.getRegistroTurnoById);
router.get('/medico/:id_medico', _regTurno.getRegistroTurnoByIdMedico);
router.post('/', _regTurno.createRegistroTurno);
router.put('/:id_rt', _regTurno.updateRegistroTurno);
router["delete"]('/:id_rt', _regTurno.deleteRegistroTurno);
var _default = exports["default"] = router;