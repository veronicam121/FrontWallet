import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { LoaderService } from './loader.service';
import { IAddress } from '../models/IAddress';
import { User } from '../models/user';
import { Address } from '../models/address';
import { IBlockchain } from '../models/IBlockchain';
import { Activity } from '../models/activity';
import { Transaction } from '../models/transaction';
import { IBlock } from '../models/IBlock';

// REST Service for gettind data from APIs and the Database
// Currently using the BlockCypher Data API

// API Base URL
const URL = 'https://api.blockcypher.com/v1/btc/main';

@Injectable()

export class RestService {

  private headers;
  private options;

  constructor(private http: Http, private loadService: LoaderService) {

  }

  // Retrieves the latest BlockChain data
  public getBlockchain(): Observable<IBlockchain> {
      this.loadService.showLoader('Recuperando Información');
      return this.http.get(URL)
        .map((res: Response) => {
          return res.json() as IBlockchain;
        })
        .catch(this.handleError)
        .finally(() => {
          this.loadService.dismissLoader();
        },
      );
  }

  // Retrieves the latest Block
  public getBlock(hash: string): Observable<IBlock> {
    this.loadService.showLoader('Espere');
    return this.http.get(URL + '/blocks/' + hash )
      .map((res: Response) => {
        return res.json() as IBlock;
      })
      .catch(this.handleError)
      .finally(() => {
        this.loadService.dismissLoader();
      });
  }

  // Gets a Single Address data
  public getSingleAddress(bitcoin_address): Observable<IAddress> {
    return this.http.get(URL + 'rawaddr/' + bitcoin_address)
      .map((res: Response) => {
        return res.json() as IAddress;
      })
      .catch(this.handleError);
  }

  // Error Handling for HTTP Errors
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
