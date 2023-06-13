import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { loadCompany } from '@hotel/orderapp/company/data-access';
@Component({
  selector: 'hotel-orderapp-backoffice-feature-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './orderapp-backoffice-feature-page.component.html',
  styleUrls: ['./orderapp-backoffice-feature-page.component.css'],
})
export class OrderappBackofficeFeaturePageComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.store.dispatch(loadCompany({ id: 1 }));
  }
  navigateTo(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
