import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderappCoreComponent } from '@hotel/orderapp/core';
import { Store } from '@ngrx/store';
import { loadCompany } from '@hotel/orderapp/company/data-access';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, OrderappCoreComponent],
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store) {
    console.log('app componsed called.');
    this.store.dispatch(loadCompany({ id: 1 }));
  }
  title = 'orderapp';
}
