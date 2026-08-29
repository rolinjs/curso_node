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
        id: 1,
        nombre: "Pedro",
        apellido: "Ramirez",
        cargo: "Administrador",
        salario: 2800
    }
];

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido al Curso de Node.js con Express y Mysql.'
    });
});

app.get('/trabajadores', (req, res) => {
    res.json(trabajadores);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
})