import { Router } from "express";
import { getMedico, getMedicoById, crearMedico, eliminarMedico } from "../controller/empleado.controller";

const router = Router()

router.get('/', getMedico)
router.get('/:id_empleado', getMedicoById)
router.post('/', crearMedico)
router.delete('/:id_empleado', eliminarMedico)

export default router