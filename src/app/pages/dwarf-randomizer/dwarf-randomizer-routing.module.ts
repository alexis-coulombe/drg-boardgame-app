import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwarfRandomizerPage } from './dwarf-randomizer.page';

const routes: Routes = [
  {
    path: '',
    component: DwarfRandomizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DwarfRandomizerRoutingModule {}
