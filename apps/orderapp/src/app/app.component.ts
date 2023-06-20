import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderappCoreComponent } from '@hotel/orderapp/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, OrderappCoreComponent],
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log('app componsed called.');
  }
  title = 'orderapp';
}
