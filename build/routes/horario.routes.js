"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _horario = require("../controller/horario.controller");
var router = (0, _express.Router)();
router.get('/', _horario.getHorario);
router.get('/:id_horario', _horario.getHorarioById);
router.get('/turno/:id_medico', _horario.getHorarioByMedico);
var _default = exports["default"] = router;