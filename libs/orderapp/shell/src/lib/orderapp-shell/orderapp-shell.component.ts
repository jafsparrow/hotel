import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectAccessBackOffice,
  selectCanAccessCash,
} from '@hotel/orderapp/auth/data-access';
import { loadCompany } from '@hotel/orderapp/company/data-access';

@Component({
  selector: 'hotel-orderapp-shell',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, RouterModule],
  templateUrl: './orderapp-shell.component.html',
  styleUrls: ['./orderapp-shell.component.css'],
})
export class OrderappShellComponent {
  selectCanAccessBackOffice$ = this.store.select(selectAccessBackOffice);
  constructor(private store: Store) {
    console.log('sheell component constructor called.');
  }
}
