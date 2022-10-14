import { Schema, model as createModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';

const carSchema = new Schema<ICar>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
  status: { type: String, required: false },
}, {
  versionKey: false,
});

export default class CarsModel {
  constructor(private carsModel = createModel<ICar>('cars', carSchema)) {}

  public async create(newCar: ICar): Promise<ICar> {
    return this.carsModel.create(newCar);
  }

  public async getAll(): Promise<ICar[]> {
    return this.carsModel.find();
  }

  public async getById(id: string) {
    return this.carsModel.findById(id);
  }

  public async update(id: string, carData: object): Promise<ICar | null> {
    const car = await this.carsModel.findOneAndUpdate(
      { _id: id },
      { ...carData },
    );
    return car;
  }

  public async delete(id: string): Promise<ICar | null> {
    const car = await this.carsModel.findOneAndDelete({ _id: id });
    return car;
  }
}