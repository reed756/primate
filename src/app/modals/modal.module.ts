import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProjectModalComponent } from './project-modal/project-modal.component';



@NgModule({
  declarations: [ProjectModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ProjectModalComponent]
})
export class ModalModule { }
