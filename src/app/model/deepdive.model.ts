import {Dwarf} from "./dwarf.model";

export class Deepdive {
  constructor(
    public mission: number = 1,
    public lastSave: string = '',
    public driller: Dwarf | undefined = undefined,
    public engineer: Dwarf | undefined = undefined,
    public gunner: Dwarf | undefined = undefined,
    public scout: Dwarf | undefined = undefined
  ) {

  }
}
