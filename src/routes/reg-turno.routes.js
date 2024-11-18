import { Router } from "express";
import { getRegistroTurno, getRegistroTurnoById, createRegistroTurno, updateRegistroTurno, deleteRegistroTurno, getRegistroTurnoByIdMedico } from "../controller/reg-turno.controller";

const router = Router()

router.get('/', getRegistroTurno)
router.get('/:id_rt', getRegistroTurnoById)
router.get('/medico/:id_medico', getRegistroTurnoByIdMedico)
router.post('/', createRegistroTurno)
router.put('/:id_rt', updateRegistroTurno)
router.delete('/:id_rt', deleteRegistroTurno)

export default router