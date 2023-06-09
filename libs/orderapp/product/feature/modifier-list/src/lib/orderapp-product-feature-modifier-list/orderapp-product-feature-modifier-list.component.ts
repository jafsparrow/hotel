import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  ModifierSelectionDialogData,
  Product,
} from '@hotel/orderapp/shared/data-access';
import { Modifier, ModifierGroup } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-product-feature-modifier-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-product-feature-modifier-list.component.html',
  styleUrls: ['./orderapp-product-feature-modifier-list.component.css'],
})
export class OrderappProductFeatureModifierListComponent {
  product: Product;
  selectedModifiers: { [key: string]: Modifier }[];

  testGroup: ModifierGroup[] = [
    {
      id: 1,
      description: 'Milky',
      modifiers: [
        { id: 1, description: 'modie 1 1', price: 0.2 },
        { id: 2, description: 'modie 1 2', price: 0.3 },
      ],
    },
    {
      id: 2,
      description: 'salty',
      modifiers: [
        { id: 1, description: 'modie 2 1', price: 0.2 },
        { id: 2, description: 'modie 2 2', price: 0.3 },
      ],
    },
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModifierSelectionDialogData,

    public dialogRef: MatDialogRef<OrderappProductFeatureModifierListComponent>
  ) {
    this.product = this.data.product;
    this.selectedModifiers = [];
  }

  radioBtnChange($event: any, modifer: Modifier) {
    console.log($event.target.id, $event.target.name);
  }
}
