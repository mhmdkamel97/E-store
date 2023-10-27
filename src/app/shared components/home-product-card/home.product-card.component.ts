import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.css']
})
export class HomeProductCardComponent  {



  @Output() addToCart = new EventEmitter;
  
  @Input() product: Product |undefined ;


  onAddToCart() :void{
    this.addToCart.emit(this.product);
  }
}
