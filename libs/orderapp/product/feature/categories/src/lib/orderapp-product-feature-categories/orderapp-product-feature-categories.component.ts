import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCategories } from '@hotel/orderapp/category/data-access';

@Component({
  selector: 'hotel-orderapp-product-feature-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-product-feature-categories.component.html',
  styleUrls: ['./orderapp-product-feature-categories.component.css'],
})
export class OrderappProductFeatureCategoriesComponent {
  categories$ = this.store.select(selectCategories);

  constructor(private store: Store) {}
}
