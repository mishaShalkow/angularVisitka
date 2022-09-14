import { Injectable } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { products } from '../data/cardObj';
import { CardProductComponent } from '../card-product/card-product.component';
import { cartItem } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  items: IProduct[] = [];

  addToCard(products: IProduct) {
    this.items.push(products);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
