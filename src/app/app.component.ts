import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Deep dive tracker', subtitle: '', url: '/deepdive', image: 'assets/icon/deepdive.png' },
    { title: 'Dwarf randomizer', subtitle: '', url: '/dwarf-randomizer', image: 'assets/icon/sabotage.png' },
    { title: 'Monster sheets', subtitle: '', url: '/monster-sheet', image: 'assets/icon/egg.png' },
    { title: 'Community mods', subtitle: '', url: '/community-mods', image: 'assets/icon/escort.png' },
  ];

  protected readonly window = window;
}
