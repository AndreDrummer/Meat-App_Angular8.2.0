import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart-service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { MEAT_API } from 'app/app.api';
import { Order } from './order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ErrorHandler} from '../error-handler';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient,
    private cartService: ShoppingCartService
  ) { }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }
  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  total() {
    return this.cartService.total();
  }

  clear() {
    return this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    const options = { headers: new HttpHeaders({'Content-Type':  'application/json'}) }
    // headers.append('Content-Type',  'application/json')
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), options)
    .pipe(map(res => res['id']),  catchError(ErrorHandler.handleError));
  }
}
