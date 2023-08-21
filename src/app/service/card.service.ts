import {Injectable} from '@angular/core';
import {Weapon} from "../model/weapon.model";
import {Throwable} from "../model/throwable.model";
import {WeaponModifier} from "../model/weapon-modifier.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private weapons: Weapon[] = [
    new Weapon('Bulldog heavy revolver', false, []),
    new Weapon('"Warthog" auto 210 shotgun', false, []),
    new Weapon('Experimental plasma igniter', false, []),
    new Weapon('Subata 120 semi-automatic', false, []),
    new Weapon('Zhukov nuk17 twin smgs', false, []),
    new Weapon('Stubby voltaic smg', false, []),
    new Weapon('Experimental plasma charger', false, []),
    new Weapon('Jury-rigged boomstick', false, []),
    new Weapon('Brt7 burst fire gun', false, [])
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

  public getWeapons(): Weapon[] {
    return this.weapons;
  }

  public getThrowables(): Throwable[] {
    return this.throwables;
  }

  public getWeaponModifiers(): WeaponModifier[] {
    return this.weaponModifiers;
  }
}
