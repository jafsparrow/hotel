import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { selectActiveSession } from '@hotel/orderapp/possession/data-access';

import { Store } from '@ngrx/store';
import { Observable, map, take, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionGuard implements CanActivate {
  constructor(private store: Store, private route: Router) {}
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return this.store.select(selectActiveSession).pipe(
      map((data) => (data ? true : false)),
      tap((data) => {
        console.log('sttaus of session', data);
        if (!data) this.route.navigate(['shell']);
      })
    );
  }
}
