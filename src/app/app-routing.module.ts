import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
const routes:Routes=[
  { path: 'login', component: LoginComponent },
  { path:'landing',component:LandingComponent,canActivate: [AuthGuard] },
  { path:'products',component:ProductsComponent,canActivate: [AuthGuard] },
  { path:'cart',component:CartComponent,canActivate: [AuthGuard] }, 
  { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
