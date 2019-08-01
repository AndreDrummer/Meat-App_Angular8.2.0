import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { MEAT_API } from '../app.api';


@Injectable()
export class RestaurantsService {
  rests: Restaurant[];

  constructor(private http: HttpClient) { }

  restaurants()  {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
  }
}


