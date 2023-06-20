import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginData } from '@hotel/common/types';
import {
  login,
  selectLoginErrorMessage,
  selectLoginProgressState,
} from '@hotel/orderapp/auth/data-access';

@Component({
  selector: 'hotel-orderapp-auth-feature-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-auth-feature-signin.component.html',
  styleUrls: ['./orderapp-auth-feature-signin.component.css'],
})
export class OrderappAuthFeatureSigninComponent {
  loginInProgressFlag$ = this.store.select(selectLoginProgressState);
  loginErrorMessage$ = this.store.select(selectLoginErrorMessage);
  signInForm: FormGroup;

  constructor(private store: Store) {
    this.signInForm = new FormGroup({
      username: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),
    });
  }

  login() {
    const loginData: LoginData = this.signInForm.value;
    this.store.dispatch(login({ loginData }));
  }
}
