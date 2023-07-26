import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebidasFriasPageRoutingModule } from './bebidas-frias-routing.module';

import { BebidasFriasPage } from './bebidas-frias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebidasFriasPageRoutingModule
  ],
  declarations: [BebidasFriasPage]
})
export class BebidasFriasPageModule {}
