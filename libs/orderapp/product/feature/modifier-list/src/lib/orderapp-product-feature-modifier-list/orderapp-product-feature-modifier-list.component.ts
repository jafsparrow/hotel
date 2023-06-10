import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@hotel/common/types';
import { Modifier, ModifierGroup } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-product-feature-modifier-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-product-feature-modifier-list.component.html',
  styleUrls: ['./orderapp-product-feature-modifier-list.component.css'],
})
export class OrderappProductFeatureModifierListComponent {
  @Input() product?: Product;
  @Output() selectedModifierEvent = new EventEmitter<any>();

  selectedModifiers: { [key: string]: Modifier } = {};
  modifierDisplayState = false;

  testGroup: ModifierGroup[] = [
    {
      id: 1,
      description: 'Milky',
      modifiers: [
        { id: 1, description: 'modie 1 1', price: 0.2 },
        { id: 2, description: 'modie 1 2', price: 0.3 },
      ],
    },
    {
      id: 2,
      description: 'salty',
      modifiers: [
        { id: 1, description: 'modie 2 1', price: 0.2 },
        { id: 2, description: 'modie 2 2', price: 0.3 },
      ],
    },
  ];

  radioBtnChange($event: any, groupId: number, modifer: Modifier) {
    console.log($event.target.id, $event.target.name);

    const groupKey = groupId.toString();

    console.log(modifer);
    this.selectedModifiers[groupKey] = modifer;
    console.log(this.selectedModifiers);
    this.selectedModifierEvent.emit(this.selectedModifiers);
  }

  toggleModifiers() {
    this.modifierDisplayState = !this.modifierDisplayState;
  }
}
