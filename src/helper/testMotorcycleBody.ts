import { IMotorcycle } from '../interfaces/IMotorcycle';

export default function testMotorcycleBody(moto: IMotorcycle) {
  const lenTest: boolean = Object.keys(moto).length === 0;
  const categoryTest: boolean = moto.category !== 'Street' 
    && moto.category !== 'Custom' && moto.category !== 'Trail';
  const engineTest: boolean = moto.engineCapacity < 1 || moto.engineCapacity > 2500;

  const arraytest = [
    lenTest,
    categoryTest,
    engineTest,
    !moto.model,
    !moto.year,
    !moto.color,
    !moto.buyValue,
    !moto.category,
    !moto.engineCapacity,
  ];

  return arraytest.includes(true);
}