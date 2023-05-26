import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappProductDataAccessComponent } from '@hotel/orderapp/product/data-access';

@Component({
  selector: 'hotel-product-qwikview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-qwikview.component.html',
  styleUrls: ['./product-qwikview.component.css'],
})
export class ProductQwikviewComponent {}
