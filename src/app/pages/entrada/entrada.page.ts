import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alerta() {
    const alert = await this.alertCtrl.create({
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

}