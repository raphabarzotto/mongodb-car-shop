import { NextFunction, Request, Response } from 'express';
import CarService from '../services/carService';

export default class CarsController {
  constructor(private carService = new CarService()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this.carService.getAll();
      if (!cars) {
        return res.status(400)
          .json({ error: 'Id must have 24 hexadecimal characters' });
      }
  
      return res.status(200).json(cars);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (id.length !== 24) {
        return res.status(400)
          .json({ error: 'Id must have 24 hexadecimal characters' });
      }

      const carById = await this.carService.getById(id);

      if (!carById) {
        return res.status(404)
          .json({ error: 'Object not found' });
      }

      return res.status(200).json(carById);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };
}