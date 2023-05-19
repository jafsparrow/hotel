import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home',
        loadChildren: () =>
          import('@hotel/orderapp/home/home').then(
            (m) => m.OrderappHomeHomeModule
          ),
      },
    ]),
  ],
})
export class OrderappShellModule {}
