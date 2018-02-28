import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestService } from '../../app/services/rest.service';
import { Transaction } from '../../app/models/transaction';
import { AppData } from '../../app/app.data';

@IonicPage()
@Component({
  providers: [RestService],
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  public transactionList: Transaction[];
  public search: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionList = AppData.transactionList;
  }

  private backButtonAction() {
    this.navCtrl.pop();
  }
}
