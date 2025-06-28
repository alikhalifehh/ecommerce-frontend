import { Component, OnInit } from '@angular/core';
import { ProductContract } from 'src/app/core/contracts/product.contract';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector:'app-cart',
  templateUrl:'./cart.component.html'
})
export class CartComponent implements OnInit {
  cartItems:ProductContract[]=[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems=items;
    });
  }
}
