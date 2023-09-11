import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-abyss-bar-module',
  templateUrl: './abyss-bar-module.page.html',
  styleUrls: ['./abyss-bar-module.page.scss'],
})
export class AbyssBarModulePage implements OnInit {

  public drinks = [
    {
      image: 'assets/icon/beers/dark_morkite.png', name: 'DARK MORKITE',
      description: 'Re-roll blank results on the white dice when taking the pickaxe action. The new result may only be used to mine morkite.'
    },
    {
      image: 'assets/icon/beers/backbreaker_stout.png', name: 'BACKBREAKER STOUT',
      description: 'While carrying an aquark, dwarves may move one space for free each turn, following all normal movement rules'
    },
    {
      image: 'assets/icon/beers/pots_o_gold.png', name: 'POT O\' GOLD',
      description: 'When mining a stalagmite, gain one gold in addition to rolling the mineral dice.'
    },
    {
      image: 'assets/icon/beers/red_rock_blaster.png', name: 'RED ROCK BLASTER',
      description: 'Each dwarf starts the mission with one extra health cube. When dwarf takes their first damage of the mission, discard the cube back to the box.'
    },
    {
      image: 'assets/icon/beers/rocky_mountain.png', name: 'ROCKY MOUNTAIN',
      description: 'May add one pickaxe to the result dice when taking a pickaxe action. Can\'t be used against a monster.'
    },
    {
      image: 'assets/icon/beers/skull_crusher.png', name: 'SKULL CRUSHER',
      description: 'When rolling the white dice during a pickaxe action, change one pickaxe result to two pickaxe. Both damage must be assigned to a single target. Limit once per turn.'
    },
    {
      image: 'assets/icon/beers/slayer_stout.png', name: 'SLAYER STOUT',
      description: 'Re-roll a blank result on the white dice when taking a pickaxxe action. Limit once per turn.'
    },
    {
      image: 'assets/icon/beers/tunnel_rat.png', name: 'TUNNEL RAT',
      description: 'The knocked over condition costs 1 less action to clear.'
    },
    {
      image: 'assets/icon/beers/glyphid_slammer.png', name: 'GLYPHID SLAMMER',
      description: 'Once per turn, a dwarf may use an action to scare all adjacent grunts one hex.'
    },
  ];

  ngOnInit(): void {
  }

}
