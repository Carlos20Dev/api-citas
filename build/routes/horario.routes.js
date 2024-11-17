"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _horario = require("../controller/horario.controller");
var router = (0, _express.Router)();
router.get('/', _horario.getHorario);
var _default = exports["default"] = router;