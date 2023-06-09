import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  ModifierSelectionDialogData,
  Product,
} from '@hotel/orderapp/shared/data-access';
import { Modifier } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-product-feature-modifier-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-product-feature-modifier-list.component.html',
  styleUrls: ['./orderapp-product-feature-modifier-list.component.css'],
})
export class OrderappProductFeatureModifierListComponent {
  product: Product;
  selectedModifiersSortedByModifierId: Modifier[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModifierSelectionDialogData,

    public dialogRef: MatDialogRef<OrderappProductFeatureModifierListComponent>
  ) {
    this.product = this.data.product;
    this.selectedModifiersSortedByModifierId = [];
  }
}
