import { Weapon } from './weapon.model';

describe('Weapon', () => {
  it('should create an instance', () => {
    expect(new Weapon('', false)).toBeTruthy();
  });
});
