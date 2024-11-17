import { Router } from 'express';

import  {getRol} from '../controller/rol.controller';

const router = Router();

router.get('/', getRol);

export default router;