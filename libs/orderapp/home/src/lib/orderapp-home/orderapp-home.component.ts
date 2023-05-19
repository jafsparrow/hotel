import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappProductFeatureProductListComponent } from '@hotel/orderapp/product/feature/product-list';
import { OrderappProductFeatureQwikListComponent } from '@hotel/orderapp/product/feature/qwik-list';
import { OrderappProductFeatureCategoriesComponent } from '@hotel/orderapp/product/feature/categories';

@Component({
  selector: 'hotel-orderapp-home',
  standalone: true,
  imports: [
    CommonModule,
    OrderappProductFeatureProductListComponent,
    OrderappProductFeatureQwikListComponent,
    OrderappProductFeatureCategoriesComponent,
  ],
  templateUrl: './orderapp-home.component.html',
  styleUrls: ['./orderapp-home.component.css'],
})
export class OrderappHomeComponent {}
