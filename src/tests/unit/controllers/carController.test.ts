import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response, NextFunction } from 'express';
import { carMock, carMockId } from '../../mocks/carMocks';
import CarController from '../../../controllers/carController';
import CarService from '../../../services/carService';
import CarModel from '../../../models/carModel';

describe('Car Controller tests', () => {

  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  after(() => { sinon.restore() });

  it('It is possible to create a car successfully', async () => {
    sinon.stub(carService, 'create').resolves(carMockId);
    req.body = carMock;
    await carController.create(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be.true;
  })

  it('It is possible to get all cars successfully', async () => {
    sinon.stub(carService, 'getAll').resolves([carMockId]);
    await carController.getAll(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith([carMockId])).to.be.true;
  })

  it('It is possible to update a car successfully by ID', async () => {
    sinon.stub(carService, 'update').resolves(carMockId);
    req.params = { id: carMockId._id };
    req.body = carMock;
    await carController.update(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be.true;
  })

  it('It is possible to delete a car successfully by ID', async () => {
    sinon.stub(carService, 'delete').resolves(carMockId);
    req.params = { id: carMockId._id };
    await carController.delete(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be.true;
  })

});