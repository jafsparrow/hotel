import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hotel-orderapp-dashboard-feature-product-stat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-dashboard-feature-product-stat.component.html',
  styleUrls: ['./orderapp-dashboard-feature-product-stat.component.css'],
})
export class OrderappDashboardFeatureProductStatComponent {
  dateRangeForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  loadReport() {
    console.log(this.dateRangeForm.value);
  }
}
