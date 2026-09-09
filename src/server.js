import express from 'express';

import clienteRouter from './router/clienteRouter.js';
import categoriaRouter from './router/categoriaRouter.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api/clientes', clienteRouter);
app.use('/api/categorias', categoriaRouter);

app.listen(PORT, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
})


