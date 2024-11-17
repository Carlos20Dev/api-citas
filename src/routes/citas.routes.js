import { Router } from "express";
import { getCitas, getCitasById, crearCitas, actualizarCitas, eliminarCitas } from "../controller/citas.controller";

const router = Router()

router.get('/', getCitas)
router.get('/:id_citas', getCitasById)
router.post('/', crearCitas)
router.put('/:id_citas', actualizarCitas)
router.delete('/:id_citas', eliminarCitas)

export default router