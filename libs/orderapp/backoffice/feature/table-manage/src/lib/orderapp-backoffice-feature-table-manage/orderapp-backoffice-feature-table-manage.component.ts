import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappTableFeatureAddComponent } from '@hotel/orderapp/table/feature/add';
import { OrderappTableFeatureListComponent } from '@hotel/orderapp/table/feature/list';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-table-manage',
  standalone: true,
  imports: [
    CommonModule,
    OrderappTableFeatureAddComponent,
    OrderappTableFeatureListComponent,
  ],
  templateUrl: './orderapp-backoffice-feature-table-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-table-manage.component.css'],
})
export class OrderappBackofficeFeatureTableManageComponent {}
