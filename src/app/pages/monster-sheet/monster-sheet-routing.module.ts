import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterSheetPage } from './monster-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: MonsterSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonsterSheetPageRoutingModule {}
