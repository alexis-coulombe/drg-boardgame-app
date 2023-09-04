import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DwarfRandomizerPage } from './dwarf-randomizer.page';
import {DwarfRandomizerRoutingModule} from "./dwarf-randomizer-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DwarfRandomizerRoutingModule
  ],
  declarations: [DwarfRandomizerPage]
})
export class DwarfRandomizerPageModule {}
