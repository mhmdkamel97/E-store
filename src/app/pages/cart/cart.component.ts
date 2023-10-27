import { Component, EventEmitter, Output } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart-item';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  faPlus = faPlus;
  faMinus = faMinus;
  total = 0;

  cart: Cart = {
    items: [
    ],
  };

  // inject ShoppingCartService to use getTotal() ;
  constructor(private _shoppingCartService: ShoppingCartService) {}

  // calc total items price
  getTotal(items: Array<CartItem>): number {
    return this._shoppingCartService.getTotal(items);
  }

  plusQuantity(item: CartItem) {
    this._shoppingCartService.addToCart(item);
  }
  minusQuantity(item: CartItem) {
    this._shoppingCartService.minusQuantity(item);
  }

  clearCart() {
    return this._shoppingCartService.clearCart();
  }

  deleteItem(item: CartItem) {
    this._shoppingCartService.deleteItem(item);  }

  ngOnInit(): void {
    this._shoppingCartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
