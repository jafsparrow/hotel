import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectPrinters } from '@hotel/orderapp/company/data-access';
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
} from '@hotel/orderapp/kitchen/data-access';
import { Kitchen } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-kitchen-feature-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-kitchen-feature-add.component.html',
  styleUrls: ['./orderapp-kitchen-feature-add.component.css'],
})
export class OrderappKitchenFeatureAddComponent {
  selectPrinters$ = this.store.select(selectPrinters);
  selectAddKitchenIndicator$ = this.store.select(
    selectKitchenAddLoadingIndicator
  );
  kitchenAddForm: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    printer: new FormControl('', { validators: [Validators.required] }),
    shouldPrintKot: new FormControl(false),
  });
  constructor(private store: Store) {}

  addKitchen() {
    console.log(this.kitchenAddForm.value);
    const kitchen: Kitchen = {
      ...this.kitchenAddForm.value,
    };
    if (this.kitchenAddForm.valid) {
      this.store.dispatch(addKitchen({ kitchen }));
    }
  }
}
