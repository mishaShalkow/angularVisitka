import { Injectable } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { products as date } from '../data/cardObj';
import { CardProductComponent } from '../card-product/card-product.component';
import { count, identity } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  items: IProduct[] = [];


  getCountShops(products: IProduct) {
    if (products.id === products.id) {
      products.count++;
    }
  }

  addToCard(products: IProduct) {
    this.items.push(products);
    this.getCountShops(products);
 
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = []
    return this.items
  }

  constructor() {}
}
