import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaPageRoutingModule } from './entrada-routing.module';

import { EntradaPage } from './entrada.page';
import { TesteComponent } from 'src/app/components/teste/teste.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaPageRoutingModule
  ],
  declarations: [EntradaPage, TesteComponent]
})
export class EntradaPageModule {}
