import { assert } from 'chai';
import { useFakeTimers, SinonFakeTimers } from 'sinon';
import { Person } from '../../src/domain/person';

describe('Person', () => {
  let clock: SinonFakeTimers;

  beforeEach(() => {
    clock = useFakeTimers(new Date(2021, 0, 12).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it('should calculate the next alert date', () => {
    const kid = new Person('Kid', new Date(2011, 3, 25));

    assert.deepStrictEqual(new Date(2021, 3, 25), kid.nextAniversary);
  });

  it('should calculate aniversary that already happened', () => {
    const love = new Person('Love', new Date(1992, 0, 7));

    assert.deepStrictEqual(new Date(2022, 0, 7), love.nextAniversary);
  });
});
