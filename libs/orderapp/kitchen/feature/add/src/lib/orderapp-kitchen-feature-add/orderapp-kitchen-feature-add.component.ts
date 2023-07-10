import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectPrinters } from '@hotel/orderapp/company/data-access';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Validator } from 'class-validator';
import {
  addKitchen,
  selectKitchenAddLoadingIndicator,
  selectKitchneLoadingIndicator,
  updateKitchen,
} from '@hotel/orderapp/kitchen/data-access';
import { Kitchen, KitchenEditDialogData } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-kitchen-feature-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-kitchen-feature-add.component.html',
  styleUrls: ['./orderapp-kitchen-feature-add.component.css'],
})
export class OrderappKitchenFeatureAddComponent implements OnInit {
  selectPrinters$ = this.store.select(selectPrinters);
  selectAddKitchenIndicator$ = this.store.select(
    selectKitchenAddLoadingIndicator
  );
  kitchenAddForm: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    printer: new FormControl('', { validators: [Validators.required] }),
    shouldPrintKot: new FormControl(false),
  });
  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: KitchenEditDialogData,

    public dialogRef: MatDialogRef<OrderappKitchenFeatureAddComponent>
  ) {}

  ngOnInit(): void {
    const kitchenToEdit = this.data?.kitchen;
    console.log('kitchen t edit', kitchenToEdit);
    if (kitchenToEdit) {
      this.kitchenAddForm.patchValue(kitchenToEdit);
    }
  }
  addKitchen() {
    if (!this.kitchenAddForm.valid) return;

    console.log(this.data.kitchen);
    if (this.data.kitchen) {
      this.store.dispatch(
        updateKitchen({
          kitchendId: this.data.kitchen.id!,
          kitchen: this.kitchenAddForm.value,
        })
      );
    } else {
      const kitchen: Kitchen = {
        ...this.kitchenAddForm.value,
      };

      this.store.dispatch(addKitchen({ kitchen }));
    }
  }
}
