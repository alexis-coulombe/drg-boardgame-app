import {WeaponModifier} from "./weapon-modifier.model";

export class Weapon {
  constructor(
    public name: string = '',
    public overclocked: boolean = false,
    public firstModifier: WeaponModifier = new WeaponModifier(),
    public secondModifier: WeaponModifier = new WeaponModifier(),
  ) {
  }
}
