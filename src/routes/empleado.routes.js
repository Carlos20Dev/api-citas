import { Router } from "express";
import { getEmpleado, getEmpleadoById, crearEmpleado, eliminarEmpleado } from "../controller/empleado.controller";

const router = Router()

router.get('/', getEmpleado)
router.get('/:id_empleado', getEmpleadoById)
router.post('/', crearEmpleado)
router.delete('/:id_empleado', eliminarEmpleado)

export default router