import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bebidas18menosPage } from './bebidas18menos.page';

const routes: Routes = [
  {
    path: '',
    component: Bebidas18menosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bebidas18menosPageRoutingModule {}
