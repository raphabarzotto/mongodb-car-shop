import { IMotorcycle } from '../interfaces/IMotorcycle';
import MotorcycleModel from '../models/motorcycleModel';

export default class MotorcycleServices {
  constructor(private motorcycleModel = new MotorcycleModel()) {}

  public async create(newMotorcycle: IMotorcycle) {
    return this.motorcycleModel.create(newMotorcycle);
  }

  public async getAll() {
    return this.motorcycleModel.getAll();
  }

  public async getById(id: string) {
    return this.motorcycleModel.getById(id);
  }

  public async update(id: string, motorcycleData: object) {
    return this.motorcycleModel.update(id, motorcycleData);
  }

  public async delete(id: string) {
    return this.motorcycleModel.delete(id);
  }
}