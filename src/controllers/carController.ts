import { NextFunction, Request, Response } from 'express';
import CarsService from '../services/carService';

import testCarBody from '../helper/testCarBody';

const error400Message = 'Id must have 24 hexadecimal characters';
const error404Message = 'Object not found';

export default class CarsController {
  constructor(private carsService = new CarsService()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const carToCreate = req.body;

      if (testCarBody(carToCreate)) {
        return res.status(400).json({ error: error400Message });
      }

      const createdCar = await this.carsService.create(carToCreate);
      if (!createdCar) {
        return res.status(400).json({ error: 'Can not be possible to create a car' });
      }
  
      return res.status(201).json(createdCar);
    } catch (error) {
      return next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this.carsService.getAll();
      if (!cars) {
        return res.status(400).json({ error: error400Message });
      }
  
      return res.status(200).json(cars);
    } catch (error) {
      return next(error);
    }
  };
}