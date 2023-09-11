import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeepdivePage } from './deepdive.page';

const routes: Routes = [
  {
    path: '',
    component: DeepdivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeepdivePageRoutingModule {}
