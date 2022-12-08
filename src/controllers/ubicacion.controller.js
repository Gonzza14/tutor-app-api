//importar el modelo
import Ubicacion from "../models/Ubicacion";

//Exportar funcion que busca todos los registros del modelo
export const findAllUbicaciones = async (req, res) => {
  try {
    const ubicaciones = await Ubicacion.find();
    res.json(ubicaciones);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo salió mal al recuperar las ubicaciones",
    });
  }
};

//Exportar funcion que crea un registro
export const createUbicacion = async (req, res) => {
    //validamos si no se recibe los campos requeridos
    if (!req.body.nombre || !req.body.informacion || !req.body.codigo || !req.body.latitud || !req.body.longitud || !req.body.tipo || !req.body.facultad) {
      return res.status(400).send({ message: "Existe contenido vacío" });
    }
    //Crear ubicacion
    try {
      const newUbicacion = new Ubicacion({
        nombre: req.body.nombre,
        informacion: req.body.informacion,
        codigo: req.body.codigo,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        tipo: req.body.tipo,
        facultad: req.body.facultad,
        imagenes: req.body.imagenes,
      });
  
      //Guardar en la base de datos
      const ubicacionSaved = await newUbicacion.save();
  
      //ver los datos que el cliente envia al servidor
      res.json(ubicacionSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Algo salió mal al crear la ubicación",
      });
    }
  };

//Exportar funcion que busca un registro por id
export const findOneUbicacion = async (req, res) => {
    //Extraemos el id de los parametros
    const { id } = req.params;
    try {
      //Buscar por id
      const ubicacion = await Ubicacion.findById(id);
  
      //Validacion si la ubicacion no existe
      if (!ubicacion)
        return res
          .status(404)
          .json({ message: `La ubicación con el identificador ${id} no existe` });
      //mostrar tarea
      res.json(ubicacion);
    } catch (error) {
      res.status(500).json({
        message: error.message || `Error al recuperar la ubicación con el identificador: ${id}`,
      });
    }
  };

//Exportar funcion que elimina un registro
export const deleteUbicacion= async (req, res) => {
    //Extraemos el id de los parametros
    const { id } = req.params;
    try {
      //Buscar y borrar por id
      const data = await Ubicacion.findByIdAndDelete(id);
      //Mostrar un objeto
      res.json({
        message: `La ubicación ${data.nombre} ha sido eliminada con exito`,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || `No se puede eliminar la ubicación con el identificador: ${id}`,
      });
    }
  };

  //Exportar funcion que actualice
export const updateUbicacion = async (req, res) => {
    //Extraemos el id de los parametros
    const { id } = req.params;
    try {
      //Buscar por id y actualizar
      const updatedUbicacion = await Ubicacion.findByIdAndUpdate(id, req.body);
  
      //Validacion si la tarea no existe
      if (!updatedUbicacion)
        return res
          .status(404)
          .json({ message: `La ubicación con el identificador ${id} no existe` });
  
      res.json({ message: "La ubicación ha sido actualizada con exito" });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Algo salió mal al actualizar la ubicación",
      });
    }
  };

  export const busquedaUbicacion = async (req, res) => {
    //Extraemos la ubicacion buscada de los parametros
    const busqueda = req.params
    try{
      //Definimos los datos a obtener
      const datos = {nombre: 1, latitud: 1, longitud: 1}
      //Busqueda por nombre
      const ubicacion = await Ubicacion.findOne(busqueda, datos)

      //Validacion si la ubicacion no existe
      if(!ubicacion){
        return res
        .status(404)
        .json({ message: `La ubicación con el nombre especifico de ${busqueda.nombre} no existe` })
      }
      res.json(ubicacion)
    }catch(error){
      res.status(500).json({
        message: error.message || `Error al recuperar la ubicación con el nombre de: ${busqueda.nombre}`,
      });
    }
  }

  export const filtroUbicacion = async (req, res) =>{
    //Extraemos la ubicacion buscada de los parametros
    const busqueda = {nombre: new RegExp(req.params.nombre, 'i')}
    try{
      //Definimos los datoa a obtener
      const datos = {nombre: 1, tipo: 1, codigo: 1, imagenes: 1}
      //Filtrado por nombre
      const ubicaciones = await Ubicacion.find(busqueda, datos)
       //Validacion si la ubicacion no existe
       if(!ubicaciones){
        return res
        .status(404)
        .json({ message: `La ubicación no existe` })
      }
      res.json(ubicaciones)
    }catch(error){
      res.status(500).json({
        message: error.message || `Error al recuperar la ubicación`,
      });
    }
  }
  