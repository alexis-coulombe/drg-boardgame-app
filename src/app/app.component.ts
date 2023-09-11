import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Deep dive tracker', subtitle: '', url: '/deepdive', image: 'assets/icon/deepdive.png' },
    { title: 'Dwarf randomizer', subtitle: '', url: '/dwarf-randomizer', image: 'assets/icon/randomizer.png' },
    { title: 'Mission generator', subtitle: 'Work in progress', url: '#', image: 'assets/icon/mission_control.png' },
    { title: 'Monster sheets', subtitle: '', url: '/monster-sheet', image: 'assets/icon/monster_sheet.png' },
  ];
  constructor() {}

  protected readonly window = window;
}
