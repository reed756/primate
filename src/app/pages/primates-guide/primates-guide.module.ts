import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimatesGuidePageRoutingModule } from './primates-guide-routing.module';

import { PrimatesGuidePage } from './primates-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimatesGuidePageRoutingModule
  ],
  declarations: [PrimatesGuidePage]
})
export class PrimatesGuidePageModule {}
