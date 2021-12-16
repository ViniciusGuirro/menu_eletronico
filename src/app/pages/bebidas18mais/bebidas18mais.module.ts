import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bebidas18maisPageRoutingModule } from './bebidas18mais-routing.module';

import { Bebidas18maisPage } from './bebidas18mais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bebidas18maisPageRoutingModule
  ],
  declarations: [Bebidas18maisPage]
})
export class Bebidas18maisPageModule {}
