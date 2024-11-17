import { Router } from 'express';

import  {getEspecialidad} from '../controller/especialidad.controller';

const router = Router();

router.get('/', getEspecialidad);

export default router;