import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, TokenInterceptor } from '../token.intercenptor';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'hotel-orderapp-core',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  templateUrl: './orderapp-core.component.html',
  styleUrls: ['./orderapp-core.component.css'],
})
export class OrderappCoreComponent {}
