import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@hotel/orderapp/auth/data-access';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('check result', !this.auth.isLoggedUserAdmin);
    if (!this.auth.isLoggedUserAdmin) {
      // if (!this.auth.getToken()) {

      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
  }
}
