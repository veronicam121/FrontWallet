import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestService } from '../../app/services/rest.service';
import { AlertService } from '../../app/services/alert.service';
import { IBlockchain } from '../../app/models/IBlockchain';
import { IBlock } from '../../app/models/IBlock';

// Component for displaying the updated data from the blockchain

@IonicPage()
@Component({
  selector: 'page-blockchain',
  templateUrl: 'blockchain.html',
})
export class BlockchainPage {

  private blockchain: IBlockchain;
  private block: IBlock;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restService: RestService,
              private alertService: AlertService) {
  }

  // Loads the Blockchain data
  private ngOnInit() {
    this.restService.getBlockchain().subscribe((blockchain) => {
      this.blockchain = blockchain;
    }, (error) => {
      this.handleError(error);
     });
  }

  private backButtonAction() {
    this.navCtrl.pop();
  }

  private getBlock(hash: string) {
    this.restService.getBlock(hash).subscribe((block) => {
      this.block = block;
    }, (error) => {
      this.handleError(error);
    });
  }

  private handleError(error) {
    this.alertService.showAlert().then((res) => {
      this.navCtrl.pop();
    },
    (err) => {
      this.navCtrl.pop();
    });
  }
}
