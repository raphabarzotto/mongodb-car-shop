import { Router } from 'express';
import MotorcycleModel from '../models/motorcycleModel';
import MotorcycleServices from '../services/motorcycleService';
import MotorcycleController from '../controllers/motorcycleController';

const MotorcycleRoute = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleServices(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

MotorcycleRoute.post('/', motorcycleController.create);
MotorcycleRoute.get('/', motorcycleController.getAll);
MotorcycleRoute.get('/:id', motorcycleController.getById);
MotorcycleRoute.put('/:id', motorcycleController.update);
MotorcycleRoute.delete('/:id', motorcycleController.delete);

export default MotorcycleRoute;