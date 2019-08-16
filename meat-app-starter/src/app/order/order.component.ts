import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { RadioOptions } from '../shared/radio/radio-options.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderItems, Order } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) { };


  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      number: this.fb.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.fb.control(''),
      paymentOption: this.fb.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo} )
  }

  // tslint:disable-next-line: member-ordering
  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if (!email || !emailConfirmation) {
      return undefined;
    }
    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true};
    }
    return undefined;
  }

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
        this.router.navigate(['/order-summary'])
        console.log(`Compra concluída: ${orderId}`);
        this.orderService.clear();
      })
  }


}
