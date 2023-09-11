import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {Dwarf} from "../model/dwarf.model";
import {DwarfService} from "../service/dwarf.service";
import {CardService} from "../service/card.service";
import {Deepdive} from "../model/deepdive.model";
import {AdMob, AdOptions, BannerAdOptions, BannerAdPosition, BannerAdSize} from "@capacitor-community/admob";

@Component({
  selector: 'app-deepdive',
  templateUrl: './deepdive.page.html',
  styleUrls: ['./deepdive.page.scss'],
})
export class DeepdivePage implements OnInit {
  // @ts-ignore
  @ViewChild(IonModal) modal: IonModal;

  selectedDwarf: Dwarf = new Dwarf();
  deepdive: Deepdive = new Deepdive();
  resetAllButton = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        return;
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: () => {
        this.resetAll();
      },
    },
  ];

  constructor(protected dwarfService: DwarfService, protected cardService: CardService) {
    this.loadData();
    this.showBannerAd();
  }

  ngOnInit() {

  }

  async showBannerAd() {
    AdMob.initialize({
      requestTrackingAuthorization: false,
      initializeForTesting: false,
    })

    const options: BannerAdOptions = {
      adId: 'ca-app-pub-4650782712352720/6342753007',
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false,
    };

    //await AdMob.showBanner(options);
  }

  onWillDismiss(event: any) {
    if (event.detail.role === 'confirm') {
      this.saveData();
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  openModal(dwarf: Dwarf) {
    let foundDwarf = this.dwarfService.getDwarfFromLocalStorage(dwarf.name);

    if (foundDwarf === undefined) {
      foundDwarf = this.dwarfService.getDeepdiveDwarves().find(d => d.name === dwarf.name);
    }

    if (foundDwarf === undefined) return;

    this.selectedDwarf = foundDwarf;

    for (let i = 1; i < this.selectedDwarf.health; i++) {
      document.getElementById(`#health-${i}`)?.click();
    }

    this.modal.present();

  }

  saveData() {
    if (this.selectedDwarf === undefined) return;

    if (this.selectedDwarf.primaryAmmo > 5) {
      this.selectedDwarf.primaryAmmo = 5;
    }

    if (this.selectedDwarf.secondaryAmmo > 5) {
      this.selectedDwarf.secondaryAmmo = 5;
    }

    if (this.selectedDwarf.primaryAmmo < 0) {
      this.selectedDwarf.primaryAmmo = 0;
    }

    if (this.selectedDwarf.secondaryAmmo < 0) {
      this.selectedDwarf.secondaryAmmo = 0;
    }

    switch (this.selectedDwarf.name) {
      case 'Driller':
        this.deepdive.driller = this.selectedDwarf;
        break;
      case 'Engineer':
        this.deepdive.engineer = this.selectedDwarf;
        break;
      case 'Gunner':
        this.deepdive.gunner = this.selectedDwarf;
        break;
      case 'Scout':
        this.deepdive.scout = this.selectedDwarf;
        break;
    }

    this.deepdive.lastSave = new Date().toLocaleString();

    localStorage.setItem('deepdive', JSON.stringify(this.deepdive));
  }

  loadData() {
    if (localStorage.getItem('deepdive') === null) return;

    this.deepdive = JSON.parse(localStorage.getItem('deepdive') || JSON.stringify(this.deepdive));
  }

  updateHealth(health: number) {
    if (this.selectedDwarf === undefined) return;

    this.selectedDwarf.health = health;
  }

  increaseMission() {
    this.deepdive.mission = this.deepdive.mission + 1;
    this.saveData();
  }

  resetAll() {
    this.deepdive = new Deepdive(1, undefined, undefined, undefined, undefined);
    localStorage.removeItem('deepdive');
  }

  OnAmmoChange(event: any) {
    if (this.selectedDwarf === undefined) return;

    // cap ammo to 5 max
    if (event.target.value > 5) {
      event.target.value = 5;
    }
  }

  protected readonly Array = Array;
}
