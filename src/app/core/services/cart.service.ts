import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductContract } from '../contracts/product.contract';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<ProductContract[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: ProductContract) {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, product]);
  }
}
