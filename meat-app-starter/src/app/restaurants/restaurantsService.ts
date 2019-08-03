import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { MEAT_API } from '../app.api';

import { ErrorHandler } from '../error-handler';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantsService {
  rests: Restaurant[];

  constructor(
    private http: HttpClient
    ) { }

  restaurants()  {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
    .pipe(catchError(ErrorHandler.handleError))
  }

  restaurant(id: string) {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    .pipe(catchError(ErrorHandler.handleError))
  }

  reviewOfRestaurant(id: string) {
    return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`)
    .pipe(catchError(ErrorHandler.handleError));
  }

  menuOfRestaurant(id: string) {
    return this.http.get<MenuItem>(`${MEAT_API}/restaurants/${id}/menu`)
    .pipe(catchError(ErrorHandler.handleError));
  }
}


