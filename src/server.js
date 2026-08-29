import express from 'express';

const app = express();

const PORT = 3000;

const trabajadores = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        cargo: "Programador",
        salario: 2500
    },
    {
        id: 2,
        nombre: "Maria",
        apellido: "Gomez",
        cargo: "Analista",
        salario: 3000
    },
    {
        id: 3,
        nombre: "Pedro",
        apellido: "Ramirez",
        cargo: "Administrador",
        salario: 2800
    }
];

/**
 * Muestra un mensaje de Bienvenida.
 */
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido al Curso de Node.js con Express y Mysql.'
    });
});

/**
 * Listar Trabajadores
 */
app.get('/trabajadores', (req, res) => {
    res.json(trabajadores);
});

/**
 * Buscar Trabajador por ID
 * :id = 2
 * :id = 3
 * const id = '2'
 */

app.get('/trabajadores/:id', (req, res) => {
    const id = Number(req.params.id);
    const trabajador = trabajadores.find(trabajador => trabajador.id === id);
    if(!trabajador) {
       res.json({mensaje: "No encontrado"}) 
    }
    res.json(trabajador);
})

app.listen(PORT, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
})