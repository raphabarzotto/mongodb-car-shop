import { IMotorcycle } from '../interfaces/IMotorcycle';

export default function testCarBody(moto: IMotorcycle) {
  const lenTest: boolean = Object.keys(moto).length === 0;
  const categoryTest: boolean = moto.category !== 'Street' && moto.category !== 'Custom' && moto.category !== 'Trail';
  const engineTest: boolean = moto.engineCapacity < 0 || moto.engineCapacity > 2500;
  const modelTest = !moto.model;
  const yearTest = !moto.year;
  const colorTest = !moto.color;
  const buyTest = !moto.buyValue;

  const arraytest = [
    lenTest,
    categoryTest,
    engineTest,
    modelTest,
    yearTest,
    colorTest,
    buyTest,
  ];

  return arraytest.includes(true);
}