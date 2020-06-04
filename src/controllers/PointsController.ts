import {Request, Response} from 'express';
import knex from '../database/connection';

export  default class PointsController {

    async create(req: Request, res: Response){
        
    const {name, email, whatsapp, latitude, longitude, city, uf, itens} = req.body;
    
    //variavel para lidar com transaction do bd, caso uma insersão falhar, é efetuado o rollback
    const trx = await knex.transaction();

    const point = {image: 'image-fake', name, email, whatsapp, latitude, longitude, city, uf}

    const ids = await trx('points').insert(point);

    const pointItens = itens.map((item_id:number) => {
        return{
            iten_id: item_id,
            point_id: ids[0]
        }
    });
    console.log(pointItens);
    
    await trx('point_itens').insert(pointItens);

    return res.json({
        id: ids[0],
        ...point
    });

    }


}