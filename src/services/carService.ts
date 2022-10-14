import { ICar } from '../interfaces/ICar';
import CarsModel from '../models/carModel';

export default class CarsServices {
  constructor(private carsModel = new CarsModel()) {}

  public async create(newCar: ICar) {
    return this.carsModel.create(newCar);
  }

  public async getAll() {
    return this.carsModel.getAll();
  }

  public async getById(id: string) {
    return this.carsModel.getById(id);
  }

  public async update(id: string, carData: object) {
    return this.carsModel.update(id, carData);
  }

  public async delete(id: string) {
    return this.carsModel.delete(id);
  }
}