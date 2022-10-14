import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose'
import CarModel from '../../../models/carModel';
import { carMock, carMockId } from '../../mocks/carMocks';

const { expect } = chai;

describe('Car Model tests', () => {
  const carModel = new CarModel();
  after(() => {sinon.restore()});

  it('It is possible to create a car successfully', async () => {
    sinon.stub(Model, 'create').resolves(carMockId);
    const carCreated = await carModel.create(carMock);
    expect(carCreated).to.be.eql(carMockId);
  })

  it('It is possible to get all cars successfully', async () => {
    sinon.stub(Model, 'find').resolves([carMockId]);
    const cars = await carModel.getAll();
    expect(cars).to.be.eql([carMockId]);
  })

  it('It is possible to get a cars successfully by ID', async () => {
    sinon.stub(Model, 'findById').resolves(carMockId);
    const cars = await carModel.getById('6324b1f7e63a20956a30c009');
    expect(cars).to.be.eql(carMockId);
  })

  it('It is possible to update a car successfully by ID', async () => {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockId);
    try {
      const car = await carModel.update('6324b1f7e63a20956a30c009', carMock);
      expect(car).to.be.eql(carMockId);
    } catch (error: any) {
      expect(error).to.exist;
    }
  })

  it('It is possible to delete a car successfully by ID', async () => {
    sinon.stub(Model, 'findByIdAndDelete').resolves();
    try {
      const carDelete = await carModel.delete('6324b1f7e63a20956a30c009');
      expect(carDelete).to.be.undefined;
    } catch (error: any) {
      expect(error).to.exist;
    }
  })
});