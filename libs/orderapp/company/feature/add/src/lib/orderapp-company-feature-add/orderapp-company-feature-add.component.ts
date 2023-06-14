import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectCompany } from '@hotel/orderapp/company/data-access';
import { CompanyEditDialogData, Organisation, Tax } from '@hotel/common/types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-company-feature-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-company-feature-add.component.html',
  styleUrls: ['./orderapp-company-feature-add.component.css'],
})
export class OrderappCompanyFeatureAddComponent implements OnInit {
  companyBasicInforForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,

    @Inject(MAT_DIALOG_DATA) public data: CompanyEditDialogData,

    public dialogRef: MatDialogRef<OrderappCompanyFeatureAddComponent>
  ) {
    this.companyBasicInforForm = this._formBuilder.group({
      name: ['', Validators.required],
      secondaryLanguageName: [''],
      logoUrl: [''],
      lastOrderNumber: [''],
      caption: [''],
      footer: [''],
      currencyCode: ['', Validators.required],
      address: [''],
      lat: [''],
      long: [''],
      decimalZeros: [''],
    });
  }

  ngOnInit(): void {
    this.companyBasicInforForm.patchValue(this.data.company);
  }

  emptyTaxForm() {
    return this._formBuilder.group({
      name: ['', Validators.required],
      isPercentage: [true, Validators.required],
      printName: ['', Validators.required],
      value: [1, Validators.required],
    });
  }

  submitForm() {
    console.log(this.companyBasicInforForm.value);
  }
}
