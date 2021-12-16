import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
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