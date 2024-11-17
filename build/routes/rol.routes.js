"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _rol = require("../controller/rol.controller");
var router = (0, _express.Router)();
router.get('/', _rol.getRol);
var _default = exports["default"] = router;