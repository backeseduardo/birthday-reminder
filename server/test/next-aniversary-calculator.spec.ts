import { assert } from 'chai';
import { Person } from '../src/domain/person';
import { ICalendar } from '../src/interfaces/calendar';
import { NextAniversaryCalculator } from '../src/next-aniversary-calculator';

describe('NextAniversaryCalculator', () => {
  it('next aniversary within the current year', () => {
    const person = new Person('Person', new Date(2011, 3, 25));

    const mockCalendar: ICalendar = {
      now(): Date {
        return new Date(2021, 0, 15);
      },
    };

    const calculator = new NextAniversaryCalculator(mockCalendar);
    const nextAniversary = calculator.exec(person);

    assert.deepStrictEqual(new Date(2021, 3, 25), nextAniversary);
  });

  it('next aniversary for the comming year', () => {
    const person = new Person('Person', new Date(1992, 0, 7));

    const mockCalendar: ICalendar = {
      now(): Date {
        return new Date(2021, 0, 15);
      },
    };

    const calculator = new NextAniversaryCalculator(mockCalendar);
    const nextAniversary = calculator.exec(person);

    assert.deepStrictEqual(new Date(2022, 0, 7), nextAniversary);
  });

  it('aniversary is today', () => {
    const person = new Person('Person', new Date(1992, 0, 15));

    const mockCalendar: ICalendar = {
      now(): Date {
        return new Date(2021, 0, 15);
      },
    };

    const calculator = new NextAniversaryCalculator(mockCalendar);
    const nextAniversary = calculator.exec(person);

    assert.deepStrictEqual(new Date(2022, 0, 15), nextAniversary);
  });
});
