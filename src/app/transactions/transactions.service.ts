import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transactions } from './transactions.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { TransactionsListModel } from './transactions-list.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService extends UnsubscribeOnDestroyAdapter {
  //private readonly API_URL = 'assets/data/Transactions.json';
 // private readonly API_URL = 'http://localhost:8080';
  private readonly API_URL = 'https://oyster-app-aqdvb.ondigitalocean.app';
  // private readonly API_URL = 'https://soho-backend-odwes.ondigitalocean.app';
  isTblLoading = true;

  dataChange: BehaviorSubject<TransactionsListModel[]> = new BehaviorSubject<
    TransactionsListModel[]
  >([]);

  // Temporarily stores data from dialogs
  dialogData!: TransactionsListModel;

  constructor(private httpClient: HttpClient) {
    super();
  }

  get data(): TransactionsListModel[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllTransactionss(): void {
    this.subs.sink = this.httpClient
      .get<TransactionsListModel[]>(this.API_URL + '/transaction/getAllTransactions')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isTblLoading = false
          this.dataChange.next(data)
        },
        error: (error: HttpErrorResponse) => {
          this.isTblLoading = false
          console.log(error.name + ' ' + error.message)
        },
      });
  }

  addTransactions(Transactions: TransactionsListModel): void {
    this.dialogData = Transactions;

    // this.httpClient.post(this.API_URL, Transactions)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = Transactions;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }

  updateTransactions(Transactions: TransactionsListModel): void {
    this.dialogData = Transactions;

    // this.httpClient.put(this.API_URL + Transactions.id, Transactions)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = Transactions;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }

  deleteTransactions(id: number): void {
    console.log(id);

    // this.httpClient.delete(this.API_URL + id)
    //     .subscribe({
    //       next: (data) => {
    //         console.log(id);
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }

  updateAccountStatus(
    accountListModel: TransactionsListModel,
    validated: boolean
  ): any {
    this.httpClient
      .post(this.API_URL + '/auth/user-kyc-validated', {
        id: accountListModel.id,
        validated: validated,
      })
      .subscribe((data) => {
        console.log('response validated kyc', data);
        return data;
      });
  }

}

/*

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transactions } from './advance-table.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Injectable({
  providedIn: 'root',
})

export class TransactionsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/Transactions.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Transactions[]> = new BehaviorSubject<
    Transactions[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData!: Transactions;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Transactions[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /!** CRUD METHODS *!/
  getAllTransactionss(): void {
    this.subs.sink = this.httpClient
      .get<Transactions[]>(this.API_URL)
      .subscribe({
        next: (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        error: (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + ' ' + error.message);
        },
      });
  }
  addTransactions(Transactions: Transactions): void {
    this.dialogData = Transactions;

    // this.httpClient.post(this.API_URL, Transactions)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = Transactions;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateTransactions(Transactions: Transactions): void {
    this.dialogData = Transactions;

    // this.httpClient.put(this.API_URL + Transactions.id, Transactions)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = Transactions;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteTransactions(id: number): void {
    console.log(id);

    // this.httpClient.delete(this.API_URL + id)
    //     .subscribe({
    //       next: (data) => {
    //         console.log(id);
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
}
*/
