import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  emitIncreaseQty(item: CartItem) {
    return this.increaseQty.emit(item);
  }
  emitDecreaseQty(item: CartItem) {
    return this.decreaseQty.emit(item);
  }
  emitRemove(item: CartItem) {
    return this.remove.emit(item);
  }

  ngOnInit() {
  }

}
