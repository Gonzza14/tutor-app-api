//importar el modelo 
import Task from '../models/Task'

//Exportar funcion que busca todos los registros del modelo 
export const findAllTasks = async (req, res) =>{
    //Trae todos los datos de la coleccion y los muestra
    const tasks = await Task.find()
    res.json(tasks)
}

//Exportar funcion que crea un registro 
export const createTask = async (req, res) =>{
    //Crear task
    const newTask = new Task({title: req.body.title, description: req.body.description})

    //Guardar en la base de datos
    const taskSaved = await newTask.save();

    //ver los datos que el cliente envia al servidor
    res.json(taskSaved)
}