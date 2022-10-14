import { IMotorcycle } from '../interfaces/IMotorcycle';
import MotorcycleModel from '../models/motorcycleModel';

export default class MotorcycleServices {
  constructor(private motorcycleModel = new MotorcycleModel()) {}

  public async create(newCar: IMotorcycle) {
    return this.motorcycleModel.create(newCar);
  }

  public async getAll() {
    return this.motorcycleModel.getAll();
  }

  public async getById(id: string) {
    return this.motorcycleModel.getById(id);
  }

  public async update(id: string, carData: object) {
    return this.motorcycleModel.update(id, carData);
  }

  public async delete(id: string) {
    return this.motorcycleModel.delete(id);
  }
}