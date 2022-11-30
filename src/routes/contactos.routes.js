//Permite definir rutas y agruparlas
import {Router} from 'express'

//importar todas las funciones del controlador
import * as contactoController from '../controllers/contacto.controller'

//Se ejecuta y se guarda
const router = Router()

//rutas
router.get('/', contactoController.findAllContactos)

//crear contacto
router.post('/', contactoController.createContacto);

//tareas hechas
//router.get('/done', contactoController.findAllDoneTasks)

//Buscar un contacto por id
router.get('/:id', contactoController.findOneContacto) 

//borrar contacto
router.delete('/:id', contactoController.deleteContacto)

//actualizar contacto
router.put('/:id', contactoController.updateContacto)

//exportar
export default router;