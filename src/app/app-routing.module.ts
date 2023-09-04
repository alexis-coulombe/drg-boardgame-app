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
    loadChildren: () => import('./deepdive/deepdive.module').then( m => m.DeepdivePageModule)
  },
  {
    path: 'dwarf-randomizer',
    loadChildren: () => import('./dwarf-randomizer/dwarf-randomizer.module').then( m => m.DwarfRandomizerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
