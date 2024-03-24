import {Injectable} from '@angular/core';
import {Monster} from "../model/monster.model";

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  public monsters: Monster[] = [
    new Monster('Grunt', 'assets/icon/grunt.png', 1, 3, 1,
      'assets/images/monsters/none.png', 'assets/images/monsters/grunt_attack.png', false,
      'Most common enemy type in the caves and especially during swarms.' +
      'Grunt attacks are purely melee based. Grunts are small enough so that' +
      'ranged attack weapons can fire over them, to hit a target on the other' +
      'side.'),
    new Monster('Web spitter', 'assets/icon/spitter.png', 2, 3, 5,
      'assets/images/monsters/spitter_resistance.png', 'assets/images/monsters/spitter_attack.png', false,
      'The Web Spitter fires damaging and sticky web projectiles from' +
      'afar. It can web a Dwarf, immobilising him in his next turn. This can' +
      'temporarily cripple a Dwarf\', rendering him wide open to attacks from' +
      'other Glyphids. Webbed Dwarves can perform all other actions than' +
      'movement in their next turn.'),
    new Monster('Exploder', 'assets/icon/exploder.png', 1, 3, 1,
      'assets/images/monsters/exploder_resistance.png', 'assets/images/monsters/exploder_attack.png', false,
      'When an Exploder is killed or gets activated while adjacent to a Dwarf' +
      'or Sentry Gun, it will explode, destroying itself and deal explosive' +
      'damage to figures in all adjacent spaces. Dwarves and Sentry Gun may' +
      'ignore a “Scare away” result.'),
    new Monster('Mactera Spawn', 'assets/icon/mactera_spawn.png', 2, 3, 3,
      'assets/images/monsters/mactera_spawn_resistance.png', 'assets/images/monsters/mactera_spawn_attack.png', false,
      'The Mactera can fly over any obstacle (including Stalagmites) but not' +
      'end on it. The creature attacks with a dangerous spit attack that can' +
      'stun its target, reducing his Action points by 1 in his next turn.'),
    new Monster('Slasher', 'assets/icon/slasher.png', 2, 3, 1,
      'assets/images/monsters/slasher_resistance.png', 'assets/images/monsters/slasher_attack.png', false,
      'The Glyphid Slasher is covered in sharp white growths, providing better' +
      'protection. It has a nasty habit of burrowing out of the ground, before' +
      'attacking. Slashers can knock over a Dwarf with a crippling slash' +
      'attack.'),
    new Monster('Brood Nexus', 'assets/icon/nexus.png', 5, 0, 0,
      'assets/images/monsters/nexus_resistance.png', 'assets/images/monsters/nexus_attack.png', false,
      'The immobile Brood Nexus has no attack (ignore any bite results), but it' +
      'can spawn Glyphid Grunts to adjacent spaces, nearest to a Dwarf. Once' +
      'the Brood dies, 2 Grunts spawn; One in its place, the other adjacent to it' +
      '(as close to nearest Dwarf as possible). These Grunts take no damage' +
      'from the attack that killed the Brood Nexus'),
    new Monster('Spitball Infector', 'assets/icon/spitball.png', 5, 0, 7,
      'assets/images/monsters/spitball_resistance.png', 'assets/images/monsters/spitball_attack.png', true,
      'The “Spitballer” is a tough, plant-like enemy, immobile as it is rooted to' +
      'the floor. It fires acidic mortar globs by swelling up for a second and' +
      'then spewing the glob at the nearest Dwarf, possibly knocking it over.' +
      'When killed, the Dwarf dealing the killing blow gets to draw a Rock and' +
      'Stone card as a morale boost.'),
    new Monster('Praetorian', 'assets/icon/praetorian.png', 6, 3, 2,
      'assets/images/monsters/praetorian_resistance.png', 'assets/images/monsters/praetorian_attack.png', true,
      'The imposing Praetorian is well protected, but its abdomen sticks out' +
      'at the rear, with no plating to protect it - thus, attacking it from behind' +
      '(see the green spaces in the diagram) lets you ignore its Resistance.' +
      'When moving the Praetorian, always face in the direction it moved' +
      '(towards nearest Dwarf). When it is killed, the Dwarf dealing the killing' +
      'blow gets to draw a Rock and Stone card as a morale boost.\n\n' +
      'When the Paetorian moves, it always faces the direction it moves in (towards the nearest Dwarf)'),
    new Monster('Oppressor', 'assets/icon/oppressor.png', 7, 4, 1,
      'assets/images/monsters/oppressor_resistance.png', 'assets/images/monsters/spitball_attack.png', true,
      'The monstrous Oppressor has thick front armor and the ability to' +
      'crash through rock (with no minerals) to get to its prey. Rock walls' +
      'and Stalagmites are destroyed where the Oppressor moves. When a' +
      'Dwarf attacks an Oppressor from behind (see the green spaces in the' +
      'diagram), he can ignore its Resistance. When moving the Oppressor,' +
      'count from the front part and always face in the direction it moves.' +
      'When it is killed, the Dwarf dealing the killing blow gets to draw a Rock' +
      'and Stone card as a morale boost. The Oppressor takes up two spaces' +
      'on the board - it can attack from either, and damage can be dealt to' +
      'either. Area effect weapons can deal its damage to both spaces'),
  ];

  public gooFromAbove: Monster[] = [
    new Monster('Goo Bomber', 'assets/icon/goo_bomber.png', 2, 3, 3,
      'assets/images/monsters/goo_bomber_resistance.png', 'assets/images/monsters/goo_bomber_attack.png', false,
      'The goo bomber will fly towards the nearest Dwarf. When it attacks, it not only hurts its target, ' +
      'but also surrounds it with sticky goo: Regardless of the dice result, place goo tokens on all vacant spaces ' +
      ' (not tunnel exits or pits) surrounding the target. Take goo tokens from elsewhere if you did not have enough to place. ' +
      ' Any non-flying creature or Dwarf walking onto a tile with goo must remove the goo it stepped on, and then end the move action immediately.'),
    new Monster('Menace', 'assets/icon/menace.png', 5, 3, 6,
      'assets/images/monsters/menace_resistance.png', 'assets/images/monsters/menace_attack.png', false,
      'The glyphid menace will attack with a dangerous acid spit. ' +
      'When the glyphid menace takes any damage (losing health) from an attack, it hides for a short while, ' +
      ' meaning it cannot be attacked again by any means in that Dwarf\'s turn. It will resurface at the end of that Dwarf\'s turn. ' +
      ' If it is stunned or frozen, it will NOT hide in the same turn.'),
  ];

  public getMonsters(): Monster[] {
    return this.monsters;
  }

  public getGooFromAbove(): Monster[] {
    return this.gooFromAbove;
  }
}
