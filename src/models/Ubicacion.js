//importar el esquema y modelo de mongoose
import { Schema, model } from "mongoose";

//importar paginacion
import mongoosePaginate from "mongoose-paginate-v2";

//Crea un Schema que define que datos se guardaran
const ubicacionSchema = new Schema(
    {
      nombre: {
        type: String,
        required: true,
        trim: true,
      },
      informacion: {
        type: String,
        required: true,
        trim: true,
      },
      codigo: {
        type: String,
        required: true,
        trim: true,
      },
      latitud: {
        type: Number,
        required: true,
        trim: true,
      },
      longitud: {
        type: Number,
        required: true,
        trim: true,
      },
      tipo: {
        type: String,
        required: true,
        trim: true,
      },
      facultad: {
        type: String,
        required: true,
        trim: true,
      },
      imagenes:  {
        type: [{ type: Map, of: String}]
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  //Agregar plugin de paginacion
  ubicacionSchema.plugin(mongoosePaginate);
  
  //Exportar funcion que devuelve un objeto con metodos para interactuar con el modelo
  export default model("Ubicacion", ubicacionSchema);
  
