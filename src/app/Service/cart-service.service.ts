import { Injectable } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { products } from '../data/cardObj';
import { CardProductComponent } from '../card-product/card-product.component';
import { cartItem } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  public quantity: number = 0;
  items: IProduct[] = [];
  price: IProduct[] = [];
  id: number;

  addToCard(products: IProduct) {
    this.items.push(products);
    if (this.id === products.id) {
      this.quantity++;
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getSum(products: IProduct) {}
  constructor() {}
}
