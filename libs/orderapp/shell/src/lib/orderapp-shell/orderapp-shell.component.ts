import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectAccessBackOffice,
  selectCanAccessCash,
} from '@hotel/orderapp/auth/data-access';

import { selectActiveSession } from '@hotel/orderapp/possession/data-access';
import { loadCompany } from '@hotel/orderapp/company/data-access';
import { OrderappPossessionFeatureActiveSessionComponent } from '@hotel/orderapp/possession/feature/active-session';
import { OrderappPossessionFeatureSessionListComponent } from '@hotel/orderapp/possession/feature/session-list';
import { OrderappPossessionFeatureSessionAddComponent } from '@hotel/orderapp/possession/feature/session-add';

@Component({
  selector: 'hotel-orderapp-shell',
  standalone: true,
  imports: [
    CommonModule,
    MatSnackBarModule,
    RouterModule,
    OrderappPossessionFeatureActiveSessionComponent,
    OrderappPossessionFeatureSessionListComponent,
    OrderappPossessionFeatureSessionAddComponent,
  ],
  templateUrl: './orderapp-shell.component.html',
  styleUrls: ['./orderapp-shell.component.css'],
})
export class OrderappShellComponent {
  selectCanAccessBackOffice$ = this.store.select(selectAccessBackOffice);
  selectCanAccessCash$ = this.store.select(selectCanAccessCash);
  selectActiveSession$ = this.store.select(selectActiveSession);
  constructor(private store: Store) {
    console.log('sheell component constructor called.');
  }
}
