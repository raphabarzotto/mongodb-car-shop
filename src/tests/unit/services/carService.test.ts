import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/carModel';
import CarService from '../../../services/carService';
import { carMock, carMockId } from '../../mocks/carMocks';

const { expect } = chai;

describe('Car Service tests', () => {

  const carModel = new CarModel();
  const carService = new CarService(carModel);

  after(() => { sinon.restore() });

  it('It is possible to create a car sussesfully', async () => {
    sinon.stub(carModel, 'create').resolves(carMockId);
    try {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.eql(carMockId);
    } catch (error: any) {
      expect(error).to.be.eql('Invalid car object');
    }
  })

  it('It is possible to get all cars successfully', async () => {
    sinon.stub(carModel, 'getAll').resolves([carMockId]);
    const cars = await carService.getAll();
    expect(cars).to.be.eql([carMockId]);
  })

  it('It is possible to update a car successfully by ID', async () => {
    sinon.stub(carModel, 'update').resolves(carMockId);
    try {
      const cars = await carService.update('6324b1f7e63a20956a30c009', carMock);
      expect(cars).to.be.eql(carMockId);
    } catch (error: any) {
      expect(error.message).to.be.eql('Id must have 24 hexadecimal characters');
    }
  })

  it('It is possible to delete a car successfully by ID', async () => {
    sinon.stub(carModel, 'delete').resolves();
    try {
      const carDelete = await carService.delete('6324b1f7e63a20956a30c009');
      expect(carDelete).to.be.undefined;
    } catch (error: any) {
      expect(error.message).to.be.eql('Object not found');
    }
  })
})