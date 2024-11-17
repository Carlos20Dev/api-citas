import express from 'express'
import cors from 'cors'
import config from './config'
import { getConnection } from './database'
import medicoRoutes from './routes/empleado.routes'
import registroTurnoRoutes from './routes/reg-turno.routes'
import citasRoutes from './routes/citas.routes'
import especialidadRoutes from './routes/especialidad.routes'
import horarioRoutes from './routes/horario.routes'
import rolRoutes from './routes/rol.routes'
import usuarioRoutes from './routes/usuario.routes'

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
app.use('/api/especialidad',especialidadRoutes)
app.use('/api/horario',horarioRoutes)
app.use('/api/rol',rolRoutes)
app.use('/api/usuario',usuarioRoutes)

export default app