import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { RestService } from '../../app/services/rest.service';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public user: User;
  public options: [{
    title: string,
    // component: any,
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, private restService: RestService) {
    this.user = restService.user;
    this.options = [
      { title: 'Correo Electrónico'}, // component}
      { title: 'Nombre del Usuario'}, // component: HomePage },
      { title: 'Contraseña'}, // component: ListPage },
    ];
  }
}
