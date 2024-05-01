import { Injectable } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './users.model';


@Injectable({
    providedIn: 'root',
})

export class UserService extends UnsubscribeOnDestroyAdapter {

 // private readonly API_URL = 'http://localhost:8080';
  private readonly API_URL = 'https://next-app-version-pw4zv.ondigitalocean.app';

  isTblLoading = true;

  dialogData!: UserModel;

  dataChange: BehaviorSubject<UserModel[]> = new BehaviorSubject<
    UserModel[]
  >([]);
  
  constructor(private httpClient: HttpClient) {
    super();
  }

  // Functions helper
  get data(): UserModel[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }


  //GET 
  getAllAdvanceTables(): void {
    this.subs.sink = this.httpClient
      .get<UserModel[]>(this.API_URL+'/auth/allUsers')
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
