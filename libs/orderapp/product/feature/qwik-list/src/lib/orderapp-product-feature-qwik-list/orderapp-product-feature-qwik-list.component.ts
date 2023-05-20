import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductQwikviewComponent } from '@hotel/orderapp/ui';

@Component({
  selector: 'hotel-orderapp-product-feature-qwik-list',
  standalone: true,
  imports: [CommonModule, ProductQwikviewComponent],
  templateUrl: './orderapp-product-feature-qwik-list.component.html',
  styleUrls: ['./orderapp-product-feature-qwik-list.component.css'],
})
export class OrderappProductFeatureQwikListComponent {}
