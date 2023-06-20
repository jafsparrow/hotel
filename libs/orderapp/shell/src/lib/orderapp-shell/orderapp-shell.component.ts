import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hotel-orderapp-shell',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, RouterModule],
  templateUrl: './orderapp-shell.component.html',
  styleUrls: ['./orderapp-shell.component.css'],
})
export class OrderappShellComponent {}
