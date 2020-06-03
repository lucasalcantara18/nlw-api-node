//Arquivo especifico para rotas
import express from 'express';

const routes = express.Router();
//Desacopla as rotas do server principal.

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
});

export default routes;