import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';

@Component({
  selector:'app-products',
  templateUrl:'./products.component.html',
  styleUrls:['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[]=[];

  constructor(private wooService: WoocommerceService) {}

  ngOnInit(): void {
  console.log('ProductsComponent loaded');

  this.wooService.getProducts().subscribe((data: any) => {
    console.log('API response:',data);
    this.products=data;
  });
}
}
