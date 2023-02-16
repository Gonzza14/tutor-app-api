import {Router} from 'express'

import * as ruta from '../direction_api/ruta'

const router = Router()

router.get('/', ruta.obtenerRuta)

export default router