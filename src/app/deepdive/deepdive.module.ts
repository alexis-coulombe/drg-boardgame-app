import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeepdivePageRoutingModule } from './deepdive-routing.module';

import { DeepdivePage } from './deepdive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeepdivePageRoutingModule
  ],
  declarations: [DeepdivePage]
})
export class DeepdivePageModule {}
