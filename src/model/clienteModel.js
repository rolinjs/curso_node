import pool from '../config/db.js';

export const obtenerClientes = async () => {

    const sql = `
        SELECT * FROM clientes
    `;

    const [rows] = await pool.query(sql);

    return rows;
}

export const crearCliente = async (
    nombres,
    apellidos,
    dni,
    correo,
    direccion
) => {
    const sql = `
        INSERT INTO clientes
        (
            clientes_nombres,
            clientes_apellidos,
            clientes_dni,
            clientes_correo,
            clientes_direccion
        )
        VALUES(?,?,?,?,?)
    `;
    const values = [nombres, apellidos, dni, correo, direccion];

    const [result] = await pool.query(sql, values);

    return result.insertId;
}

export const obtenerClienteIdModel = async (id) => {
    const sql =  `
        SELECT * FROM clientes WHERE clientes_id = ?
    `;
    const [rows] = await pool.query(sql, [id]);
    return rows[0];
}

export const editarClienteModel = async (
    id,
    nombres,
    apellidos,
    dni,
    correo,
    direccion
) => {
    const sql = `
        UPDATE clientes
        SET
            clientes_nombres = ?,
            clientes_apellidos = ?,
            clientes_dni = ?,
            clientes_correo = ?,
            clientes_direccion = ?
        WHERE clientes_id = ?
    `;
    const values = [
        nombres,
        apellidos,
        dni,
        correo,
        direccion,
        id
    ];

    const [result] = await pool.query(sql, values);
    return result;
}