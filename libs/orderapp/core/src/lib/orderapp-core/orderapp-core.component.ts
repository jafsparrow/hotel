import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, TokenInterceptor } from '../token.interceptor';
import { AuthGuard } from '../auth.guard';
import { AdminGuard } from '../admin.guard';

@Component({
  selector: 'hotel-orderapp-core',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthGuard, AdminGuard],
  templateUrl: './orderapp-core.component.html',
  styleUrls: ['./orderapp-core.component.css'],
})
export class OrderappCoreComponent {}
