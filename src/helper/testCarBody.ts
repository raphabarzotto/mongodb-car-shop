import { ICar } from '../interfaces/ICar';

export default function testCarBody(car: ICar) {
  const lenTest: boolean = Object.keys(car).length === 0;
  const seatTest: boolean = car.seatsQty < 2 || car.seatsQty > 7 || !car.seatsQty;
  const doorTest: boolean = car.doorsQty < 2 || car.doorsQty > 4 || !car.doorsQty;
  const modelTest = !car.model;
  const yearTest = !car.year;
  const colorTest = !car.color;
  const buyTest = !car.buyValue;

  const arraytest = [
    lenTest,
    seatTest,
    doorTest,
    modelTest,
    yearTest,
    colorTest,
    buyTest,
  ];

  return arraytest.includes(true);
}