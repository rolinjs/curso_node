import express from 'express';
import pool from './config/db.js';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        mesnaje: 'Bienvenido al curso de Node.js con Express y MySQL'
    })
});

// async function iniciarServidor() {
//     try {
        
//         await pool.query('SELECT 1');

//         console.log('Conexión a MySQL exitosa.');

//         app.listen(PORT, () => {
//             console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
//         })
        

//     } catch (error) {
//         console.log(error); 
//     }
// }

app.listen(PORT, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
})

// iniciarServidor()

