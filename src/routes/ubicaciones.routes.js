//Permite definir rutas y agruparlas
import {Router} from 'express'

//importar todas las funciones del controlador
import * as ubicacionController from '../controllers/ubicacion.controller'

//Se ejecuta y se guarda
const router = Router()

//rutas
router.get('/', ubicacionController.findAllUbicaciones)

//crear ubicacion
router.post('/', ubicacionController.createUbicacion);

//Buscar una ubicacion por id
router.get('/:id', ubicacionController.findOneUbicacion) 

//borrar ubicacion
router.delete('/:id', ubicacionController.deleteUbicacion)

//actualizar ubicacion
router.put('/:id', ubicacionController.updateUbicacion)

//Busqueda de ubicacion por nombre
router.get('/busqueda/:nombre', ubicacionController.busquedaUbicacion)

//Filtrado de ubicacion por nombre
router.get('/filtrado/:nombre', ubicacionController.filtroUbicacion)

//exportar
export default router;