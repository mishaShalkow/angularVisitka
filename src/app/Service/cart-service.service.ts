import {EventEmitter, Injectable, Output} from '@angular/core'
import {IProduct} from '../models/cardProduct'
import {products as date} from '../data/cardObj'
import {HttpClient} from '@angular/common/http'
import {Observable, tap} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  products: IProduct[] = []

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('assets/cardsProduct.json')
      .pipe(tap((products) => (this.products = products)))
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
    this.products = []
    localStorage.clear()
  }

  @Output() event = new EventEmitter()
}
