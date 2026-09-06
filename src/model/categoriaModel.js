import pool  from "../config/db.js";

export const obtenerCategorias = async () => {

    const sql = `
        SELECT * FROM categorias
    `;

    const [rows] = await pool.query(sql);

    return rows;

}

export const crearCategoria = async (
    nombre
) => {
    const sql = `
        INSERT INTO categorias
        (
            categorias_nombre
        )
        VALUES(?)
    `;

    const values = [nombre];
    const [result] = await pool.query(sql, values);

    return result.insertId;
}

export const obtenerCategoriaIdModel = async (id) => {
    const sql = `
        SELECT * FROM categorias WHERE categorias_id = ?
    `;

    const [rows] = await pool.query(sql, [id]);
    return rows[0];
}

export const editarCategoriaModel = async (
    id,
    nombre
) => {
    const sql = `
        UPDATE categorias
        SET
            categorias_nombre = ?
        WHERE categorias_id = ?
    `;

    const values = [
        nombre
    ];

    const [result] = await pool.query(sql, values);
    return result;
}

export const cambiarEstadoCategoriaModel = async (id) => {
    const sql = `
        UPDATE categorias
            SET categorias_estado = NOT categorias_estado
        WHERE categorias_id = ?    
    `;
    const [result] = await pool.query(sql, [id]);
    return result;
}