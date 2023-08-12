import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'src/app/modals/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    ModalModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
