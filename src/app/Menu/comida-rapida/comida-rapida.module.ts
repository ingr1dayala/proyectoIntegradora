import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaRapidaPageRoutingModule } from './comida-rapida-routing.module';

import { ComidaRapidaPage } from './comida-rapida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaRapidaPageRoutingModule
  ],
  declarations: [ComidaRapidaPage]
})
export class ComidaRapidaPageModule {}
