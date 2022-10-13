import { NextFunction, Request, Response } from 'express';
import CarsService from '../services/carService';

const error400 = 'Id must have 24 hexadecimal characters';
const error404 = 'Object not found';

export default class CarsController {
  constructor(private carsService = new CarsService()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this.carsService.getAll();
      if (!cars) {
        return res.status(400)
          .json({ error: error400 });
      }
  
      return res.status(200).json(cars);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };
}