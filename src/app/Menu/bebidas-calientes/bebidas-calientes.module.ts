import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebidasCalientesPageRoutingModule } from './bebidas-calientes-routing.module';

import { BebidasCalientesPage } from './bebidas-calientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebidasCalientesPageRoutingModule
  ],
  declarations: [BebidasCalientesPage]
})
export class BebidasCalientesPageModule {}
