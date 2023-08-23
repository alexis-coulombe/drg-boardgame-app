import {Throwable} from "./throwable.model";
import {Weapon} from "./weapon.model";

export class Dwarf {
  constructor(
    public name: string = '',
    public bannerImage: string = '',
    public health: number = 0,
    public primaryAmmo: number = 0,
    public secondaryAmmo: number = 0,
    public throwables: string[] = [],
    public secondaryWeapon: string = '',
    public secondaryWeaponOverclocked: boolean = false,
    public secondaryMod1: string = '',
    public secondaryMod2: string = ''
  ) {

  }
}
