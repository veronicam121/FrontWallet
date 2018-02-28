import { Address } from './models/address';
import { User } from './models/user';
import { Activity } from './models/activity';
import { Transaction } from './models/transaction';

export class AppData {
    public static wallet = {
        guid: '4b8cd8e9-9480-44cc-b7f2-527e98ee3287',
        address: '12AaMuRnzw6vW6s2KPRAGeX53meTf8JbZS',
        label: 'Billetera BTC',
    };
    public static user = new User('Nombre',
        'correo@correo.com',
        'assets/imgs/QRCode.png',
        AppData.wallet,
        '../../assets/imgs/user.png',
    );
    public static addressBook = [
        new Address(1, '../../assets/icon/wallet-user.svg', 'alias 1', '42sdsvgf93ghg823'),
        new Address(2, '../../assets/icon/wallet-user.svg', 'alias 2', 'acnjsdnjwsdsjdsd'),
        new Address(3, '../../assets/icon/wallet-user.svg', 'alias 3', 'dfje4y7837yjsdcx'),
      ];
    public static activityList = [
        new Activity(1, '12/12/2017', 'Acceso desde dispositivo Android NG-7800'),
        new Activity(2, '06/11/2017', 'Cambio de clave'),
        new Activity(3, '05/04/2017', 'Se agregaron 00,156 BTC a la billetera'),
        new Activity(4, '28/03/2017', 'Se agregaron 00,23 BTC a la billetera'),
        new Activity(5, '14/01/2017', 'Cambio de clave'),
        new Activity(6, '28/12/2016', 'Acceso desde dispositivo iPhone 6c'),
      ];
    public static transactionList = [
        new Transaction(1, '12/12/2017', 'Alias', 0.3423, '../../assets/icon/wallet-user.svg'),
        new Transaction(2, '11/12/2017', 'Alias', 0.00023, '../../assets/icon/wallet-user.svg'),
        new Transaction(3, '09/12/2017', 'Alias', 0.00000232, '../../assets/icon/wallet-user.svg'),
      ];

    public static code = 'assets/imgs/QRCode.png';

    public static address = '1BPmau8ewds343Bgsds34jsS2fd342saTscqS232QrTscwqQecvbv';

    public static inputs = [
        { name: 'Usuario', icon: 'wallet-user', type: 'text'},
        { name: 'Correo Electrónico', icon: 'wallet-email', type: 'email'},
        { name: 'Contraseña', icon: 'wallet-password', type: 'password'},
        { name: 'Repetir Contraseña', icon: 'wallet-password', type: 'password'},
      ];

    public static accountOptions = [
        { title: 'Correo Electrónico'}, // component}
        { title: 'Nombre del Usuario'}, // component: HomePage },
        { title: 'Contraseña'}, // component: ListPage },
      ];

    

}
