import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimatesGuidePage } from './primates-guide.page';

const routes: Routes = [
  {
    path: '',
    component: PrimatesGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimatesGuidePageRoutingModule {}
