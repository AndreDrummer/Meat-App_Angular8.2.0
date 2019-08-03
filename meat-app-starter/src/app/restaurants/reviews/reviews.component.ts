import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from '../restaurantsService';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    let id: string;
    this.route.parent.paramMap.subscribe(params => id = params.get('id'));
    this.reviews = this.restaurantsService.reviewOfRestaurant(id)
    // .subscribe(review => this.reviews = review); como uso o | async no html esta linha n precisa ser added
    // caso eu tire o async eu preciso dela para me inscrever na resposta observable, mas no caso tire o this.reviews
  }

}
