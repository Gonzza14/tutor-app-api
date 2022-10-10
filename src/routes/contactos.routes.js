//Permite definir rutas y agruparlas
import {Router} from 'express'

//importar todas las funciones del controlador
import * as contactoController from '../controllers/contacto.controller'

//Se ejecuta y se guarda
const router = Router()

//rutas
router.get('/', contactoController.findAllContactos)

//crear tarea
router.post('/', contactoController.createContacto);

//tareas hechas
//router.get('/done', contactoController.findAllDoneTasks)

//Buscar una tarea por id
router.get('/:id', contactoController.findOneContacto) 

//borrar tarea
router.delete('/:id', contactoController.deleteContacto)

//actualizar tarea
router.put('/:id', contactoController.updateContacto)

//exportar
export default router;