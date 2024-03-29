//importar el modelo
import Contacto from "../models/Contacto";

//importar configuracion de paginacion
//import { getPagination } from "../libs/pagination";

//Exportar funcion que busca todos los registros del modelo
export const findAllContactos = async (req, res) => {
  try {
    const contactos = await Contacto.find();
    res.json(contactos);
    //Extraemos el limite, offset y titulo de la query
    /*const { size, page, contacto } = req.query;

    //condicion para buscar por titulo
    const condition = contacto
      ? {
          contacto: { $regex: new RegExp(contacto), $options: "i" },
        }
      : {};

    //configuracion de paginacion
    const { limit, offset } = getPagination(page, size);

    //Trae todos los datos de la coleccion y los muestra
    const data = await Contacto.paginate(condition, { offset, limit });
    res.json({
      contactos: data.docs,
      totalItems: data.totalDocs,
      totalPages: data.totalPages,
      currentPage: data.page,
    });*/
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo salió mal al recuperar los contactos",
    });
  }
};

//Exportar funcion que crea un registro
export const createContacto = async (req, res) => {
  //validamos si no se recibe el titulo
  if (!req.body.contacto || !req.body.telefono) {
    return res.status(400).send({ message: "Existe contenido vacío" });
  }
  //Crear contacto
  try {
    const newContacto = new Contacto({
      contacto: req.body.contacto,
      telefono: req.body.telefono,
      extension: req.body.extension,
      correo: req.body.correo,
      //done: req.body.done ? req.body.done : false,
    });

    //Guardar en la base de datos
    const contactoSaved = await newContacto.save();

    //ver los datos que el cliente envia al servidor
    res.json(contactoSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo salió mal al crear el contacto",
    });
  }
};

//Exportar funcion que busca un registro por id
export const findOneContacto = async (req, res) => {
  //Extraemos el id de los parametros
  const { id } = req.params;
  try {
    //Buscar por id
    const contacto = await Contacto.findById(id);

    //Validacion si el contacto no existe
    if (!contacto)
      return res
        .status(404)
        .json({ message: `El contacto con el identificador ${id} no existe` });
    //mostrar tarea
    res.json(contacto);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error al recuperar el contacto con el identificador: ${id}`,
    });
  }
};

//Exportar funcion que elimina un registro
export const deleteContacto= async (req, res) => {
  //Extraemos el id de los parametros
  const { id } = req.params;
  try {
    //Buscar y borrar por id
    const data = await Contacto.findByIdAndDelete(id);
    //Mostrar un objeto
    res.json({
      message: `El contacto ${data.contacto} ha sido eliminado con exito`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `No se puede eliminar el contacto con el identificador: ${id}`,
    });
  }
};

//Exportar funcion de tareas hechas
/*export const findAllDoneTasks = async (req, res) => {
  try {
    //Trae todas las tareas que esten realizdas
    const tasks = await Task.find({ done: true });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the tasks",
    });
  }
};*/

//Exportar funcion que actualice
export const updateContacto = async (req, res) => {
  //Extraemos el id de los parametros
  const { id } = req.params;
  try {
    //Buscar por id y actualizar
    const updatedContacto = await Contacto.findByIdAndUpdate(id, req.body);

    //Validacion si la tarea no existe
    if (!updatedContacto)
      return res
        .status(404)
        .json({ message: `El contacto con el identificador ${id} no existe` });

    res.json({ message: "El contacto ha sido actualizada con exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo salió mal al actualizar el contacto",
    });
  }
};
