import { ICar } from '../interfaces/ICar';
import CarsModel from '../models/carModel';

export default class CarsServices {
  constructor(private carsModel = new CarsModel()) {}

  public async create(newCar: ICar) {
    return this.carsModel.create(newCar);
  }
}