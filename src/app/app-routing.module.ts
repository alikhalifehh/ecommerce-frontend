import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './pages/cart/cart.component';

const routes:Routes = [
  { path: '', component: LandingComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent }, 
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
