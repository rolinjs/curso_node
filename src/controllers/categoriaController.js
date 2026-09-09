import {
    obtenerCategoriasModel
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

