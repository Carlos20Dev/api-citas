"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _citas = require("../controller/citas.controller");
var router = (0, _express.Router)();
router.get('/', _citas.getCitas);
router.get('/:id_citas', _citas.getCitasById);
router.post('/', _citas.crearCitas);
router.put('/:id_citas', _citas.actualizarCitas);
router["delete"]('/:id_citas', _citas.eliminarCitas);
var _default = exports["default"] = router;