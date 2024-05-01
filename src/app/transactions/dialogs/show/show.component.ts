import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { TransactionsService } from '../../transactions.service';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  id: number;
  userId: number;
  txnDate: string;
  amount: number;
  totalAmount: number;
  walletSender: string;
  phoneNumberSender: string;
  walletReciever: string;
  phoneNumberReciever: string;
  tokenInvoice: string;
  disburseToken: string;
  fullName: string;
  ussdCode: string;
  sohoTxnStatus: string;
  cashoutData: string;
  cashInData: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss'],
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ],
})
export class ShowDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public TransactionsService: TransactionsService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
