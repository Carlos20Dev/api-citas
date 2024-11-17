import { Router } from 'express';

import  {getUsuario, getUsuarioById, crearUsuario, updateUsuario, deleteUsuario} from '../controller/usuario.controller';

const router = Router();

router.get('/', getUsuario);
router.get('/:id', getUsuarioById);
router.post('/', crearUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;