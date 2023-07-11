import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductEditDialogData } from '@hotel/common/types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { selectCategories } from '@hotel/orderapp/category/data-access';
import {
  addProduct,
  selectAddUpdateProductProgressFlag,
  updateProduct,
} from '@hotel/orderapp/product/data-access';
import { NgxColorsModule } from 'ngx-colors';

@Component({
  selector: 'hotel-orderapp-product-feature-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxColorsModule],
  templateUrl: './orderapp-product-feature-add.component.html',
  styleUrls: ['./orderapp-product-feature-add.component.css'],
})
export class OrderappProductFeatureAddComponent implements OnInit {
  selectCategories$ = this.store.select(selectCategories);
  selectAddProductIndicator$ = this.store.select(
    selectAddUpdateProductProgressFlag
  );

  productAddForm: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    code: new FormControl('', { validators: [Validators.required] }),
    secondaryLanguageName: new FormControl('', {
      validators: [Validators.required],
    }),
    description: new FormControl('None'),
    price: new FormControl('', { validators: [Validators.required] }),
    cost: new FormControl('', { validators: [Validators.required] }),
    categoryId: new FormControl('', { validators: [Validators.required] }),
    collectionId: new FormControl('', { validators: [Validators.required] }),
    qwickViewOrder: new FormControl('', { validators: [Validators.required] }),
    printName: new FormControl('', { validators: [Validators.required] }),
    color: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: ProductEditDialogData,

    public dialogRef: MatDialogRef<OrderappProductFeatureAddComponent>
  ) {}

  ngOnInit(): void {
    const productToEdit = this.data?.product;
    console.log('product t edit', productToEdit);
    if (productToEdit) {
      this.productAddForm.patchValue(productToEdit);
    }
  }
  addProduct() {
    if (!this.productAddForm.valid) return;

    if (this.data && this.data.product) {
      this.store.dispatch(
        updateProduct({
          productId: this.data.product.id!,
          product: this.productAddForm.value,
        })
      );
    } else {
      const product: Product = {
        ...this.productAddForm.value,
      };

      this.store.dispatch(addProduct({ product }));
    }
  }
}
