//importar el esquema y modelo de mongoose
import {Schema, model} from 'mongoose'

//Crea un Schema que define que datos se guardaran
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
});

//Exportar funcion que devuelve un objeto con metodos para interactuar con el modelo
export default model('Task',taskSchema)



