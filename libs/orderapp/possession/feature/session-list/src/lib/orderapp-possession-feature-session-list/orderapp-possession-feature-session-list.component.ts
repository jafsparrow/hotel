import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappPossessionFeatureActiveSessionComponent } from '@hotel/orderapp/possession/feature/active-session';
import { Store } from '@ngrx/store';

import {
  printSessionReport,
  selectPosSessions,
  selectSessionReportPrintingIndicator,
} from '@hotel/orderapp/possession/data-access';
import { TimesagoPipe } from '@hotel/orderapp/core';
@Component({
  selector: 'hotel-orderapp-possession-feature-session-list',
  standalone: true,
  imports: [
    CommonModule,
    OrderappPossessionFeatureActiveSessionComponent,
    TimesagoPipe,
  ],
  templateUrl: './orderapp-possession-feature-session-list.component.html',
  styleUrls: ['./orderapp-possession-feature-session-list.component.css'],
})
export class OrderappPossessionFeatureSessionListComponent {
  selectPosSessions$ = this.store.select(selectPosSessions);
  selectPrintSessionReportIndicator$ = this.store.select(
    selectSessionReportPrintingIndicator
  );
  constructor(private store: Store) {}

  printSessionReport(sessionId: number) {
    this.store.dispatch(printSessionReport({ sessionId }));
  }
}
