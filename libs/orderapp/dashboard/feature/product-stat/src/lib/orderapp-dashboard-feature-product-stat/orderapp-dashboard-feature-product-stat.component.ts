import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    this.store.dispatch(
      loadProductStats({
        startDate: this.dateRangeForm.value.startDate!,
        endDate: this.dateRangeForm.value.endDate!,
      })
    );
  }

  // loadReportOfTheday() {
  //   start
  // }
}
