import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startSession } from '@hotel/orderapp/possession/data-access';

@Component({
  selector: 'hotel-orderapp-possession-feature-session-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-possession-feature-session-add.component.html',
  styleUrls: ['./orderapp-possession-feature-session-add.component.css'],
})
export class OrderappPossessionFeatureSessionAddComponent {
  cash: FormControl = new FormControl('');
  constructor(private store: Store) {}
  submit() {
    console.log(this.cash.value);
    this.store.dispatch(
      startSession({ cash: this.cash.value ? this.cash.value : 0 })
    );
  }
}
