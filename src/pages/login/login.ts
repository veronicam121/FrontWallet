import { Component, ViewChild } from '@angular/core';
import { IonicPage,  NavController, NavParams, Platform} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../register/register';

// Component for the Login Page
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public inputs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
      this.inputs = [
        { name: 'Correo Electrónico', icon: 'wallet-email', type: 'email'},
        { name: 'Contraseña', icon: 'wallet-password', type: 'password'},
      ];
  }

  private goToLogIn() {
    this.navCtrl.setRoot(HomePage);
  }

  private goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  private backButtonAction() {
    this.platform.exitApp();
  }

}
