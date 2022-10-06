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
    const newTask = new Task({
        title: req.body.title, 
        description: req.body.description, 
        done: req.body.done ? req.body.done : false
    })

    //Guardar en la base de datos
    const taskSaved = await newTask.save();

    //ver los datos que el cliente envia al servidor
    res.json(taskSaved)
}

//Exportar funcion que busca un registro por id
export const findOneTask = async (req, res) =>{
    //Buscar por id
    const task = await Task.findById(req.params.id)
    //mostrar tarea
    res.json(task)
}

//Exportar funcion que elimina un registro
export const deleteTask = async (req, res) => {
    //Buscar y borrar por id
    const data = await Task.findByIdAndDelete(req.params.id)
    //Mostrar un objeto
    res.json({
        message: `${data.title} Task were deleted succesfully`
    })
}

//Exportar funcion de tareas hechas
export const findAllDoneTasks = async(req, res) => {
      //Trae todas las tareas que esten realizdas
      const tasks = await Task.find({done : true})
      res.json(tasks)
}

//Exportar funcion que actualice 
export const updateTask = async (req, res) => {
    //Buscar por id y actualizar 
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Task was updated succesfully'})
}