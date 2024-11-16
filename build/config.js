"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = exports["default"] = {
  port: process.env.PORT || 3000,
  dbuser: process.env.DB_USER || '',
  dbpassword: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || '',
  database: process.env.DB_DATABASE || ''
};