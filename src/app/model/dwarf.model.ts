import {Throwable} from "./throwable.model";
import {Weapon} from "./weapon.model";

export class Dwarf {
  constructor(
    public name: string,
    public bannerImage: string,
    public health: number,
    public primaryAmmo: number,
    public secondaryAmmo: number,
    public throwables: Throwable[],
    public secondaryWeapon?: Weapon,
  ) {

  }
}
