import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestService } from '../../app/services/rest.service';
import { AlertService } from '../../app/services/alert.service';
import { IBlockchain } from '../../app/models/IBlockchain';
import { IBlock } from '../../app/models/IBlock';
import { animate, state, style, transition, trigger} from '@angular/animations';

// Component for displaying the updated data from the blockchain

@IonicPage()
@Component({
  selector: 'page-blockchain',
  templateUrl: 'blockchain.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1})),
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0})),
        ]),
        trigger('flashChange', [
          state('off', style({
              backgroundColor: '#ffffff',
          })),
          state('on', style({
              backgroundColor: '#d56930',
          })),
          transition('off => on', animate('500ms')),
          transition('on => off ', animate('500ms')),
        ]),
      ],
    ),
  ],
})
export class BlockchainPage {

  private blockchain: IBlockchain;
  private block: IBlock;
  private showBlock: boolean;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private restService: RestService,
              private alertService: AlertService) {
    this.showBlock = false;
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

  private toggleBlock(hash: string) {
    if (this.block !== undefined) {
      this.showBlock = !this.showBlock;
    } else {
     this.getBlock(hash);
    }
  }

  private getBlock(hash: string, only?: boolean) {
    if (only) {
      this.blockchain = undefined;
    }
    this.restService.getBlock(hash).subscribe((block) => {
      this.showBlock = true;
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
