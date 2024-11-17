import { Router } from 'express';

import  {getHorario} from '../controller/horario.controller';

const router = Router();

router.get('/', getHorario);

export default router;