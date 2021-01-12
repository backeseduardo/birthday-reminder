import { isAfter, set } from 'date-fns';

export class Person {
  constructor(private name: string, private birthday: Date) {}

  get nextAniversary(): Date {
    const now = new Date();
    const aniversary = set(this.birthday, { year: now.getFullYear() });

    if (isAfter(now, aniversary)) {
      return set(this.birthday, { year: now.getFullYear() + 1 });
    }

    return aniversary;
  }
}
