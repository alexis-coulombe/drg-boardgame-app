import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AbyssBarModulePage } from './abyss-bar-module.page';
import { AbyssBarModulePageRoutingModule } from "./abyss-bar-module-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbyssBarModulePageRoutingModule
  ],
  declarations: [AbyssBarModulePage]
})
export class AbyssBarModulePageModule {}
