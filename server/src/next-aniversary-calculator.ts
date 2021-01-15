import { isAfter, set, isEqual } from 'date-fns';
import { Person } from './domain/person';
import { ICalendar } from './interfaces/calendar';

export class NextAniversaryCalculator {
  constructor(private calendar: ICalendar) {}

  exec(person: Person): Date {
    const now = this.calendar.now();
    const aniversary = set(person.birthday, { year: now.getFullYear() });

    if (isAfter(now, aniversary) || isEqual(now, aniversary)) {
      return set(person.birthday, { year: now.getFullYear() + 1 });
    }

    return aniversary;
  }
}
