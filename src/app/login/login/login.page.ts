import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = 'viniciusguirro@gmail.com';
  senha: string = '123456';

  constructor() { }

  ngOnInit() {
  }
  
  autenticar(){

    if(this.email == 'viniciusguirro@gmail.com' && this.senha == '123456'){
      alert('Autenticado');
    }
    else{
      alert('Login incorreto');
    }
    
  }

}
