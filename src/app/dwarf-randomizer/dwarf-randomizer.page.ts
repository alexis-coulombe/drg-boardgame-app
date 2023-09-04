import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DwarfService} from "../service/dwarf.service";
import {Dwarf} from "../model/dwarf.model";
import {CardService} from "../service/card.service";

@Component({
  selector: 'app-dwarf-randomizer',
  templateUrl: './dwarf-randomizer.page.html',
  styleUrls: ['./dwarf-randomizer.page.scss'],
})
export class DwarfRandomizerPage implements OnInit, AfterViewChecked {

  randomDwarf?: Dwarf = undefined;
  boscoEnabled: boolean = false;
  startWithWave: boolean = false;

  constructor(protected dwarfService: DwarfService,
              protected cardService: CardService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  generateDwarf() {
    const dwarfNo: number = Math.floor(Math.random() * this.dwarfService.getDwarves().length);
    const primaryNo: number = Math.floor(Math.random() * 10);
    const secondaryNo: number = Math.floor(Math.random() * this.cardService.getSecondaries().length);
    const throwableNo: number = Math.floor(Math.random() * this.cardService.getThrowables().length);
    const startHealth: number = Math.floor(Math.random() * 5) + 1;

    this.boscoEnabled = Math.floor(Math.random() * 10) % 2 === 0;
    this.startWithWave = Math.floor(Math.random() * 10) % 2 === 0;

    this.dwarfService.getDwarves().forEach((dwarf, index) => {
      if (index === dwarfNo) {
        this.randomDwarf = dwarf;

        if (primaryNo % 2 === 0) {
          this.randomDwarf.primaryWeapon = dwarf.primaryWeapon;
        } else {
          this.randomDwarf.primaryWeapon = 'Don\'t change';
        }

        this.randomDwarf.health = startHealth;

        return;
      }
    });

    if (this.randomDwarf === undefined) {
      return;
    }

    this.randomDwarf.throwables = [this.cardService.getThrowables()[throwableNo].name];
    this.randomDwarf.secondaryWeapon = this.cardService.getSecondaries()[secondaryNo].name;
  }
}
