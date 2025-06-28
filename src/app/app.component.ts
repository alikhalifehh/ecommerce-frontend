import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service'; // Fixed import path

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-frontend';
  cartItems: any[] = []; // Initialize with an empty array

  constructor(private cartService: CartService) { // Inject CartService
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
}