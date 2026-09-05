
import {
    obtenerClientes,
    crearCliente,
    obtenerClienteIdModel,
    editarClienteModel,
    cambiarEstadoClienteModel
} from '../model/clienteModel.js';

export const listarClientes = async (req, res) => {
    try {
        
        const clientes = await obtenerClientes();

        res.json(clientes);

    } catch (error) {
       res.status(500).json({
        mensaje: 'ERROR INTERNO EN EL SERVIDOR'
       })
    }
}

export const crearClienteController = async (req, res) => {

    try {
        
        const { nombres, apellidos, dni, correo, direccion } = req.body;

        const nombreNormalizado = nombres.trim().toUpperCase();

        if(!nombreNormalizado || !apellidos || !dni || !correo || !direccion) {
            return res.status(400).json({
                mensaje: 'Los datos son obligatorios.'
            })
        }

        const clienteId = await crearCliente(
            nombres,
            apellidos,
            dni,
            correo,
            direccion
        );

        return res.status(201).json({
            mensaje: 'Cliente registrado correctamente.',
            data: clienteId
        })

    } catch (error) {
        console.error(error)

        res.status(500).json({
            mensaje: 'Error al crear el cliente'
        })
    }

}

export const buscarClienteIdController = async (req, res) => {
    try {
        
        const id = Number(req.params.id);

        const cliente = await obtenerClienteIdModel(id);

        if (!cliente) {
            return res.status(404).json({
                // success: false,
                mensaje: 'Cliente no encontrado'
            })
        }

        return res.status(200).json({
            mensaje: 'Cliente encontrado correctamente.',
            data: cliente 
        })

    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({
            mensaje: 'ERROR INTERNO EN EL SERVIDOR.'
        })
        
    }
}

export const editarClienteController = async (req, res) => {

    try {
        
        const id = Number(req.params.id);

        const {
            nombres,
            apellidos,
            dni,
            correo,
            direccion
        } = req.body;

        const resultEdit = await editarClienteModel(
            id, nombres, apellidos, dni, correo, direccion
        );

        if(resultEdit.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado.'
            });
        }

        return res.status(201).json({
            mensaje: 'Cliente actualizado correctamente.'
        })

    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({
            mensaje: 'ERROR INTERNO EN EL SERVIDOR.'
        })
    }
}

export const cambiarEstadoClienteController = async (req, res) => {

    try {
        
        const id = req.params.id;

        const existe = await cambiarEstadoClienteModel(id);

        if(existe.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });
        }

        return res.status(200).json({
            mensaje: 'Estado del cliente actualizado correctamente.'
        })

    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({
            mensaje: 'ERROR INTERNO EN EL SERVIDOR.'
        })
    }

}