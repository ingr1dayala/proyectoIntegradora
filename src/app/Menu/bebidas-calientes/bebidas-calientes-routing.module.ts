import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebidasCalientesPage } from './bebidas-calientes.page';

const routes: Routes = [
  {
    path: '',
    component: BebidasCalientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasCalientesPageRoutingModule {}
