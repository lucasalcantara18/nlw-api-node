//Arquivo especifico para rotas
import express from 'express';
import ItensController from './controllers/ItensController';
import PointsController from './controllers/PointsController';

//Desacopla as rotas do server principal.
const routes = express.Router();

//Cria instancia do PointsController
const pointsController = new PointsController();
//Cria instancia do PointsController
const itensController = new ItensController;

//Sugestão de nomes para controllers:
/**
 * index: listar
 * show: exibir 1
 * insert
 * update
 * delete
 */


//rota inicial
routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
});

//rota de listagem de itens
routes.get('/itens', itensController.listAll);

routes.post('/points', pointsController.create);



export default routes;