import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappCategoryFeatureListComponent } from '@hotel/orderapp/category/feature/list';
import { OrderappCategoryFeatureAddComponent } from '@hotel/orderapp/category/feature/add';
import { Store } from '@ngrx/store';
import { loadCategories } from '@hotel/orderapp/category/data-access';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-category-manage',
  standalone: true,
  imports: [
    CommonModule,
    OrderappCategoryFeatureListComponent,
    OrderappCategoryFeatureAddComponent,
    MatDialogModule,
  ],
  templateUrl: './orderapp-backoffice-feature-category-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-category-manage.component.css'],
})
export class OrderappBackofficeFeatureCategoryManageComponent {
  constructor(private store: Store) {
    this.store.dispatch(loadCategories());
  }
}
