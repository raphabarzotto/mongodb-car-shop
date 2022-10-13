import { NextFunction, Request, Response } from 'express';
import CarService from '../services/carService';

export default class CarController {
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
}