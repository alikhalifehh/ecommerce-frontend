import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-frontend';
  cartItems: any[] = [];
  currentUser: any = null;
  showNavbar = true;

  constructor(
    private cartService: CartService, 
    private afAuth: AngularFireAuth,
    private router: Router
  ) { 
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

    this.afAuth.authState.subscribe(user => {
      this.currentUser = user;
      console.log('Current user:', user);
    });

   
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.showNavbar = event.url !== '/login';
    });
  }
  signOut() {
  this.afAuth.signOut().then(() => {
    this.router.navigate(['/login']);
  });
}


}
