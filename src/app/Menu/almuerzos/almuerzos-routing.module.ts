import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlmuerzosPage } from './almuerzos.page';

const routes: Routes = [
  {
    path: '',
    component: AlmuerzosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlmuerzosPageRoutingModule {}
