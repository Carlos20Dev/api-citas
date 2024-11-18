import { Router } from 'express';

import  {getHorario, getHorarioById, getHorarioByMedico} from '../controller/horario.controller';

const router = Router();

router.get('/', getHorario);
router.get('/:id_horario', getHorarioById);
router.get('/turno/:id_medico', getHorarioByMedico);

export default router;