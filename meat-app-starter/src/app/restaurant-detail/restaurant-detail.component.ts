import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants/restaurantsService';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestaurantsService
    ) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap.subscribe(params => id = params.get('id'));
    this.restauranteService.restaurant(id).subscribe(restaurant => this.restaurant = restaurant)
  }

}
