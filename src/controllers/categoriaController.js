import {
    obtenerCategoriasModel,
    crearCategoriaModel,
    obtenerCategoriaIdModel
} from '../model/categoriaModel.js';

/**
 * CONTROLADOR PARA OBTENER CATEGORÍAS DE LA BASE DE DATOS
 */
export const obtenerCategoriasController = async (req, res) => {
    try {
        
        const categorias = await obtenerCategoriasModel();

        if (categorias.length === 0) {
            return res.status(400).json({
                mensaje: 'No hemos podido obtener categorías'
            });
        } 

        return res.status(200).json({
            mensaje: 'Categorías obtenidas correctamente.',
            data: categorias
        });

    } catch (error) {
        console.log('ERROR EN: ', error);
        return res.status(500).json({
            mensaje: 'ERROR INTERNO EN EL SERVIDOR.'
        });
    }
}

/**
 * CONTROLLER PARA CREAR UNA CATEGORIA
 */
export const crearCategoriaController = async (req, res) => {
    try {
        
        const { nombre } = req.body;

        if(!nombre || !nombre.trim()) {
            return res.status(400).json({
                message: 'Los datos son obligatoiros'
            });
        }

        const nuevaCategoria = await crearCategoriaModel(nombre);

        return res.status(201).json({
            mensaje: 'Categoría creada correctamente.',
            data: nuevaCategoria
        })

    } catch (error) {
        console.log('ERROR EN: ', error);
        return res.status(500).json({
            mensaje: 'ERROR INTERNO EN EL SERVIDOR.'
        });
    }
}

/* 
    Controller para buscar por Id
*/

export const buscarCategoriaIdController = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const categoria = await obtenerCategoriaIdModel(id);

        if(!categoria){
            return res.status(404).json({
                mensaje: 'Categoria no encontrada'
            })
        }

        return res.status(200).json({
            mensaje: 'Categoria no encontrada',
            data: categoria
        });
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            mensaje: 'Error intento en el servidor'
        });
    }
}