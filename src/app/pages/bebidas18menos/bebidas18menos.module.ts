import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bebidas18menosPageRoutingModule } from './bebidas18menos-routing.module';

import { Bebidas18menosPage } from './bebidas18menos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bebidas18menosPageRoutingModule,
  ],
  declarations: [Bebidas18menosPage],
})
export class Bebidas18menosPageModule {}
