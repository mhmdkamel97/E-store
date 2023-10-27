import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem) {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('item added to cart.', 'ok', { duration: 3000 });
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart() {
    this.cart.next({ items: [] });
    this._snackBar.open('cart is cleared', 'ok', { duration: 3000 });
  }

  deleteItem(item: CartItem) {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    this.cart.next({items: filteredItems});
    this._snackBar.open('item was deleted from cart', 'ok', { duration: 3000 });

    return filteredItems;
  }

  minusQuantity(item: CartItem) {
    let itemRemoval: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if(_item.id === item.id){
        _item.quantity--;
      }

      return _item;
    });
    if (itemRemoval) {
      filteredItems = this.deleteItem(itemRemoval);
    }
    this.cart.next({ items: filteredItems });
    this._snackBar.open('item was removed', 'ok', { duration: 3000 });
  }
}
