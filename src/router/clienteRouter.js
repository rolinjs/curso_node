import express from 'express';

import {
    listarClientes,
    crearClienteController,
    buscarClienteIdController,
    editarClienteController
} from '../controllers/ClienteController.js';

const router = express.Router();

router.get('/', listarClientes);
router.post('/', crearClienteController);
router.get('/:id', buscarClienteIdController);
router.put('/:id', editarClienteController);


export default router;