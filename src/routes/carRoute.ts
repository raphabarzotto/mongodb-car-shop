import { Router } from 'express';
import CarModel from '../models/carModel';
import CarService from '../services/carService';
import CarController from '../controllers/carController';

const CarRoute = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

CarRoute.post('/', carController.create);
CarRoute.get('/', carController.getAll);
CarRoute.get('/:id', carController.getById);
CarRoute.put('/:id', carController.update);
CarRoute.delete('/:id', carController.delete);

export default CarRoute;