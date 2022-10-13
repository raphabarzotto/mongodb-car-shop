import { ICar } from '../interfaces/ICar';
import CarModel from '../models/carModel';

export default class CarService {
  constructor(private carsModel = new CarModel()) {}

  public async getAll() {
    return this.carsModel.getAll();
  }

  public async getById(id: string) {
    return this.carsModel.getById(id);
  }
}