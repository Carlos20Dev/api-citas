"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _especialidad = require("../controller/especialidad.controller");
var router = (0, _express.Router)();
router.get('/', _especialidad.getEspecialidad);
router.post('/', _especialidad.crearEspecialidad);
var _default = exports["default"] = router;