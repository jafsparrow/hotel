import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectSignedUser } from '@hotel/orderapp/auth/data-access';

@Component({
  selector: 'hotel-orderapp-auth-feature-signed-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-auth-feature-signed-user-detail.component.html',
  styleUrls: ['./orderapp-auth-feature-signed-user-detail.component.css'],
})
export class OrderappAuthFeatureSignedUserDetailComponent {
  selectSignedInUser$ = this.store.select(selectSignedUser);
  constructor(private store: Store) {}
}
