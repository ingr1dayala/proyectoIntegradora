import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaRapidaPage } from './comida-rapida.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaRapidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaRapidaPageRoutingModule {}
