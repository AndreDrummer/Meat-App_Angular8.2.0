import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';
=======
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

>>>>>>> ff956361cecda45d8366a16dc745dd5cd8e850b2

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

<<<<<<< HEAD
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
=======
  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item);
  }
  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }
  emitRemove(item: CartItem) {
    this.remove.emit(item);
>>>>>>> ff956361cecda45d8366a16dc745dd5cd8e850b2
  }

}
