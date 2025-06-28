import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/core/services/woocommerce.service';
import { CartService } from 'src/app/core/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductContract } from 'src/app/core/contracts/product.contract';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: ProductContract[] = [];
  cartItems: any[] = [];
  isLoading = false;

  constructor(
    private wooService: WoocommerceService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.wooService.getProducts().subscribe({
      next: (res) => {
        this.products = res.posts.map((element: any) => {
          const newElement = {
            title: element.title,
            description: element.excerpt.replace(/<[^>]*>/g, ''),
            image: this.getProductImage(element?.attachments),
          };
          return newElement;
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.log('err', err);
      },
    });

    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }
  getProductImage(attachments: any): string {
    const keys = Object.keys(attachments);
    return attachments[keys[0]]?.URL;
  }
  addToCart(product: ProductContract) {
    this.cartService.addToCart(product);
    console.log('Added to cart:', product.title);
    this.snackBar.open(`${product.title} added to cart!`, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
