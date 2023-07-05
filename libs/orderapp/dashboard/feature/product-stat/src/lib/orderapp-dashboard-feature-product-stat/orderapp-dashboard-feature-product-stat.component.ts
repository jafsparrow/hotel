import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  getStartOfTheDay,
  getStartOfTheMonth,
  getStartOfTheWeek,
} from '@hotel/common/util';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  loadProductStats,
  selectProductStat,
  selectloadIndicator,
} from '@hotel/orderapp/dashboard/data-access';
import { DateTime } from 'luxon';

@Component({
  selector: 'hotel-orderapp-dashboard-feature-product-stat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-dashboard-feature-product-stat.component.html',
  styleUrls: ['./orderapp-dashboard-feature-product-stat.component.css'],
})
export class OrderappDashboardFeatureProductStatComponent {
  selectStatsLoading$ = this.store.select(selectloadIndicator);
  selectProductStats$ = this.store.select(selectProductStat);
  constructor(private store: Store) {
    this.selectProductStats$.subscribe((date) => console.log(date));
  }
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
      loadProductStats({
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
