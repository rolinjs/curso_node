import pool  from "../config/db.js";

export const obtenerCategorias = async () => {

    const sql = `
        SELECT * FROM clientes
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

/* export const editarCategoriaModel = async (id) => {
    const sql = `
        UPDATE categorias
        SET
            categorias_nombre = ?
        WHERE categorias_id = ?
    `;
} */