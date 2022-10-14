import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../services/motorcycleService';

import testMotorcycleBody from '../helper/testMotorcycleBody';

const error400Message = 'Id must have 24 hexadecimal characters';
const error404Message = 'Object not found';

export default class MotorcycleController {
  constructor(private motorcycleService = new MotorcycleService()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const carToCreate = req.body;

      if (testMotorcycleBody(carToCreate)) {
        return res.status(400).json({ error: error400Message });
      }

      const createdCar = await this.motorcycleService.create(carToCreate);
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
      const cars = await this.motorcycleService.getAll();
      if (!cars) {
        return res.status(400).json({ error: error400Message });
      }
  
      return res.status(200).json(cars);
    } catch (error) {
      return next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (id.length !== 24) {
        return res.status(400).json({ error: error400Message });
      }

      const carById = await this.motorcycleService.getById(id);

      if (!carById) {
        return res.status(404).json({ error: error404Message });
      }

      return res.status(200).json(carById);
    } catch (error) {
      return next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      if (id.length !== 24) {
        return res.status(400).json({ error: error400Message });
      }

      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: error400Message });
      }

      const updateCar = await this.motorcycleService.update(id, req.body);
      if (!updateCar) {
        return res.status(404).json({ error: error404Message });
      }

      return res.status(200).json({ message: 'teste' });
    } catch (error) {
      return next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (id.length !== 24) {
        return res.status(400).json({ error: error400Message });
      }
      const deleteCar = await this.motorcycleService.delete(id);

      if (!deleteCar) {
        return res.status(404).json({ error: error404Message });
      }
      return res.status(204).json({ _id: id });
    } catch (error) {
      return next(error);
    }
  };
}