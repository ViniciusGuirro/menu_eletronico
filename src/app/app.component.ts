import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'home' },
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Entrada', url: 'entrada', icon: 'restaurant' },
    { title: 'Principal', url: 'principal', icon: 'pizza' },
    { title: 'Sobremesas', url: 'sobremesa', icon: 'aperture' },
    { title: 'Bebidas 18+', url: 'bebidas18mais', icon: 'beer' },
    { title: 'Bebidas 18-', url: 'bebidas18menos', icon: 'cafe' },
    { title: 'Sobre', url: 'sobre', icon: 'aperture' },
  ];
  
  constructor() {}

  darkOnOff(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }
}
