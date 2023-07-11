import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { logout } from '@hotel/orderapp/auth/data-access';

@Component({
  selector: 'hotel-orderapp-dashboard-feature-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './orderapp-dashboard-feature-page.component.html',
  styleUrls: ['./orderapp-dashboard-feature-page.component.css'],
})
export class OrderappDashboardFeaturePageComponent {
  constructor(
    private router: Router,

    private route: ActivatedRoute,
    private store: Store
  ) {}
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
