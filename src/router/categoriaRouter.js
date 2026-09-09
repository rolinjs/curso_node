import express from 'express';

import {
    obtenerCategoriasController
} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/', obtenerCategoriasController);


export default router;

