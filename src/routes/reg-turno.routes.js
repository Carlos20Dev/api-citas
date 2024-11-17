import { Router } from "express";
import { getRegistroTurno, getRegistroTurnoById, createRegistroTurno, updateRegistroTurno, deleteRegistroTurno } from "../controller/reg-turno.controller";

const router = Router()

router.get('/', getRegistroTurno)
router.get('/:id_rt', getRegistroTurnoById)
router.post('/', createRegistroTurno)
router.put('/:id_rt', updateRegistroTurno)
router.delete('/:id_rt', deleteRegistroTurno)

export default router