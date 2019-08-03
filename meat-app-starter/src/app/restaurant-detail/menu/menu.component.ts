import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurantsService';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    let id;
    this.route.parent.paramMap.subscribe(params => id = params.get('id'));
    this.menu = this.restaurantsService.menuOfRestaurant(id);
  }

  addItem(data: MenuItem) {
    console.log(data)
  }

}
