import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappPossessionFeatureActiveSessionComponent } from '@hotel/orderapp/possession/feature/active-session';

@Component({
  selector: 'hotel-orderapp-possession-feature-session-list',
  standalone: true,
  imports: [CommonModule, OrderappPossessionFeatureActiveSessionComponent],
  templateUrl: './orderapp-possession-feature-session-list.component.html',
  styleUrls: ['./orderapp-possession-feature-session-list.component.css'],
})
export class OrderappPossessionFeatureSessionListComponent {}
