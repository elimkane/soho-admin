import { formatDate } from '@angular/common';
export class AccountKycListModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  state: string;
  pays_iso_2: string;
  recto: string;
  verso: string;
  profil: string;
  constructor(accountKycList: AccountKycListModel) {
    {
      this.id = accountKycList.id;
      this.email = accountKycList.email;
      this.first_name = accountKycList.first_name;
      this.last_name = accountKycList.last_name;
      this.phone_number = accountKycList.phone_number;
      this.state = accountKycList.state;
      this.pays_iso_2 = accountKycList.pays_iso_2;
      this.recto = accountKycList.recto;
      this.verso = accountKycList.verso;
      this.profil = accountKycList.profil;
     // this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      /*this.mobile = accountKycList.mobile || '';
      this.address = accountKycList.address || '';
      this.country = accountKycList.country || '';*/
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
