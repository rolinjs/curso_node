import express from 'express';

import {
    obtenerCategoriasController,
    crearCategoriaController
} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/', obtenerCategoriasController);
router.post('/', crearCategoriaController);


export default router;

