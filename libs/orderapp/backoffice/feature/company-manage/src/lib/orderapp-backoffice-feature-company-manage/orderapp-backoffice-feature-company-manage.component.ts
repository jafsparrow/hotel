import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappCompanyFeatureAddComponent } from '@hotel/orderapp/company/feature/add';
import { OrderappCompanyFeatureListComponent } from '@hotel/orderapp/company/feature/list';
import { OrderappTaxFeatureAddComponent } from '@hotel/orderapp/tax/feature/add';
import { Store } from '@ngrx/store';
import { selectCompany } from '@hotel/orderapp/company/data-access';
import { CompanyEditDialogData, Organisation, Tax } from '@hotel/common/types';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-company-manage',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    OrderappCompanyFeatureAddComponent,
    OrderappCompanyFeatureListComponent,
    OrderappTaxFeatureAddComponent,
  ],
  templateUrl: './orderapp-backoffice-feature-company-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-company-manage.component.css'],
})
export class OrderappBackofficeFeatureCompanyManageComponent {
  selectCompany$ = this.store.select(selectCompany);
  constructor(private store: Store, private dialog: MatDialog) {}

  editCompany(company: Organisation) {
    return this.dialog.open(OrderappCompanyFeatureAddComponent, {
      width: '100%',
      data: { company },
    });
  }

  editTax(company: Organisation, tax: Tax) {
    return this.dialog.open(OrderappTaxFeatureAddComponent, {
      width: '100%',
    });
  }

  addTax(company: Organisation) {
    return this.dialog.open(OrderappTaxFeatureAddComponent, {
      width: '100%',
    });
  }
}
