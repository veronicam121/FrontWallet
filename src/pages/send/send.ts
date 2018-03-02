import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressBookPage } from '../address-book/address-book';
import { Events } from 'ionic-angular/util/events';
import { Address } from '../../app/models/address';
import { SendConfirmPage } from '../send-confirm/send-confirm';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { AlertService } from '../../app/services/alert.service';

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  private selectedAddress: Address;

  constructor(public navCtrl: NavController, public navParams: NavParams, public event: Events,
              private qrScanner: QRScanner, private alertService: AlertService) {
    this.event.subscribe('selected:address', (addressData) => {
      this.selectedAddress = this.duplicateAddress(addressData);
    });
  }

  public scanQRCode() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          console.log('here');
          const scanSub = this.qrScanner.scan()
          .subscribe((text: string) => {
            // We must do something here with the address provided
            console.log(text);
            this.qrScanner.hide();
            window.document.querySelector('ion-app').classList.remove('transparent-body');
            scanSub.unsubscribe();
          });
          this.qrScanner.show();
          window.document.querySelector('ion-app').classList.add('transparent-body');
          // wait for user to scan something, then the observable callback will be called
        } else if (status.denied) {
          this.alertService.showAlert('Error')
            .then((rest) => {
              // Implement method for getting user permissions on settings
              // camera permission was permanently denied
              // you must use QRScanner.openSettings() method to guide the user to the settings page
              // then they can grant the permission from there
              this.navCtrl.pop();
            });
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((error) => {
        this.alertService.showAlert(error).then((rest) => {
          // Do nothing
        });
      });
  }


  public goToAddress() {
    console.log('here');
    this.navCtrl.push(AddressBookPage);
  }
  private duplicateAddress(object) {
    return new Address(object.id, object.img, object.alias, object.address);
  }

  private goToSendConfirm(address) {
    this.navCtrl.push(SendConfirmPage, address);
  }

  private backButtonAction() {
    this.navCtrl.pop();
  }

}
