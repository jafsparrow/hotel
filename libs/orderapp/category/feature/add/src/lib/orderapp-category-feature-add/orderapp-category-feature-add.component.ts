import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxColorsModule } from 'ngx-colors';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Category, CategoryEditDialogData } from '@hotel/common/types';
import { Store } from '@ngrx/store';
import { selectKitchens } from '@hotel/orderapp/kitchen/data-access';
import {
  addCategory,
  editCategory,
  selectcategoryAddProgressIndicator,
} from '@hotel/orderapp/category/data-access';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hotel-orderapp-category-feature-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxColorsModule,
  ],
  templateUrl: './orderapp-category-feature-add.component.html',
  styleUrls: ['./orderapp-category-feature-add.component.css'],
})
export class OrderappCategoryFeatureAddComponent implements OnInit {
  selectKitchens$ = this.store.select(selectKitchens);
  selectAddCategoryIndicator$ = this.store.select(
    selectcategoryAddProgressIndicator
  );
  categoryAddForm: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    kitchenId: new FormControl('', { validators: [Validators.required] }),
    categoryCode: new FormControl('', { validators: [Validators.required] }),
    color: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: CategoryEditDialogData,

    public dialogRef: MatDialogRef<OrderappCategoryFeatureAddComponent>
  ) {}

  ngOnInit(): void {
    const categoryToEdit = this.data?.category;
    console.log('kitchen t edit', categoryToEdit);
    if (categoryToEdit) {
      this.categoryAddForm.patchValue(categoryToEdit);
    }
  }

  addCategory() {
    // console.log(this.categoryAddForm.value);
    if (!this.categoryAddForm.valid) return;

    if (this.data && this.data.category) {
      this.store.dispatch(
        editCategory({
          categoryId: this.data.category.id!,
          category: this.categoryAddForm.value,
        })
      );
    } else {
      const category: Category = {
        ...this.categoryAddForm.value,
      };

      this.store.dispatch(addCategory({ category }));
    }
  }
}
