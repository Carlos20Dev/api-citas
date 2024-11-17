"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuario = require("../controller/usuario.controller");
var router = (0, _express.Router)();
router.get('/', _usuario.getUsuario);
router.get('/:id', _usuario.getUsuarioById);
router.post('/', _usuario.crearUsuario);
router.put('/:id', _usuario.updateUsuario);
router["delete"]('/:id', _usuario.deleteUsuario);
var _default = exports["default"] = router;