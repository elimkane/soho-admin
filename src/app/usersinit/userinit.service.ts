import { Injectable } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserinitModel } from './userinit.model';


@Injectable({
    providedIn: 'root',
})

export class UserinitService extends UnsubscribeOnDestroyAdapter {

 // private readonly API_URL = 'http://localhost:8080';
  private readonly API_URL = 'https://goldfish-app-22ubm.ondigitalocean.app';

  isTblLoading = true;

  dialogData!: UserinitModel;

  dataChange: BehaviorSubject<UserinitModel[]> = new BehaviorSubject<
    UserinitModel[]
  >([]);
  
  constructor(private httpClient: HttpClient) {
    super();
  }

  // Functions helper
  get data(): UserinitModel[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }


  //GET 
  getAllAdvanceTables(): void {
    this.subs.sink = this.httpClient
      .get<UserinitModel[]>(this.API_URL+'/auth/creation')
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
}
