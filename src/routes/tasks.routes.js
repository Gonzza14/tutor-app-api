//Permite definir rutas y agruparlas
import {Router} from 'express'

//importar todas las funciones del controlador
import * as taskController from '../controllers/task.controller'

//Se ejecuta y se guarda
const router = Router()

//rutas
router.get('/', taskController.findAllTasks)

//crear tarea
router.post('/', taskController.createTask);

//tareas hechas
router.get('/done', taskController.findAllDoneTasks)

//Buscar una tarea por id
router.get('/:id', taskController.findOneTask) 

//borrar tarea
router.delete('/:id', taskController.deleteTask)

//actualizar tarea
router.put('/:id', taskController.updateTask)

//exportar
export default router;