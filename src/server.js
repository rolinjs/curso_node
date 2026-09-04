import express from 'express';

import clienteRouter from './router/clienteRouter.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api/clientes', clienteRouter);

app.listen(PORT, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
})


