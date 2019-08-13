import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { RadioOptions } from '../shared/radio/radio-options.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderItems, Order } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  deliveryCost = 8;

  paymentOptions: RadioOptions[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Crédito', value: 'CRE' },
    { label: 'Vale Refeição', value: 'REF' }
  ];

  constructor(private orderService: OrderService) { }

  itemsValue(): number {
    return this.orderService.total();
  }

  total(): number {
    return this.deliveryCost + this.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItem = this.cartItems()
    .map((item: CartItem) => new OrderItems(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
    .subscribe((orderId: string) => {
      console.log(`Compra concluída: ${orderId}`);
      this.orderService.clear();
    })
  }

  ngOnInit() {
  }

}
