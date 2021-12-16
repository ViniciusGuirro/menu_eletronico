import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./pages/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./pages/sobremesa/sobremesa.module').then( m => m.SobremesaPageModule)
  },
  {
    path: 'bebidas18mais',
    loadChildren: () => import('./pages/bebidas18mais/bebidas18mais.module').then( m => m.Bebidas18maisPageModule)
  },
  {
    path: 'bebidas18menos',
    loadChildren: () => import('./pages/bebidas18menos/bebidas18menos.module').then( m => m.Bebidas18menosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
