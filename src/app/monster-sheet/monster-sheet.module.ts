import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonsterSheetPageRoutingModule } from './monster-sheet-routing.module';

import { MonsterSheetPage } from './monster-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonsterSheetPageRoutingModule
  ],
  declarations: [MonsterSheetPage]
})
export class MonsterSheetPageModule {}
