import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent,
  children: [
    { path: '', redirectTo: 'menu', pathMatch: 'full' }, // <-- See comments
    { path: 'menu', component: MenuComponent },
    { path: 'reviews', component: ReviewsComponent }
  ]},
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'order', component: OrderComponent },
  { path: 'about', component: AboutComponent },
];
// Se não colocar isso, assim que abrir o details nenhum componente filho será mostrado.
// Isso define que menu sera o default assim que abrir o detail
