import {Request, Response} from 'express';
import knex from '../database/connection';

export default class ItensController{

    async listAll(req:Request, res: Response){
        const itens = await knex('itens').select('*');

        const serielizedItens = itens.map(item => {
            return{
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
    
        return res.json(serielizedItens);
    }

}