import { formatDate } from '@angular/common';
export class UserModel {
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
  constructor(user: UserModel) {
    {
      this.id = user.id;
      this.email = user.email;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.phone_number = user.phone_number;
      this.state = user.state;
      this.pays_iso_2 = user.pays_iso_2;
      this.recto = user.recto;
      this.verso = user.verso;
      this.profil = user.profil;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
