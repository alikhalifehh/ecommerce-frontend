import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductContract } from 'src/app/core/contracts/product.contract';  // Your product model path

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: ProductContract;           // Accept product as input
  @Output() addToCart = new EventEmitter<ProductContract>();  // Emit event on add

  onAddToCart() {
    this.addToCart.emit(this.product);           // Emit product to parent
  }
}
