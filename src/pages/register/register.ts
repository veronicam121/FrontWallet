import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmEmailPage } from '../confirm-email/confirm-email';
import { AppData } from '../../app/app.data';

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public inputs = AppData.inputs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private goToConfirmPage() {
    this.navCtrl.push(ConfirmEmailPage);
  }

  private backButtonAction() {
    this.navCtrl.pop();
  }
}
