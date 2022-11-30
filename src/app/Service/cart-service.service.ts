import { EventEmitter, Injectable, Output } from '@angular/core';
import { IProduct } from '../models/cardProduct';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  items: IProduct[] = [];
  item = new Map()

  @Output() event = new EventEmitter()

  addToCard(products: IProduct) {
    this.items.push(products)
   /*  this.items.set(products, 1) */

    console.log(this.items)
   /*  this.getTotalArr(products) */
 
   
  }



/*   getTotalArr(products: IProduct) {
    for(let i of this.items)
    if(i.id == products.id) {
      products.count++
      this.items.splice(i.id, 1);
    }
  } */
/*   addToCard(products: IProduct) {
    this.items.push(products);
    this.getCountShops(products);
 
  } */

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = []
    return this.items
  }

  constructor() {

  }

}
