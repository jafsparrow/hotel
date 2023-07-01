import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, TokenInterceptor } from '../token.interceptor';
import { AuthGuard } from '../auth.guard';
import { AdminGuard } from '../admin.guard';
import { TimesagoPipe } from '../timesago.pipe';
import { SessionGuard } from '../session.guard';

@Component({
  selector: 'hotel-orderapp-core',
  standalone: true,
  imports: [CommonModule, TimesagoPipe],
  providers: [AuthGuard, AdminGuard, SessionGuard],
  templateUrl: './orderapp-core.component.html',
  styleUrls: ['./orderapp-core.component.css'],
})
export class OrderappCoreComponent {}
