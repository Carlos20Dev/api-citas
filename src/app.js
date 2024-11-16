import express from 'express'
import config from './config'
import { getConnection } from './database'
import empleadoRoutes from './routes/empleado.routes'

getConnection()

const app = express()

app.set('port',config.port)

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Hospital API')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/empleado',empleadoRoutes)

export default app