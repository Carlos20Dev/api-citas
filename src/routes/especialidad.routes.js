import { Router } from 'express';

import  {crearEspecialidad, getEspecialidad} from '../controller/especialidad.controller';

const router = Router();

router.get('/', getEspecialidad);
router.post('/', crearEspecialidad);

export default router;