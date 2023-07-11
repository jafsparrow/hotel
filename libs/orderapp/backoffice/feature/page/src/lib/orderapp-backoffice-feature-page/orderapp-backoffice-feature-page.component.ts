import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { loadCompany } from '@hotel/orderapp/company/data-access';
import { loadKitchens } from '@hotel/orderapp/kitchen/data-access';
import { logout } from '@hotel/orderapp/auth/data-access';
import { OrderappAuthFeatureSignedUserDetailComponent } from '@hotel/orderapp/auth/feature/signed-user-detail';
import { loadProducts } from '@hotel/orderapp/product/data-access';
import { loadCategories } from '@hotel/orderapp/category/data-access';
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
    OrderappAuthFeatureSignedUserDetailComponent,
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
    this.store.dispatch(loadKitchens());
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadCategories());
  }
  navigateTo(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }

  logout() {
    return this.store.dispatch(logout());
  }

  goToShellPage() {
    this.router.navigate(['shell']);
  }
}
