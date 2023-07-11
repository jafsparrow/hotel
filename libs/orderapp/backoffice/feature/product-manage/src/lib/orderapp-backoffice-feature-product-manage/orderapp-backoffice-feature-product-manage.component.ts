import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappProductFeatureAdminListComponent } from '@hotel/orderapp/product/feature/admin-list';
import { Store } from '@ngrx/store';
import { loadProducts } from '@hotel/orderapp/product/data-access';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-product-manage',
  standalone: true,
  imports: [CommonModule, OrderappProductFeatureAdminListComponent],
  templateUrl: './orderapp-backoffice-feature-product-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-product-manage.component.css'],
})
export class OrderappBackofficeFeatureProductManageComponent {}
