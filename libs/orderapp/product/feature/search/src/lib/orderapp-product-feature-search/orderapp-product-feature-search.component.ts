import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filterProducts } from '@hotel/orderapp/product/data-access';

@Component({
  selector: 'hotel-orderapp-product-feature-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './orderapp-product-feature-search.component.html',
  styleUrls: ['./orderapp-product-feature-search.component.css'],
})
export class OrderappProductFeatureSearchComponent implements OnInit {
  searchTerm = new FormControl('');

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.searchTerm.valueChanges.subscribe((value) =>
      this.store.dispatch(filterProducts({ searchTerm: value! }))
    );
  }
}
