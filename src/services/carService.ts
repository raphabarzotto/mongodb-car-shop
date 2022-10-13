import CarModel from '../models/carModel';

export default class CarService {
  constructor(private carModel = new CarModel()) {}

  public async getAll() {
    return this.carModel.getAll();
  }
}