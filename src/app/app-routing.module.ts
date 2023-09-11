import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deepdive',
    pathMatch: 'full'
  },
  {
    path: 'deepdive',
    loadChildren: () => import('./pages/deepdive/deepdive.module').then(m => m.DeepdivePageModule)
  },
  {
    path: 'dwarf-randomizer',
    loadChildren: () => import('./pages/dwarf-randomizer/dwarf-randomizer.module').then(m => m.DwarfRandomizerPageModule)
  },
  {
    path: 'monster-sheet',
    loadChildren: () => import('./pages/monster-sheet/monster-sheet.module').then(m => m.MonsterSheetPageModule)
  },
  {
    path: 'community-mods',
    loadChildren: () => import('./pages/community-mods/community-mods.module').then(m => m.CommunityModsPageModule)
  },
  {
    path: 'mods/abyss-bar-module',
    loadChildren: () => import('./pages/mods/abyss-bar-module/abyss-bar-module.module').then(m => m.AbyssBarModulePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
