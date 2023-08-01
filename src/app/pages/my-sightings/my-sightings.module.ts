import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySightingsPageRoutingModule } from './my-sightings-routing.module';

import { MySightingsPage } from './my-sightings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySightingsPageRoutingModule
  ],
  declarations: [MySightingsPage]
})
export class MySightingsPageModule {}
