import { Injectable } from '@angular/core';
import {Dwarf} from "../model/dwarf.model";

@Injectable({
  providedIn: 'root'
})
export class DwarfService {
  private dwarves: Dwarf[] = [
    new Dwarf('Driller', 'assets/images/driller_banner.jpg', 0, 0, 0, [], 'Cryo cannon'),
    new Dwarf('Engineer', 'assets/images/engineer_banner.jpg', 0, 0, 0, [], 'Breach cutter'),
    new Dwarf('Gunner', 'assets/images/gunner_banner.jpg', 0, 0, 0, [], '"Thunderhead" heavy AC'),
    new Dwarf('Scout', 'assets/images/scout_banner.jpg', 0, 0, 0, [], 'Deepcore GK2 assault rifle'),
  ];

  constructor() { }

  public getDeepdiveDwarves() {
    if(localStorage.getItem('deepdive') === null) {
      return this.dwarves;
    }

    return this.dwarves;
  }

  public getDwarfFromLocalStorage(dwarfName: string) {
    if(localStorage.getItem('deepdive') === null) return;

    let deepdive = JSON.parse(localStorage.getItem('deepdive') || '{}');

    switch(dwarfName) {
      case 'Driller':
        return deepdive.driller;
      case 'Engineer':
        return deepdive.engineer;
      case 'Gunner':
        return deepdive.gunner;
      case 'Scout':
        return deepdive.scout;
    }

    return undefined;
  }

  public getDwarves() {
    return this.dwarves;
  }
}
