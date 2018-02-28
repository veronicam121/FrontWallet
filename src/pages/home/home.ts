import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ReceivePage } from '../receive/receive';
import { SendPage } from '../send/send';
import { RestService } from '../../app/services/rest.service';
import { User } from '../../app/models/user';
import { AppData } from '../../app/app.data';

// Component for the Home Page, displays user balance, and options

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  private user: User = AppData.user;
  private balance: number = 2.35;

  constructor(public navCtrl: NavController, private restService: RestService, public platform: Platform) {
  }

  private goToReceive() {
    this.navCtrl.push(ReceivePage);
  }

  private goToSend() {
    this.navCtrl.push(SendPage);
  }

  private backButtonAction() {
    this.platform.exitApp();
  }

}
