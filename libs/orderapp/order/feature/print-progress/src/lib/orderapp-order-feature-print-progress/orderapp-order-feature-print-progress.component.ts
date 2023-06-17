import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  selectMakeBillMessages,
  selectMakeBillSpinner,
} from '@hotel/orderapp/order/data-access/order';

@Component({
  selector: 'hotel-orderapp-order-feature-print-progress',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './orderapp-order-feature-print-progress.component.html',
  styleUrls: ['./orderapp-order-feature-print-progress.component.css'],
})
export class OrderappOrderFeaturePrintProgressComponent {
  selectMakeBillSpinner$ = this.store.select(selectMakeBillSpinner);
  selectMakeBillMessages$ = this.store.select(selectMakeBillMessages);
  constructor(private store: Store, private dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
