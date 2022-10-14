import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../services/motorcycleService';

import testMotorcycleBody from '../helper/testMotorcycleBody';

const error400Message = 'Id must have 24 hexadecimal characters';
const error404Message = 'Object not found';

export default class MotorcycleController {
  constructor(private motorcycleService = new MotorcycleService()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const motorcycleToCreate = req.body;

      if (testMotorcycleBody(motorcycleToCreate)) {
        return res.status(400).json({ error: error400Message });
      }

      const createdMotorcycle = await this.motorcycleService.create(motorcycleToCreate);
      if (!createdMotorcycle) {
        return res.status(400).json({ error: 'Can not be possible to create a car' });
      }
  
      return res.status(201).json(createdMotorcycle);
    } catch (error) {
      return next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const motorcycles = await this.motorcycleService.getAll();
      if (!motorcycles) {
        return res.status(400).json({ error: error400Message });
      }
  
      return res.status(200).json(motorcycles);
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

      const motorcycleById = await this.motorcycleService.getById(id);

      if (!motorcycleById) {
        return res.status(404).json({ error: error404Message });
      }

      return res.status(200).json(motorcycleById);
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

      const updateMotorcycle = await this.motorcycleService.update(id, req.body);
      if (!updateMotorcycle) {
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
      const deleteMotorcycle = await this.motorcycleService.delete(id);

      if (!deleteMotorcycle) {
        return res.status(404).json({ error: error404Message });
      }
      return res.status(204).json({ _id: id });
    } catch (error) {
      return next(error);
    }
  };
}