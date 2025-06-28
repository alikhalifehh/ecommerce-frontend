import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';
import { CartService } from 'src/app/services/cart.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[]=[];
  cartItems: any[]=[];
  isLoading=false;

  constructor(
    private wooService:WoocommerceService,
    private cartService:CartService,
    private snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoading=true;
    this.wooService.getProducts().subscribe((data:any)=>{
      console.log('API response:',data);
      this.products=data;
      this.isLoading=false;
    }); 

    
    this.cartService.cartItems$.subscribe(items=>{
      this.cartItems=items;
    });
  }
  addToCart(product:any) {
    this.cartService.addToCart(product);
    console.log('Added to cart:',product.name);
    this.snackBar.open(`${product.name} added to cart!`, 'Close', {
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
    });
  }
}