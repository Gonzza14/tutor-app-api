//Importar modulo de express
import express from "express";

//Ver peticiones con el modulo morgan
import morgan from "morgan";

//Permite hacer operaciones desde cualquier otro servidor
import cors from "cors";

//Importar las rutas
import ContactosRoutes from "./routes/contactos.routes";

//Ejecuta el modulo y guarda el objeto que genera
const app = express();

//configuracion express
app.set("port", process.env.PORT || 3000);

//Middlewares
//Permite ver las peticiones por consola
app.use(morgan("dev"));
//Se utiliza para que el servidor pueda entener metodos json
app.use(express.json());
//Otros servidores pueden hacer peticiones
app.use(cors());

//Entender peticiones que van llegando desde un formulario html
app.use(express.urlencoded({ extended: false }));

//rutas
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});
app.use("/api/contactos", ContactosRoutes);

export default app;
