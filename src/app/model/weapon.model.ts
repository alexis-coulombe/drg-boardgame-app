import {WeaponModifier} from "./weapon-modifier.model";

export class Weapon {
  constructor(
    public name: string,
    public overclocked: boolean,
    public modifiers: WeaponModifier[]
  ) {

  }
}
