import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bebidas18menos',
  templateUrl: './bebidas18menos.page.html',
  styleUrls: ['./bebidas18menos.page.scss'],
})
export class Bebidas18menosPage implements OnInit {

  valor: number = 0;

  constructor(private alert: AlertController) { }

  ngOnInit() {
  }

  async alerta() {
    const alert = await this.alert.create({
      header: 'Confirmação',
      message: 'Confirmar pedido?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }

  maior(){
    this.valor++
  }

  menor(){
    if(this.valor>0){
      this.valor--
    }
  }

}