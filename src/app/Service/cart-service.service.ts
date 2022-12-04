import { EventEmitter, Injectable, Output } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { products as date } from '../data/cardObj';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  items: IProduct[];
  item = new Map()
  /*   addToCard(products: IProduct) {
      this.items.push(products)
      console.log(this.items)
     
    } */
/*     getItems() {
      return this.items;
    }
 */
/*   clearCart() {
    this.items = []
    return this.items
  } */
  
  products: IProduct[] = []

  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get('assets/cardsProduct.json');
  }

  getProduct() {
    return this.products
  }

  saveCart(): void {
    localStorage.setItem('cart_item', JSON.stringify(this.products))
  }

  addToCart(addProduct: any) {
    this.products.push(addProduct)
    this.saveCart()
  }

  loadCart(): any {
   this.products = JSON.parse(localStorage.getItem('cart_item') as any) || []
  }

  productCart(product: any): boolean {
    return this.products.findIndex((x: any) => x.id === product.id) > 1
  }

  removeCard(product: any) {
    const index = this.products.findIndex((x: any) => x.id === product.id)
    if (index > -1) {
      this.products.splice(index, 1)
      this.saveCart()
    }
  }

  clearCard() {
    localStorage.clear() 
  }

  @Output() event = new EventEmitter()

}
