import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Route,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderappCoreComponent } from '@hotel/orderapp/core';
import { Store } from '@ngrx/store';
import { loadCompany, loadPrinters } from '@hotel/orderapp/company/data-access';
import { loadSessions } from '@hotel/orderapp/possession/data-access';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, OrderappCoreComponent],
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store, private activateRoute: ActivatedRoute) {
    console.log('app componsed called.', window.location.origin);
    console.log('actiated router', activateRoute.root);
    this.store.dispatch(loadCompany({ id: 1 }));
    this.store.dispatch(loadPrinters());
    this.store.dispatch(loadSessions());
  }

  title = 'orderapp';
}
