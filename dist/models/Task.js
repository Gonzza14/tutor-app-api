"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

//importar el esquema y modelo de mongoose
//importar paginacion
//Crea un Schema que define que datos se guardaran
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
}); //Agregar plugin de paginacion

taskSchema.plugin(_mongoosePaginateV["default"]); //Exportar funcion que devuelve un objeto con metodos para interactuar con el modelo

var _default = (0, _mongoose.model)("Task", taskSchema);

exports["default"] = _default;