import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';




@NgModule({
  declarations: [ShowHidePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [ShowHidePasswordComponent],

})
export class ComponentsModule { }
