import { formatDate } from '@angular/common';
export class Transactions {
  id: number;
    userId: number;
    txnDate: string;
    amount: number;
    totalAmount: number;
    walletSender: string;
    phoneNumberSender: string;
    walletReceiver: string;
    phoneNumberReceiver: string;
    tokenInvoice: string;
    disburseToken: string;
    fullName: string;
    ussdCode: string;
    sohoTxnStatus: string;
    cashoutData: {
        hash: string;
        mode: string;
        status: string;
        actions: {
            cancel_url: string;
            return_url: string;
            callback_url: string;
        };
        invoice: {
            items: {
                item_0: {
                    name: string;
                    quantity: string;
                    unit_price: string;
                    description: string;
                    total_price: string;
                };
            };
            token: string;
            pal_is_on: string;
            description: string;
            expire_date: string;
            total_amount: string;
            total_amount_without_fees: string;
        };
        customer: {
            name: string;
            email: string;
            phone: string;
            payment_method: string;
        };
        fail_reason: string;
        receipt_url: string;
        response_code: string;
        response_text: string;
        provider_reference: string;
        receipt_identifier: string;
    };
    cashInData: {
        token: string;
        amount: string;
        status: string;
        updated_at: string;
        withdraw_mode: string;
        disburse_tx_id: string;
        transaction_id: string;
    };
    createdAt: string;
    updatedAt: string;
  // id: number;
  // userId: number;
  // txnDate: string;
  // amount: number;
  // totalAmount: number;
  // walletSender: string;
  // phoneNumberSender: string;
  // walletReciever: string;
  // phoneNumberReciever: string;
  // tokenInvoice: string;
  // disburseToken: string;
  // fullName: string;
  // ussdCode: string;
  // sohoTxnStatus: string;
  // cashoutData: string;
  // cashInData: string;
  // createdAt: string;
  // updatedAt: string;

  constructor(data: Transactions) {
    this.id = data.id;
        this.userId = data.userId;
        this.txnDate = data.txnDate;
        this.amount = data.amount;
        this.totalAmount = data.totalAmount;
        this.walletSender = data.walletSender;
        this.phoneNumberSender = data.phoneNumberSender;
        this.walletReceiver = data.walletReceiver; // Corrected spelling mistake here
        this.phoneNumberReceiver = data.phoneNumberReceiver; // Corrected spelling mistake here
        this.tokenInvoice = data.tokenInvoice;
        this.disburseToken = data.disburseToken;
        this.fullName = data.fullName;
        this.ussdCode = data.ussdCode;
        this.sohoTxnStatus = data.sohoTxnStatus;
        this.cashoutData = {
            hash: data.cashoutData.hash,
            mode: data.cashoutData.mode,
            status: data.cashoutData.status,
            actions: {
                cancel_url: data.cashoutData.actions.cancel_url,
                return_url: data.cashoutData.actions.return_url,
                callback_url: data.cashoutData.actions.callback_url,
            },
            invoice: {
                items: {
                    item_0: {
                        name: data.cashoutData.invoice.items.item_0.name,
                        quantity: data.cashoutData.invoice.items.item_0.quantity,
                        unit_price: data.cashoutData.invoice.items.item_0.unit_price,
                        description: data.cashoutData.invoice.items.item_0.description,
                        total_price: data.cashoutData.invoice.items.item_0.total_price,
                    },
                },
                token: data.cashoutData.invoice.token,
                pal_is_on: data.cashoutData.invoice.pal_is_on,
                description: data.cashoutData.invoice.description,
                expire_date: data.cashoutData.invoice.expire_date,
                total_amount: data.cashoutData.invoice.total_amount,
                total_amount_without_fees: data.cashoutData.invoice.total_amount_without_fees,
            },
            customer: {
                name: data.cashoutData.customer.name,
                email: data.cashoutData.customer.email,
                phone: data.cashoutData.customer.phone,
                payment_method: data.cashoutData.customer.payment_method,
            },
            fail_reason: data.cashoutData.fail_reason,
            receipt_url: data.cashoutData.receipt_url,
            response_code: data.cashoutData.response_code,
            response_text: data.cashoutData.response_text,
            provider_reference: data.cashoutData.provider_reference,
            receipt_identifier: data.cashoutData.receipt_identifier,
        };
        this.cashInData = {
            token: data.cashInData.token,
            amount: data.cashInData.amount,
            status: data.cashInData.status,
            updated_at: data.cashInData.updated_at,
            withdraw_mode: data.cashInData.withdraw_mode,
            disburse_tx_id: data.cashInData.disburse_tx_id,
            transaction_id: data.cashInData.transaction_id,
        };
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    {
      // this.id = transactions.id || this.getRandomID();
      // this.userId = transactions.userId;
      // this.txnDate = transactions.txnDate;
      // this.amount = transactions.amount;
      // this.totalAmount = transactions.totalAmount;
      // this.walletSender = transactions.walletSender;
      // this.phoneNumberSender = transactions.phoneNumberSender;
      // this.walletReciever = transactions.walletReciever;
      // this.phoneNumberReciever = transactions.phoneNumberReciever;
      // this.tokenInvoice = transactions.tokenInvoice;
      // this.disburseToken = transactions.disburseToken;
      // this.fullName = transactions.fullName;
      // this.ussdCode = transactions.ussdCode;
      // this.sohoTxnStatus = transactions.sohoTxnStatus;
      // this.cashoutData = transactions.cashoutData;
      // this.cashInData = transactions.cashInData;
      // this.createdAt = transactions.createdAt;
      // this.updatedAt = transactions.updatedAt;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
