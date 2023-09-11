import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityModsPage } from './community-mods.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityModsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityModsPageRoutingModule {}
