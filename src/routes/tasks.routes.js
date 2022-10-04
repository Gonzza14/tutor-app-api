//Permite definir rutas y agruparlas
import {Router} from 'express'

//importar todas las funciones del controlador
import * as taskController from '../controllers/task.controller'

//Se ejecuta y se guarda
const router = Router()

//rutas
router.get('/', taskController.findAllTasks)
router.post('/', taskController.createTask);


//exportar
export default router;