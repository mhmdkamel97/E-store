import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart-item';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  // inject ShoppingCartService to use getTotal()
  itemsQuantity = 0;
  private _cart: Cart = { items: [] };

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

}
