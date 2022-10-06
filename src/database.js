//importar mongoose
import mongoose from "mongoose";

//importar la configuracion para cargar variables de entorno
import config from "./config";

//Conectar a base de datos
(async () => {
  try {
    const db = await mongoose.connect(config.mongoDBURL);
    //mostrar nombre de la base de datos conectada
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
