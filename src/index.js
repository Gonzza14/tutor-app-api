//importar configuracion del servidor
import app from "./app";

//importar conexion de base de datos
import "./database";

//Puerto de escucha del servidor y arranca la aplicacion
app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
