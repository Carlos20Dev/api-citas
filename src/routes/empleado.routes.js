import { Router } from "express";
import { getMedico, getMedicoById, crearMedico, actualizarMedico, eliminarMedico } from "../controller/empleado.controller";

const router = Router()

router.get('/', getMedico)
router.get('/:id_medico', getMedicoById)
router.post('/', crearMedico)
router.put('/:id_medico', actualizarMedico)
router.delete('/:id_medico', eliminarMedico)

export default router