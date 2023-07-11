import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hotel-orderapp-user-feature-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-user-feature-user-list.component.html',
  styleUrls: ['./orderapp-user-feature-user-list.component.css'],
})
export class OrderappUserFeatureUserListComponent {
  addUser() {
    return 'ehllo';
  }
}
