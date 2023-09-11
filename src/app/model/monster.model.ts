import {Throwable} from "./throwable.model";
import {Weapon} from "./weapon.model";

export class Monster {
  constructor(
    public name: string = '',
    public image: string = '',
    public health: number = 0,
    public move: number = 0,
    public range: number = 0,
    public resistanceImage: string = '',
    public attackImage: string = '',
    public rockAndStoneCard: boolean = false,
    public description: string = ''
  ) {

  }
}
