import { Router } from "express";
import { getMedico, getMedicoById, crearMedico, actualizarMedico, eliminarMedico, getMedicoByEspec } from "../controller/empleado.controller";

const router = Router()

router.get('/', getMedico)
router.get('/:id_medico', getMedicoById)
router.get('/especialidad/:id_espec', getMedicoByEspec)
router.post('/', crearMedico)
router.put('/:id_medico', actualizarMedico)
router.delete('/:id_medico', eliminarMedico)

export default router