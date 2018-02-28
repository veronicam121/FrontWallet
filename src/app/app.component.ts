import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Side Menu Pages
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { AddressBookPage } from '../pages/address-book/address-book';
import { TransactionsPage } from '../pages/transactions/transactions';
import { ActivityPage } from '../pages/activity/activity';
import { BlockchainPage } from '../pages/blockchain/blockchain';
import { RestService } from './services/rest.service';
import { LoaderService } from './services/loader.service';

@Component({
  providers: [RestService],
  templateUrl: 'app.html',
})

export class MyApp {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = HomePage;
  public pages: Array<{
    title: string,
    component: any,
    icon: string,
  }>;
  public username: string;
  public avatar: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public restService: RestService) {
    this.initializeApp();
    // List of pages that appear on the Side Menu
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'wallet-home' },
      { title: 'Cuenta', component: AccountPage, icon: 'wallet-account' },
      { title: 'Libreta de Contactos', component: AddressBookPage, icon: 'wallet-address-book' },
      { title: 'Transacciones', component: TransactionsPage, icon: 'wallet-transactions' },
      { title: 'Actividad', component: ActivityPage, icon: 'wallet-activity' },
      { title: 'Datos del BlockChain', component: BlockchainPage, icon: 'wallet-transactions' },
    ];

    this.username = 'Usuario';

    // Handle Register Back Button
    platform.registerBackButtonAction(() => {
      const activeView: ViewController = this.nav.getActive();
      if (activeView != null) {
        if (this.nav.canGoBack()) {
          this.nav.pop();
        } else if (typeof activeView.instance.backButtonAction === 'function') {
          activeView.instance.backButtonAction();
        } else {
          this.nav.parent.select(0); // goes to the first tab
        }
      }
    });

  }

  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Function for opening the Side Menu Pages
  public openPage(page) {
    if (page.component !== this.rootPage) {
      this.nav.push(page.component);
    }
  }

  // Log Out of the App
  public logOut() {
    this.nav.setRoot(LoginPage);
  }
}
