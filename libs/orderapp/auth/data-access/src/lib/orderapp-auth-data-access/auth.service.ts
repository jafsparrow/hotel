import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '@hotel/common/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsUserAuthenticated } from './+state/authentication.selectors';
import { hydrateUserFromLocalStorage } from './+state/authentication.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('endPointURL') public apiUrl: string,
    private store: Store
  ) {
    console.log('auth constructd');
  }

  checkAuthInLocalStorage() {
    if (!localStorage.getItem('token')) return false;

    if (!localStorage.getItem('user')) return false;

    // [NOTE - TODO] this is a hack to hydrate user from the localstorage. this can be achived using metareducer in ngrx. Need to lookinto later
    this.store.select(selectIsUserAuthenticated).subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        const userSavedInLocalStorage = this.loadUserFromLocalStorage();
        this.store.dispatch(
          hydrateUserFromLocalStorage({ user: userSavedInLocalStorage })
        );
      }
    });

    return true;
  }

  isLoggedUserAdmin() {
    console.log('inside isLoogedUserAdmin function');
    const user = this.loadUserFromLocalStorage() as unknown as User;
    console.log('local storage user', user);
    if (user.isAdmin) return true;
    return false;
  }

  getLoggedUserRole() {
    return this.loadUserFromLocalStorage().userType;
  }
  private loadUserFromLocalStorage() {
    console.log(this.getUser());
    return JSON.parse(localStorage.getItem('user')!);
  }

  getUser(): User | null {
    return localStorage.getItem('user') as unknown as User;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logIn(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/auth/login`;
    console.log('login call hapened', url);
    console.log(username, password);
    return this.http.post<User>(url, { username, password });
  }

  tableLogin(password: string) {
    const url = `${this.apiUrl}/tablelogin`;
    return this.http.post<User>(url, { password });
  }

  signUp(user: any): Observable<any> {
    const url = `${this.apiUrl}/auth/signup`;
    console.log('auth serve signup method', user);
    return this.http.post<User>(url, user);
  }

  getStatus(): Observable<User> {
    const url = `${this.apiUrl}/status`;
    return this.http.get<User>(url);
  }
}
