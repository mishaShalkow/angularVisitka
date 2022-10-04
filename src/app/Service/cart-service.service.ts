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
  price: IProduct[];
  setCount: boolean;

  /*   getCountShops = () => this.quantity * Number(this.price); */

  getCountShops(products: IProduct) {
    if (products.id === products.id) {
      products.count++;
    }
  }

  addToCard(products: IProduct) {
    this.items.push(products);
    this.getCountShops(products);
    /* this.items.push(products); */
    /*     if (products.id !== products.id) {
      this.items.push(products);
    } else if (products.id === products.id) {
      products.count++;
    } */
  }
  /* plusCountShops(products: IProduct) {
    if (products.id = products.id) {
      products.count++
    }
  } */

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
