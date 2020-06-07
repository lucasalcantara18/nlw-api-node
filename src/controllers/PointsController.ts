import {Request, Response} from 'express';
import knex from '../database/connection';

export  default class PointsController {

    
    async create(req: Request, res: Response){
    console.log(req.body);
    const {name, email, whatsapp, latitude, longitude, city, uf, itens} = req.body;
    
    
    //variavel para lidar com transaction do bd, caso uma insersão falhar, é efetuado o rollback
    const trx = await knex.transaction();

    const point = {image: req.file.filename, 
                   name, email, whatsapp, latitude, longitude, city, uf}

    const ids = await trx('points').insert(point);

    const pointItens = itens.split(',').map((item:string) => Number(item.trim())).map((item_id:number) => {
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

        const serielizedPoint = {
            ...point,
            image_url: `http://localhost:3333/uploads/${point.image}`
        }


        return res.json({serielizedPoint, itens});
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

        const serielizedPoints = points.map(point => {
            return{
               ...point,
                image_url: `http://localhost:3333/uploads/${point.image}`
            }
        });


        return res.json(serielizedPoints);
    }


}