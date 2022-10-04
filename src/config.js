//importar el metodo config
import {config} from 'dotenv'

//Se ejecuta para cargar las variables de entorno
config();

//exportar un objeto con la variable de entorno
export default {
    mongoDBURL: process.env.MONGODB_URI
}