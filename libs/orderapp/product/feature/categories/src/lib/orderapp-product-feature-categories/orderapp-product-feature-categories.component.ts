import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCategories } from '@hotel/orderapp/category/data-access';
import { Category } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-product-feature-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-product-feature-categories.component.html',
  styleUrls: ['./orderapp-product-feature-categories.component.css'],
})
export class OrderappProductFeatureCategoriesComponent {
  categories$ = this.store.select(selectCategories);
  @Input() viewTypeBig = false;
  scrolledCategoryName = '';
  constructor(private store: Store) {}
  scrollToView(category: Category) {
    console.log('scrool to view of id', category.name);
    this.scrolledCategoryName = category.name;
    document.getElementById(category.name)?.scrollIntoView();
  }

  isSelectedCategory(category: Category) {
    return this.scrolledCategoryName == category.name;
  }
}
