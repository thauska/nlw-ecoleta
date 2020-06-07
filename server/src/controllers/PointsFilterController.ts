import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsFilterController {
  async show(request: Request, response: Response): Promise<Response> {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    const serializedPoints = points.map(point => {
      return {
        ...point,
        latitude: Number(point.latitude),
        longitude: Number(point.longitude),
        image_url: `http://192.168.0.12:3333/uploads/${point.image}`,
      };
    });

    return response.json(serializedPoints);
  }
}

export default PointsFilterController;