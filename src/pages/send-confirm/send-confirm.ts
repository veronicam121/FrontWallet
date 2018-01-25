import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Address } from '../../app/models/address';

/**
 * Generated class for the SendConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-confirm',
  templateUrl: 'send-confirm.html',
})
export class SendConfirmPage {

  public address: Address;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.address = this.navParams.data;
  }

}
