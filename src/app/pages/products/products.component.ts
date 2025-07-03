import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/core/services/woocommerce.service';
import { CartService } from 'src/app/core/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductContract } from 'src/app/core/contracts/product.contract';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Import AngularFireAuth
import { Router } from '@angular/router';                     // Import Router

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  
})
export class ProductsComponent implements OnInit {
  products: ProductContract[] = [];
  cartItems: any[] = [];
  isLoading = false;
  showToast = false;
  toastMessage = '';


  constructor(
    private wooService: WoocommerceService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private afAuth: AngularFireAuth,  
    private router: Router              
  ) {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }
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
        this.showError('Failed to load products. Please try again later.');
      }
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
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }


showError(message: string) {
  this.toastMessage = message;
  this.showToast = true;

  setTimeout(() => {
    this.showToast = false;
  }, 7000);
}


}
