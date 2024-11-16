import { Router } from "express";
import { getEmpleado, getEmpleadoById, crearEmpleado, eliminarEmpleado } from "../controller/empleado.controller";

const router = Router()

router.get('/empleado', getEmpleado)
router.get('/empleado/:id_empleado', getEmpleadoById)
router.post('/empleado', crearEmpleado)
router.delete('/empleado/:id', eliminarEmpleado)

export default router