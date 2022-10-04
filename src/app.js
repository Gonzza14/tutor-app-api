//Importar modulo de express
import express from 'express';

//Importar las rutas
import TasksRoutes from './routes/tasks.routes'

//Ejecuta el modulo y guarda el objeto que genera
const app = express()

//configuracion express
app.set('port', process.env.PORT || 3000);
//Se utiliza para que el servidor pueda entener metodos json
app.use(express.json())

//rutas
app.get('/', (req, res) => {
    res.json({message: 'Welcome to my application'})
})
app.use('/api/tasks',TasksRoutes)

export default app;
