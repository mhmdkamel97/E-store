import { Component, OnInit, ViewChild } from '@angular/core';
import { Cart } from './models/cart-item';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'E-store';
  cart: Cart = { items: [] };

  constructor(private _shoppingCartService: ShoppingCartService) {}
  ngOnInit() {
    this._shoppingCartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
