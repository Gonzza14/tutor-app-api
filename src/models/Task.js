//importar el esquema y modelo de mongoose
import { Schema, model } from "mongoose";

//importar paginacion
import mongoosePaginate from "mongoose-paginate-v2";

//Crea un Schema que define que datos se guardaran
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
//Agregar plugin de paginacion
taskSchema.plugin(mongoosePaginate);

//Exportar funcion que devuelve un objeto con metodos para interactuar con el modelo
export default model("Task", taskSchema);
