import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCanAccessCash } from '@hotel/orderapp/auth/data-access';

@Component({
  selector: 'hotel-orderapp-possession-feature-active-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-possession-feature-active-session.component.html',
  styleUrls: ['./orderapp-possession-feature-active-session.component.css'],
})
export class OrderappPossessionFeatureActiveSessionComponent {
  selectCanAccessCash$ = this.store.select(selectCanAccessCash);
  constructor(private store: Store) {}
}
