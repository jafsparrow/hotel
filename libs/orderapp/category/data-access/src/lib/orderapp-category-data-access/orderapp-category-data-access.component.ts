import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-category-data-access',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './orderapp-category-data-access.component.html',
  styleUrls: ['./orderapp-category-data-access.component.css'],
})
export class OrderappCategoryDataAccessComponent {}
