import { Component,  OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: [] = [];
  categories: [] = [];
  constructor(
    private _ShoppingCartService: ShoppingCartService,
    private _storeService: StoreService
  ) {}

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this._storeService.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  getAllCategories() {
    this._storeService.getAllCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  selectedCategory(event: any) {
    let value = event.target.value;

    if(value == "all"){
      this.getAllProducts()
    }else{
      this.getProductByCategory(value);

    }

  }

  getProductByCategory(keyword: any) {
    this._storeService.getProductByCategory(keyword).subscribe((res: any) => {
      this.products = res;
    });
  }

  onAddToCart(product: Product): void {
    this._ShoppingCartService.addToCart({
      image: product.image,
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      category: product.category,
      description: product.description,
    });
  }
}
