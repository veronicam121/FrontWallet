import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppData } from '../../app/app.data';

// Component for Receiving BTC Page. Displays the user QR Code an address
@IonicPage()
@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})

export class ReceivePage {
  // Placeholder data for the view
  private code: string = AppData.code;
  private address: string = AppData.address;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  private backButtonAction() {
    this.navCtrl.pop();
  }

}
