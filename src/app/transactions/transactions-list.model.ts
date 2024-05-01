import { formatDate } from '@angular/common';
export class TransactionsListModel {
  id: number;
  txnDate: string;
  amount: number;
  totalAmount: number;
  walletSender: string;
  phoneNumberSender: string;
  walletReciever: string;
  phoneNumberReciever: string;
  fullName: string;
  sohoTxnStatus: string;
  constructor(transactions: TransactionsListModel) {
    {
      this.id = transactions.id;
      this.txnDate = transactions.txnDate;
      this.amount = transactions.amount;
      this.totalAmount = transactions.totalAmount;
      this.walletSender = transactions.walletSender;
      this.phoneNumberSender = transactions.phoneNumberSender;
      this.walletReciever = transactions.walletReciever;
      this.phoneNumberReciever = transactions.phoneNumberReciever;
      this.fullName = transactions.fullName;
      this.sohoTxnStatus = transactions.sohoTxnStatus;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
