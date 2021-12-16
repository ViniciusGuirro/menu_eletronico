import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bebidas18maisPage } from './bebidas18mais.page';

const routes: Routes = [
  {
    path: '',
    component: Bebidas18maisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bebidas18maisPageRoutingModule {}
