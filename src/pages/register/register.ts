import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public inputs: [{
    name: string,
    icon: string;
    type: string;
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inputs = [
      { name: 'Usuario', icon: 'wallet-user', type: 'text'},
      { name: 'Correo Electrónico', icon: 'wallet-email', type: 'email'},
      { name: 'Contraseña', icon: 'wallet-password', type: 'password'},
      { name: 'Repetir Contraseña', icon: 'wallet-password', type: 'password'}
    ];
  
  }

  private goToLogin() {
    this.navCtrl.pop();
  }
}
