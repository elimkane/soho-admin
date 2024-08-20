import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { AdvanceTableService } from '../../advance-table.service';
import { UntypedFormControl, Validators, UntypedFormGroup, UntypedFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceTable } from '../../advance-table.model';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { formatDate } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {AccountKycListModel} from "../../account-kyc-list.model";

export interface DialogData {
  id: number;
  action: string;
  advanceTable: AccountKycListModel;
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogClose,
    MatNativeDateModule,
    MatMomentDateModule
  ],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  advanceTableForm: UntypedFormGroup;
  advanceTable: AccountKycListModel;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public advanceTableService: AdvanceTableService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.advanceTable.first_name + ' ' + data.advanceTable.last_name;
      this.advanceTable = data.advanceTable;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as AccountKycListModel;
      this.advanceTable = new AccountKycListModel(blankObject);
    }
    this.advanceTableForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      //img: [this.advanceTable.img],
      first_name: [this.advanceTable.first_name, [Validators.required]],
      last_name: [this.advanceTable.last_name, [Validators.required]],
      email: [
        this.advanceTable.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      phone_number: [this.advanceTable.phone_number],
      /*bDate: [
        formatDate(this.advanceTable.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],*/
      //state: [this.advanceTable.address],
      pays_iso_2: [this.advanceTable.pays_iso_2, [Validators.required]],
      //resto: [this.advanceTable.recto, [Validators.required]],
      //verso: [this.advanceTable.verso],
      //profil: [this.advanceTable.profil],
    });
  }
  submit() {
    // emppty stuff
  }
  public async onNoClick() {
    await this.advanceTableService.updateAccountStatus(this.advanceTable,false);
    this.dialogRef.close();
  }

  /**
   * Confirmer validation compte
   */
  public async confirmAdd() {
    /*this.advanceTableService.addAdvanceTable(
      this.advanceTableForm.getRawValue()
    );*/
    await this.advanceTableService.updateAccountStatus(this.advanceTable,true);
    this.dialogRef.close();
  }
}
