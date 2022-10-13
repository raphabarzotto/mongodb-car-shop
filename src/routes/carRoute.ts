import { Router } from 'express';
import CarModel from '../models/carModel';
import CarService from '../services/carService';
import CarController from '../controllers/carController';

const CarRoute = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

CarRoute.post('/', carController.create);

export default CarRoute;