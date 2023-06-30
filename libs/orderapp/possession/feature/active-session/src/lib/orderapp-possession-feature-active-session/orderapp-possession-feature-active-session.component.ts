import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCanAccessCash } from '@hotel/orderapp/auth/data-access';
import {
  closeSession,
  selectActiveSession,
  selectEndSessinIndicator,
} from '@hotel/orderapp/possession/data-access';

@Component({
  selector: 'hotel-orderapp-possession-feature-active-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-possession-feature-active-session.component.html',
  styleUrls: ['./orderapp-possession-feature-active-session.component.css'],
})
export class OrderappPossessionFeatureActiveSessionComponent {
  selectCanAccessCash$ = this.store.select(selectCanAccessCash);
  selectActiveSession$ = this.store.select(selectActiveSession);
  selectEndSessinIndicator$ = this.store.select(selectEndSessinIndicator);
  constructor(private store: Store) {}

  endSession(id: number) {
    this.store.dispatch(closeSession({ sessionId: id }));
  }
}
