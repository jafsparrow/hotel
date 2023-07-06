import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  loadOrderStats,
  selectOrderStat,
  selectloadIndicator,
} from '@hotel/orderapp/dashboard/data-access';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  getStartOfTheDay,
  getStartOfTheMonth,
  getStartOfTheWeek,
} from '@hotel/common/util';

@Component({
  selector: 'hotel-orderapp-dashboard-feature-order-report',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-dashboard-feature-order-report.component.html',
  styleUrls: ['./orderapp-dashboard-feature-order-report.component.css'],
})
export class OrderappDashboardFeatureOrderReportComponent {
  selectStatsLoading$ = this.store.select(selectloadIndicator);
  selectOrderStats$ = this.store.select(selectOrderStat);
  constructor(private store: Store) {}
  dateRangeForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  loadReport() {
    console.log(this.dateRangeForm.value);
    this.dispatchLoadAction(
      this.dateRangeForm.value.startDate!,
      this.dateRangeForm.value.endDate!
    );
  }

  dispatchLoadAction(startDateIso: string, endDateIso: string) {
    this.store.dispatch(
      loadOrderStats({
        startDate: startDateIso,
        endDate: endDateIso,
      })
    );
  }

  loadReportOfTheday() {
    const startDateIso = getStartOfTheDay().toISOString();
    const endDateIso = new Date().toISOString();

    this.dispatchLoadAction(startDateIso, endDateIso);
  }
  loadReportOfTheWeek() {
    const startDateIso = getStartOfTheWeek().toISOString();
    const endDateIso = new Date().toISOString();

    this.dispatchLoadAction(startDateIso, endDateIso);
  }

  loadReportOfTheMonth() {
    const startDateIso = getStartOfTheMonth().toISOString();
    const endDateIso = new Date().toISOString();

    this.dispatchLoadAction(startDateIso, endDateIso);
  }
}
