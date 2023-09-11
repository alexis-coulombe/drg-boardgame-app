import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CommunityModsPage } from './community-mods.page';
import { CommunityModsPageRoutingModule } from "./community-mods-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityModsPageRoutingModule
  ],
  declarations: [CommunityModsPage]
})
export class CommunityModsPageModule {}
