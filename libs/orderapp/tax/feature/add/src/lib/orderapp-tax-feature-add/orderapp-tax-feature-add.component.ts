import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Tax, TaxEditDialogData } from '@hotel/common/types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hotel-orderapp-tax-feature-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-tax-feature-add.component.html',
  styleUrls: ['./orderapp-tax-feature-add.component.css'],
})
export class OrderappTaxFeatureAddComponent implements OnInit {
  taxAddForm: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    printName: new FormControl('', { validators: [Validators.required] }),
    value: new FormControl('', { validators: [Validators.required] }),
    isPercentage: new FormControl(false),
  });
  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: TaxEditDialogData,

    public dialogRef: MatDialogRef<OrderappTaxFeatureAddComponent>
  ) {}

  ngOnInit(): void {
    const taxToEdit = this.data?.tax;
    console.log('kitchen t edit', taxToEdit);
    if (taxToEdit) {
      this.taxAddForm.patchValue(taxToEdit);
    }
  }
  addKitchen() {
    if (!this.taxAddForm.valid) return;

    if (this.data && this.data.tax) {
      this.store.dispatch(
        updateKitchen({
          kitchendId: this.data.kitchen.id!,
          kitchen: this.taxAddForm.value,
        })
      );
    } else {
      const tax: Tax = {
        ...this.taxAddForm.value,
      };

      this.store.dispatch(addKitchen({ kitchen }));
    }
  }
}
