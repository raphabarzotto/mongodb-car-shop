import { Schema, model as createModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const motorcycleSch = new Schema<IMotorcycle>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  buyValue: { type: Number, required: true },
  category: { type: String, required: true },
  engineCapacity: { type: Number, required: true },
  status: { type: String, required: false },
}, {
  versionKey: false,
});

export default class MotorcycleModel {
  constructor(private motorcycleModel = createModel<IMotorcycle>('motorcycles', motorcycleSch)) {}

  public async create(newMotorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.motorcycleModel.create(newMotorcycle);
  }

  public async getAll(): Promise<IMotorcycle[]> {
    return this.motorcycleModel.find();
  }

  public async getById(id: string) {
    return this.motorcycleModel.findById(id);
  }

  public async update(id: string, motorcycleData: object): Promise<IMotorcycle | null> {
    const car = await this.motorcycleModel.findOneAndUpdate(
      { _id: id },
      { ...motorcycleData },
    );
    return car;
  }

  public async delete(id: string): Promise<IMotorcycle | null> {
    const car = await this.motorcycleModel.findOneAndDelete({ _id: id });
    return car;
  }
}