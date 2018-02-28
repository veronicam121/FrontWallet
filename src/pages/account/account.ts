import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { RestService } from '../../app/services/rest.service';
import { AppData } from '../../app/app.data';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public user: User;
  public options: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = AppData.user;
    this.options = AppData.accountOptions;
  }

  private backButtonAction() {
    this.navCtrl.pop();
    }
}
