//importar el esquema y modelo de mongoose
import { Schema, model } from "mongoose";

//importar paginacion
import mongoosePaginate from "mongoose-paginate-v2";

//Crea un Schema que define que datos se guardaran
const contactoSchema = new Schema(
  {
    contacto: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: String,
      trim: true,
    },
    extension: {
      type: String,
      trim: true,
    },
    correo: {
      type: String,
      trim: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
//Agregar plugin de paginacion
contactoSchema.plugin(mongoosePaginate);

//Exportar funcion que devuelve un objeto con metodos para interactuar con el modelo
export default model("Contacto", contactoSchema);
