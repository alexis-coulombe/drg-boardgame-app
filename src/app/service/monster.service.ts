import {Injectable} from '@angular/core';
import {Monster} from "../model/monster.model";

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  public monsters: Monster[] = [
    new Monster('Grunt', 'assets/icon/grunt.png', 1, 3, 1,
      'assets/images/monsters/none.png', 'assets/images/monsters/grunt_attack.png', false,
      'Most common enemy type in the caves and especially during swarms.\n' +
      'Grunt attacks are purely melee based. Grunts are small enough so that\n' +
      'ranged attack weapons can fire over them, to hit a target on the other\n' +
      'side.'),
    new Monster('Web spitter', 'assets/icon/spitter.png', 2, 3, 5,
      'assets/images/monsters/spitter_resistance.png', 'assets/images/monsters/spitter_attack.png', false,
      'The Web Spitter fires damaging and sticky web projectiles from\n' +
      'afar. It can web a Dwarf, immobilising him in his next turn. This can\n' +
      'temporarily cripple a Dwarf\', rendering him wide open to attacks from\n' +
      'other Glyphids. Webbed Dwarves can perform all other actions than\n' +
      'movement in their next turn.'),
    new Monster('Exploder', 'assets/icon/exploder.png', 1, 3, 1, '',  '', false,
      'When an Exploder is killed or gets activated while adjacent to a Dwarf\n' +
      'or Sentry Gun, it will explode, destroying itself and deal explosive\n' +
      'damage to figures in all adjacent spaces. Dwarves and Sentry Gun may\n' +
      'ignore a “Scare away” result.'),
    new Monster('Mactera Spawn', 'assets/icon/mactera_spawn.png', 2, 3, 3, '',  '', false,
      'The Mactera can fly over any obstacle (including Stalagmites) but not\n' +
      'end on it. The creature attacks with a dangerous spit attack that can\n' +
      'stun its target, reducing his Action points by 1 in his next turn.'),
    new Monster('Slasher', 'assets/icon/slasher.png', 2, 3, 1, '', '', false,
      'The Glyphid Slasher is covered in sharp white growths, providing better\n' +
      'protection. It has a nasty habit of burrowing out of the ground, before\n' +
      'attacking. Slashers can knock over a Dwarf with a crippling slash\n' +
      'attack.'),
    new Monster('Brood Nexus', 'assets/icon/nexus.png', 5, 0, 0, '', '', false,
      'The immobile Brood Nexus has no attack (ignore any bite results), but it\n' +
      'can spawn Glyphid Grunts to adjacent spaces, nearest to a Dwarf. Once\n' +
      'the Brood dies, 2 Grunts spawn; One in its place, the other adjacent to it\n' +
      '(as close to nearest Dwarf as possible). These Grunts take no damage\n' +
      'from the attack that killed the Brood Nexus'),
    new Monster('Spitball Infector', 'assets/icon/spitball.png', 5, 0, 7, '', '', false,
      'The “Spitballer” is a tough, plant-like enemy, immobile as it is rooted to\n' +
      'the floor. It fires acidic mortar globs by swelling up for a second and\n' +
      'then spewing the glob at the nearest Dwarf, possibly knocking it over.\n' +
      'When killed, the Dwarf dealing the killing blow gets to draw a Rock and\n' +
      'Stone card as a morale boost.'),
    new Monster('Praetorian', 'assets/icon/praetorian.png', 6, 3, 2, '', '', false,
      'The imposing Praetorian is well protected, but its abdomen sticks out\n' +
      'at the rear, with no plating to protect it - thus, attacking it from behind\n' +
      '(see the green spaces in the diagram) lets you ignore its Resistance.\n' +
      'When moving the Praetorian, always face in the direction it moved\n' +
      '(towards nearest Dwarf). When it is killed, the Dwarf dealing the killing\n' +
      'blow gets to draw a Rock and Stone card as a morale boost.'),
    new Monster('Oppressor', 'assets/icon/oppressor.png', 7, 4, 1, '', '', false,
      'The monstrous Oppressor has thick front armor and the ability to\n' +
      'crash through rock (with no minerals) to get to its prey. Rock walls\n' +
      'and Stalagmites are destroyed where the Oppressor moves. When a\n' +
      'Dwarf attacks an Oppressor from behind (see the green spaces in the\n' +
      'diagram), he can ignore its Resistance. When moving the Oppressor,\n' +
      'count from the front part and always face in the direction it moves.\n' +
      'When it is killed, the Dwarf dealing the killing blow gets to draw a Rock\n' +
      'and Stone card as a morale boost. The Oppressor takes up two spaces\n' +
      'on the board - it can attack from either, and damage can be dealt to\n' +
      'either. Area effect weapons can deal its damage to both spaces'),
  ];

  constructor() {

  }

  public getMonsters(): Monster[] {
    return this.monsters;
  }
}
