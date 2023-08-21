import {Dwarf} from "./dwarf.model";

export class Deepdive {
  constructor(
    public mission: number,
    public driller: Dwarf | undefined,
    public engineer: Dwarf | undefined,
    public gunner: Dwarf | undefined,
    public scout: Dwarf | undefined
  ) {

  }
}
