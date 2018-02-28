import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-confirm-email',
  templateUrl: 'confirm-email.html',
})
export class ConfirmEmailPage {

  private message = 'Se ha enviado un correo de verificación a';
  private email: 'Correo electrónico';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.navCtrl.swipeBackEnabled = false;
    this.viewCtrl.showBackButton(false);
  }

  private resendEmail() {
    // Reenviamos el correo de verificacion
  }

  private goBack() {
    this.navCtrl.popToRoot();
  }

}
