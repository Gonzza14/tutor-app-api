//importar el modelo
import Task from "../models/Task";

//importar configuracion de paginacion
import { getPagination } from "../libs/pagination";

//Exportar funcion que busca todos los registros del modelo
export const findAllTasks = async (req, res) => {
  try {
    //Extraemos el limite, offset y titulo de la query
    const { size, page, title } = req.query;

    //condicion para buscar por titulo
    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};

    //configuracion de paginacion
    const { limit, offset } = getPagination(page, size);

    //Trae todos los datos de la coleccion y los muestra
    const data = await Task.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the tasks",
    });
  }
};

//Exportar funcion que crea un registro
export const createTask = async (req, res) => {
  //validamos si no se recibe el titulo
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  //Crear task
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });

    //Guardar en la base de datos
    const taskSaved = await newTask.save();

    //ver los datos que el cliente envia al servidor
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating a tasks",
    });
  }
};

//Exportar funcion que busca un registro por id
export const findOneTask = async (req, res) => {
  //Extraemos el id de los parametros
  const { id } = req.params;
  try {
    //Buscar por id
    const task = await Task.findById(id);

    //Validacion si la tarea no existe
    if (!task)
      return res
        .status(404)
        .json({ message: `Task with id ${id} does not exists` });
    //mostrar tarea
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error Retriving Task with id: ${id}`,
    });
  }
};

//Exportar funcion que elimina un registro
export const deleteTask = async (req, res) => {
  //Extraemos el id de los parametros
  const { id } = req.params;
  try {
    //Buscar y borrar por id
    const data = await Task.findByIdAndDelete(id);
    //Mostrar un objeto
    res.json({
      message: `${data.title} Task were deleted succesfully`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Cannot delete task with id: ${id}`,
    });
  }
};

//Exportar funcion de tareas hechas
export const findAllDoneTasks = async (req, res) => {
  try {
    //Trae todas las tareas que esten realizdas
    const tasks = await Task.find({ done: true });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the tasks",
    });
  }
};

//Exportar funcion que actualice
export const updateTask = async (req, res) => {
  //Extraemos el id de los parametros
  const { id } = req.params;
  try {
    //Buscar por id y actualizar
    const updatedTask = await Task.findByIdAndUpdate(id, req.body);

    //Validacion si la tarea no existe
    if (!updatedTask)
      return res
        .status(404)
        .json({ message: `Task with id ${id} does not exists` });

    res.json({ message: "Task was updated succesfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong updating a task",
    });
  }
};
