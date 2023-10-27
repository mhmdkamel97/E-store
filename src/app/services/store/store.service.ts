import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const Base_URL = 'https://fakestoreapi.com/';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private _httpClient: HttpClient) {}


  getAllProducts(){
    return this._httpClient.get(Base_URL+"products")
  }

  getAllCategories(){
    return this._httpClient.get(Base_URL+"products/categories")
  }
  
  getProductByCategory(keyword: string){
    return this._httpClient.get(Base_URL+"products/category/"+keyword)
  }
  
}
