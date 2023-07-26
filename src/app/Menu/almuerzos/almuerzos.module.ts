import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmuerzosPageRoutingModule } from './almuerzos-routing.module';

import { AlmuerzosPage } from './almuerzos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmuerzosPageRoutingModule
  ],
  declarations: [AlmuerzosPage]
})
export class AlmuerzosPageModule {}
