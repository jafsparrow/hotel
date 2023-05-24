import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { Product } from '@prisma/client';

@Component({
  selector: 'hotel-orderapp-order-feature-product-count',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './orderapp-order-feature-product-count.component.html',
  styleUrls: ['./orderapp-order-feature-product-count.component.css'],
})
export class OrderappOrderFeatureProductCountComponent {
  selectedProduct: Product | null = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {
    this.selectedProduct = this.data;
  }
}
