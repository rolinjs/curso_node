import express from 'express';

import {
    listarClientes,
    crearClienteController,
    buscarClienteIdController,
    editarClienteController,
    cambiarEstadoClienteController
} from '../controllers/ClienteController.js';

const router = express.Router();

router.get('/', listarClientes);
router.post('/', crearClienteController);
router.get('/:id', buscarClienteIdController);
router.put('/:id', editarClienteController);
router.patch('/:id/estado', cambiarEstadoClienteController)


export default router;