import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimateInfoPage } from './primate-info.page';

const routes: Routes = [
  {
    path: '',
    component: PrimateInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimateInfoPageRoutingModule {}
