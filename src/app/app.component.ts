import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Deep dive tracker', url: '/deepdive', image: 'assets/icon/deepdive.png' },
  ];
  constructor() {}

  protected readonly window = window;
}
