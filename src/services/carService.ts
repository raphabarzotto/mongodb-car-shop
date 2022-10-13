import { ICar } from '../interfaces/ICar';
import CarsModel from '../models/carModel';

export default class CarsController {
  constructor(private carsModel = new CarsModel()) {}

  public async getAll() {
    return this.carsModel.getAll();
  }
}