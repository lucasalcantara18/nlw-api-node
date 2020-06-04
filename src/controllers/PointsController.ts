import {Request, Response} from 'express';
import knex from '../database/connection';

export  default class PointsController {

    
    async create(req: Request, res: Response){
        console.log("entou no cadastro");
    const {name, email, whatsapp, latitude, longitude, city, uf, itens} = req.body;
    
    //variavel para lidar com transaction do bd, caso uma insersão falhar, é efetuado o rollback
    const trx = await knex.transaction();

    const point = {image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', 
                   name, email, whatsapp, latitude, longitude, city, uf}

    const ids = await trx('points').insert(point);

    const pointItens = itens.map((item_id:number) => {
        return{
            iten_id: item_id,
            point_id: ids[0]
        }
    });
    console.log(pointItens);
    
    await trx('point_itens').insert(pointItens);
    await trx.commit();

    return res.json({
        id: ids[0],
        ...point
    });

    }

    async findOne(req: Request, res: Response){
        
        const id = req.params.id;
        const point = await knex('points').where('id', id).first();

        if(!point){
            return res.status(400).json({message: "Point not found"});
        }

        const itens = await knex('itens').join('point_itens', 'itens.id', '=', 'point_itens.iten_id').where('point_itens.point_id', id);


        return res.json({point, itens});
    }

    async findAll(req: Request, res: Response){
        
        const {city, uf, itens} = req.query;

        const parseItens = String(itens).split(',').map(item => Number(item.trim()));

        const points = await knex('points')
                                         .join('point_itens', 'points.id', '=', 'point_itens.point_id')
                                         .whereIn('point_itens.iten_id', parseItens)
                                         .where('city', String(city))
                                         .where('uf', String(uf))
                                         .distinct()
                                         .select('points.*');


        return res.json(points);
    }


}