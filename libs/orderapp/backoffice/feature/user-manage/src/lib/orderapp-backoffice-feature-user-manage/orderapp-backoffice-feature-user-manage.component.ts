import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappUserFeatureUserListComponent } from '@hotel/orderapp/user/feature/user-list';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-user-manage',
  standalone: true,
  imports: [CommonModule, OrderappUserFeatureUserListComponent],
  templateUrl: './orderapp-backoffice-feature-user-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-user-manage.component.css'],
})
export class OrderappBackofficeFeatureUserManageComponent {}
