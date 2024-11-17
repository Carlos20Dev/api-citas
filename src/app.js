import express from 'express'
import cors from 'cors'
import config from './config'
import { getConnection } from './database'
import medicoRoutes from './routes/empleado.routes'
import registroTurnoRoutes from './routes/reg-turno.routes'
import citasRoutes from './routes/citas.routes'

getConnection()

const app = express()

app.set('port',config.port)

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200,
}))

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Hospital API')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/medico',medicoRoutes)
app.use('/api/turno',registroTurnoRoutes)
app.use('/api/citas',citasRoutes)

export default app