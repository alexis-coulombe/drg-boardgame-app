import {Component, OnInit, ViewChild} from '@angular/core';
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
