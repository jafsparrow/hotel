import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'hotel-orderapp-shell',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './orderapp-shell.component.html',
  styleUrls: ['./orderapp-shell.component.css'],
})
export class OrderappShellComponent {}
