import { Component, ElementRef, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  maiuscula: string = '';
  palavra: string = '';
  antiga: string = '';
  nova: string = '';
  num1: number;
  num2: number;
  scanner: any;
  content: HTMLElement;
  img: HTMLElement;
  resultar = '';

  constructor(private qrScanner: QRScanner, public alertController: AlertController) {
   }

  ngOnInit() {
  }

  upper() {
    //console.log(this.palavra.toUpperCase());
    alert(this.maiuscula.toUpperCase());
  }

  trocar() {
    alert("Sua frase era: " + this.antiga);
    alert(this.antiga.replace(this.antiga, "Mas agora é esta"));
  }

  resultado() {
    if (this.num1 == this.num2) {
      alert(this.num1 + " é igual a " + this.num2);
    }
    else {
      alert(this.num1 + " é diferente de " + this.num2);
    }

  }

  lerQR() {
    this.content = document.getElementsByTagName('ion-content')[0];

    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.content.style.opacity = '0';

          this.scanner = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Escaneou!', text);

            this.resultar = (text['result']) ? text['result'] : text;

            this.exibirAlert(this.resultar);

            this.qrScanner.hide();
            this.scanner.unsubscribe();
          });

        } else if (status.denied) {

        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  async exibirAlert(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'QRCode ',
      subHeader: 'Subtitle',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

  }

}
