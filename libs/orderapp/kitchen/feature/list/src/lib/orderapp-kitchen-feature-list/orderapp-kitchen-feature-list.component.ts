import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectKitchens } from '@hotel/orderapp/kitchen/data-access';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderappKitchenFeatureAddComponent } from '@hotel/orderapp/kitchen/feature/add';

@Component({
  selector: 'hotel-orderapp-kitchen-feature-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, OrderappKitchenFeatureAddComponent],
  templateUrl: './orderapp-kitchen-feature-list.component.html',
  styleUrls: ['./orderapp-kitchen-feature-list.component.css'],
})
export class OrderappKitchenFeatureListComponent {
  selectKitchens$ = this.store.select(selectKitchens);
  constructor(private store: Store, private dialog: MatDialog) {}

  addKitchen() {
    this.dialog.open(OrderappKitchenFeatureAddComponent, {});
  }
}
