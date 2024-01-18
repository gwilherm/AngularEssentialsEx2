import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.css',
})
export class CartComponentComponent {
  @Input() items: string[] = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem: string = '';

  onAddClick() {
    this.itemAdded.emit(this.newItem);
    this.newItem = '';
  }
}
