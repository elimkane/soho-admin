import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdvanceTable } from './advance-table.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import {AccountKycListModel} from "./account-kyc-list.model";

@Injectable({
  providedIn: 'root',
})

export class AdvanceTableService extends UnsubscribeOnDestroyAdapter {
  //private readonly API_URL = 'assets/data/advanceTable.json';
  //private readonly API_URL = 'http://localhost:8080';
  private readonly API_URL = 'https://oyster-app-aqdvb.ondigitalocean.app/';

  isTblLoading = true;

  dataChange: BehaviorSubject<AccountKycListModel[]> = new BehaviorSubject<
    AccountKycListModel[]
  >([]);

  // Temporarily stores data from dialogs
  dialogData!: AccountKycListModel;
  
  constructor(private httpClient: HttpClient) {
    super();
  }



  get data(): AccountKycListModel[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }


  /** CRUD METHODS */
  getAllAdvanceTables(): void {
    this.subs.sink = this.httpClient
      .get<AccountKycListModel[]>(this.API_URL+'/auth/user-kyc-list')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        error: (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + ' ' + error.message);
        },
      });
  }


  addAdvanceTable(advanceTable: AccountKycListModel): void {
    this.dialogData = advanceTable;

    // this.httpClient.post(this.API_URL, advanceTable)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = advanceTable;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateAdvanceTable(advanceTable: AccountKycListModel): void {
    this.dialogData = advanceTable;

    // this.httpClient.put(this.API_URL + advanceTable.id, advanceTable)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = advanceTable;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteAdvanceTable(id: number): void {
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

  updateAccountStatus(accountListModel : AccountKycListModel,validated:boolean):any{
    this.httpClient.post(this.API_URL+'/auth/user-kyc-validated',{'id':accountListModel.id,'validated':validated})
      .subscribe((data)=>{
        console.log('response validated kyc',data);
        return data;
      })
  }
}

/*

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdvanceTable } from './advance-table.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Injectable({
  providedIn: 'root',
})

export class AdvanceTableService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/advanceTable.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<AdvanceTable[]> = new BehaviorSubject<
    AdvanceTable[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData!: AdvanceTable;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): AdvanceTable[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /!** CRUD METHODS *!/
  getAllAdvanceTables(): void {
    this.subs.sink = this.httpClient
      .get<AdvanceTable[]>(this.API_URL)
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
  addAdvanceTable(advanceTable: AdvanceTable): void {
    this.dialogData = advanceTable;

    // this.httpClient.post(this.API_URL, advanceTable)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = advanceTable;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateAdvanceTable(advanceTable: AdvanceTable): void {
    this.dialogData = advanceTable;

    // this.httpClient.put(this.API_URL + advanceTable.id, advanceTable)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = advanceTable;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteAdvanceTable(id: number): void {
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

