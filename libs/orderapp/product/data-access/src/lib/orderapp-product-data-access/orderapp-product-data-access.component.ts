import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-product-data-access',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, MatDialogModule],
  templateUrl: './orderapp-product-data-access.component.html',
  styleUrls: ['./orderapp-product-data-access.component.css'],
})
export class OrderappProductDataAccessComponent {}
