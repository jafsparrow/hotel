import { Component, OnInit } from '@angular/core';
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
import { Organisation, Tax } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-company-feature-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-company-feature-add.component.html',
  styleUrls: ['./orderapp-company-feature-add.component.css'],
})
export class OrderappCompanyFeatureAddComponent implements OnInit {
  companyBasicInforForm: FormGroup = new FormGroup({});
  taxInfoForm: FormArray = new FormArray([]) as any;
  companyForm: FormGroup = new FormGroup({});

  companyDetail$ = this.store.select(selectCompany);
  constructor(private _formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.setupCompanyBasicInfoForm();
    this.setupTaxForm();
    this.setupCompanyFroms();

    this.companyDetail$.subscribe((company) => {
      if (company as Organisation) {
        console.log('company is okay', company);
        this.companyBasicInforForm.patchValue(company);

        if (company.taxes?.length) {
          const companyTaxes: Tax[] = company.taxes ?? [];
          // this.taxInfoForm.patchValue(companyTaxes);
          companyTaxes.forEach((tax) => {
            this.taxInfoForm.push(
              this._formBuilder.group({
                name: [tax.name],
                isPercentage: [tax.isPercentage],
                value: [tax.value],
                printName: [tax.printName],
              })
            );
          });
        }
      } else {
        console.log('no company data');
      }
      console.log(this.companyForm.value);
    });
  }
  emptyTaxForm() {
    return this._formBuilder.group({
      name: ['', Validators.required],
      isPercentage: [true, Validators.required],
      printName: ['', Validators.required],
      value: [1, Validators.required],
    });
  }
  setupCompanyFroms() {
    this.companyForm = new FormGroup({
      companyBasicInforForm: this.companyBasicInforForm,
      taxInfoForm: this.taxInfoForm,
    });
  }

  setupTaxForm() {
    this.taxInfoForm = this._formBuilder.array([]);
  }

  setupCompanyBasicInfoForm() {
    this.companyBasicInforForm = this._formBuilder.group({
      name: ['', Validators.required],
      secondaryLanguageName: [''],
      logoUrl: [''],
      caption: [''],
      footer: [''],
      currencyCode: ['', Validators.required],
      address: [''],
      lat: [''],
      long: [''],
    });
  }
}
