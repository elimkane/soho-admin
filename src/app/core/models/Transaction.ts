export class Transaction {
    id!: number;
    userId!: number;
    txnDate!: string;
    amount!: number;
    totalAmount!: number;
    walletSender!: string;
    phoneNumberSender!: string;
    walletReciever!: string;
    phoneNumberReciever!: string;
    tokenInvoice!: string;
    disburseToken!: string;
    fullName!: string;
    ussdCode!: string;
    sohoTxnStatus!: string;
    cashoutData!: string;
    cashInData!: string;
    createdAt!: string;
    updatedAt!: string;
  }