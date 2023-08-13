import {Injectable} from '@angular/core'
import {IProduct, OfferProduct} from '../models/cardProduct'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {catchError, tap} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  items: IProduct[]
  anotherUrl = 'https://tommy-c0e50-default-rtdb.firebaseio.com/products.json'
  anotherUrlBasket =
    'https://firebasestorage.googleapis.com/v0/b/tommy-c0e50.appspot.com/o/cardsProduct.json?alt=media&token=84e78e0a-7bc1-4ccc-b8df-fd9d548d6b64'
  url = 'http://localhost:3000/products'
  urlBasket = 'http://localhost:3000/basket'
  urlOffer = 'http://localhost:3000/newOfferProducts'
  basketOffer = 'http://localhost:3000/basketOffer'
  deleteAllItems = 'http://localhost:3000/basket'
  constructor(private http: HttpClient) {
    const saveCart = JSON.parse(localStorage.getItem('deleteAllItems'))
    if (saveCart) {
      this.deleteAllItems = saveCart
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  clearCard() {
    localStorage.setItem('deleteAllItems', JSON.stringify(this.deleteAllItems))
  }

  getItem() {
    return this.items
  }

  getAllProduct() {
    return this.http.get<IProduct[]>(this.url)
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(`${this.url}/${id}`)
  }

  postProducts(product: IProduct) {
    return this.http.post<IProduct>(this.url, product)
  }

  postToBasket(product: IProduct) {
    return this.http.post<IProduct>(this.urlBasket, product)
  }

  /* --proxy-config proxy.config.json */

  getProductFromBasket() {
    return this.http.get<IProduct[]>(this.urlBasket)
  }

  updateFromBasket(product: IProduct) {
    return this.http.put<IProduct>(`${this.urlBasket}/${product.id}`, product)
  }

  deleteItemFromBasket(id: number) {
    return this.http.delete<any>(`${this.urlBasket}/${id}`)
  }

  deleteAllProductsFromBasket() {
    return this.http.delete<IProduct>(this.deleteAllItems)
  }

  postOfferProducts(product: IProduct[]) {
    return this.http.post<any>(this.basketOffer, product)
  }

  postOfferProductsFromBaskeet(product: IProduct[]) {
    return this.http.post<any>(this.urlOffer, product)
  }

  getProductFromPersonalBox() {
    return this.http.get<IProduct[]>(this.basketOffer)
  }

  getProductFromPersonalBoxFromBasket() {
    return this.http.get<IProduct[]>(this.urlOffer)
  }
}
