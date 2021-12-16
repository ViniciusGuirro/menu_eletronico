import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { AlertController, IonBadge, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bebidas18mais',
  templateUrl: './bebidas18mais.page.html',
  styleUrls: ['./bebidas18mais.page.scss'],
})
export class Bebidas18maisPage implements OnInit {

  itens : any[] = [];
  numMenor: number = 0;

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { 
    let itemJson = localStorage.getItem('chave');

    if(itemJson !=null){
      this.itens = JSON.parse(itemJson);
    }
   }

  ngOnInit() {
  }

  menor() {
    if (this.numMenor > 0) {
      this.numMenor--
    }
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

  async addItem() {
    const alert = await this.alertCtrl.create({
      header: 'Inserir novo item',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome Item'
        },
        {
          name: 'preco',
          type: 'text',
          placeholder: 'Valor'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Adicionar',
          handler: (form) => {
            this.adicionar(form.nome, form.preco)
          }
        }
      ]
    });
    await alert.present();
  }

  async adicionar(nome: string, preco: string) {

    if (nome.trim().length < 1 || preco.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Não preenchido!',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      return;
    }

    let item = {name: nome, preco, done: false}
    this.itens.push(item);

    this.salvarStorage();
  }
  salvarStorage(){
    localStorage.setItem('chave', JSON.stringify(this.itens));
  }

  deletar(item : any){
    this.itens = this.itens.filter(itemArray=> item != itemArray);
    this.salvarStorage();
  }
}
