import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobremesaPageRoutingModule } from './sobremesa-routing.module';

import { SobremesaPage } from './sobremesa.page';
import { TesteComponent } from 'src/app/components/teste/teste.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobremesaPageRoutingModule
  ],
  declarations: [SobremesaPage, TesteComponent]
})
export class SobremesaPageModule {}
