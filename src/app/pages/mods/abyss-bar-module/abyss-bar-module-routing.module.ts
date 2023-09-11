import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbyssBarModulePage } from './abyss-bar-module.page';

const routes: Routes = [
  {
    path: '',
    component: AbyssBarModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbyssBarModulePageRoutingModule {}
