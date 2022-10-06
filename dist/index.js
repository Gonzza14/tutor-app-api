"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

//importar configuracion del servidor
//importar conexion de base de datos
//Puerto de escucha del servidor y arranca la aplicacion
_app["default"].listen(_app["default"].get("port"));

console.log("Server on port", _app["default"].get("port"));