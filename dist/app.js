"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

//Importar modulo de express
//Ver peticiones con el modulo morgan
//Permite hacer operaciones desde cualquier otro servidor
//Importar las rutas
//Ejecuta el modulo y guarda el objeto que genera
var app = (0, _express["default"])(); //configuracion express

app.set("port", process.env.PORT || 3000); //Middlewares
//Permite ver las peticiones por consola

app.use((0, _morgan["default"])("dev")); //Se utiliza para que el servidor pueda entener metodos json

app.use(_express["default"].json()); //Otros servidores pueden hacer peticiones

app.use((0, _cors["default"])()); //Entender peticiones que van llegando desde un formulario html

app.use(_express["default"].urlencoded({
  extended: false
})); //rutas

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to my application"
  });
});
app.use("/api/tasks", _tasks["default"]);
var _default = app;
exports["default"] = _default;