//Arquivo especifico para rotas
import express from 'express';
import ItensController from './controllers/ItensController';
import PointsController from './controllers/PointsController';
import multer from 'multer';
import multerConfig from './config/multer';
import {celebrate, Joi} from 'celebrate'

//Desacopla as rotas do server principal.
const routes = express.Router();
//metodo para fazer o upload de imagens
const upload = multer(multerConfig);

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

//adição de mais um parâmetro para o upload de fotos
routes.post('/points', upload.single('image'), celebrate({
    //este bloco será responsavel pela validação de dados do body
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        uf: Joi.string().required().max(2),
        city: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        itens: Joi.string().required()
    })
}, {
    abortEarly: false
}), pointsController.create);

routes.get('/points/:id', pointsController.findOne);

routes.get('/points', pointsController.findAll);


export default routes;