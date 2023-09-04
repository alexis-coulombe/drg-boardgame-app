import {Injectable} from '@angular/core';
import {Weapon} from "../model/weapon.model";
import {Throwable} from "../model/throwable.model";
import {WeaponModifier} from "../model/weapon-modifier.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private primaries: Weapon[] = [
    new Weapon('Cryo cannon'),
    new Weapon('Breach cutter'),
    new Weapon('"Thunderhead" heavy AC'),
    new Weapon('Deepcore GK2 assault rifle'),
  ];

  private secondaries: Weapon[] = [
    new Weapon('Bulldog heavy revolver'),
    new Weapon('"Warthog" auto 210 shotgun'),
    new Weapon('Experimental plasma igniter'),
    new Weapon('Subata 120 semi-automatic'),
    new Weapon('Zhukov nuk17 twin smgs'),
    new Weapon('Stubby voltaic smg'),
    new Weapon('Experimental plasma charger'),
    new Weapon('Jury-rigged boomstick'),
    new Weapon('Brt7 burst fire gun')
  ];

  private throwables: Throwable[] = [
    new Throwable('Inhibitor field'),
    new Throwable('Soil smasher'),
    new Throwable('Impact axe'),
    new Throwable('L.U.R.E. grenade'),
    new Throwable('Electrocution grenade'),
    new Throwable('Corrosive bomb'),
    new Throwable('Phosphor grenade'),
    new Throwable('Proximity grenade'),
    new Throwable('Frag grenade'),
    new Throwable('Incendiary grenade'),
    new Throwable('Tunnel carver'),
    new Throwable('Plasma grenade'),
    new Throwable('Cryo grenade'),
    new Throwable('Sticky grenade'),
    new Throwable('Stachel charge'),
    new Throwable('Cluster grenade')
  ];

  private weaponModifiers: WeaponModifier[] = [
    new WeaponModifier('Dice x2'),
    new WeaponModifier('Ignore resistance'),
    new WeaponModifier('Range +1'),
    new WeaponModifier('Reroll dice'),
    new WeaponModifier('Stunned effect'),
    new WeaponModifier('Bonus explosion dice'),
    new WeaponModifier('Bonus flame dice'),
    new WeaponModifier('Bonus armor-piercing dice'),
    new WeaponModifier('Bonus bullet dice'),
    new WeaponModifier('Any ammo type'),
  ];

  constructor() {
  }

  public getSecondaries(): Weapon[] {
    return this.secondaries;
  }

  public getThrowables(): Throwable[] {
    return this.throwables;
  }

  public getWeaponModifiers(): WeaponModifier[] {
    return this.weaponModifiers;
  }
}
