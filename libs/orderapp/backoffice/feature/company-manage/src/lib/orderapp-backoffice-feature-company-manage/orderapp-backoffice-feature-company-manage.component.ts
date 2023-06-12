import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappCompanyFeatureAddComponent } from '@hotel/orderapp/company/feature/add';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-company-manage',
  standalone: true,
  imports: [CommonModule, OrderappCompanyFeatureAddComponent],
  templateUrl: './orderapp-backoffice-feature-company-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-company-manage.component.css'],
})
export class OrderappBackofficeFeatureCompanyManageComponent {}
