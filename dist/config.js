"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

//importar el metodo config
//Se ejecuta para cargar las variables de entorno
(0, _dotenv.config)(); //exportar un objeto con la variable de entorno

var _default = {
  mongoDBURL: process.env.MONGODB_URI || "mongodb://127.0.0.1/tutorappdb"
};
exports["default"] = _default;