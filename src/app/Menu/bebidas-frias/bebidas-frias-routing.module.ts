import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebidasFriasPage } from './bebidas-frias.page';

const routes: Routes = [
  {
    path: '',
    component: BebidasFriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasFriasPageRoutingModule {}
