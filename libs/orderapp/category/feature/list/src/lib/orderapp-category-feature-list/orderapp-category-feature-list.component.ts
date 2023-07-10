import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCategories } from '@hotel/orderapp/category/data-access';
import { Category } from '@hotel/common/types';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderappCategoryFeatureAddComponent } from '@hotel/orderapp/category/feature/add';

@Component({
  selector: 'hotel-orderapp-category-feature-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, OrderappCategoryFeatureAddComponent],
  templateUrl: './orderapp-category-feature-list.component.html',
  styleUrls: ['./orderapp-category-feature-list.component.css'],
})
export class OrderappCategoryFeatureListComponent {
  selectCategories$ = this.store.select(selectCategories);
  constructor(private store: Store, private dialog: MatDialog) {}
  addCategroy() {
    this.dialog.open(OrderappCategoryFeatureAddComponent, {});
  }
  editCategory(category: Category) {
    this.dialog.open(OrderappCategoryFeatureAddComponent, {
      data: { category },
    });
  }
}
