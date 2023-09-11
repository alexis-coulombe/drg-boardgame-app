import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {Dwarf} from "../model/dwarf.model";
import {DwarfService} from "../service/dwarf.service";
import {CardService} from "../service/card.service";
import {Deepdive} from "../model/deepdive.model";
import {AdMob, AdOptions, BannerAdOptions, BannerAdPosition, BannerAdSize} from "@capacitor-community/admob";
import {MonsterService} from "../service/monster.service";

@Component({
  selector: 'app-monster-sheet',
  templateUrl: './monster-sheet.page.html',
  styleUrls: ['./monster-sheet.page.scss'],
})
export class MonsterSheetPage implements OnInit {

  constructor(protected monsterService: MonsterService) {

  }

  ngOnInit(): void {
  }

}
