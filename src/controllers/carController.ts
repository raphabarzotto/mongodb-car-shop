import { NextFunction, Request, Response } from 'express';
import CarsService from '../services/carService';

export default class CarsController {
  constructor(private carsService = new CarsService()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this.carsService.getAll();
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
}