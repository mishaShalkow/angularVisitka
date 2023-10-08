import {Injectable} from '@angular/core'
import {IProduct} from '../models/cardProduct'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  items: IProduct[]
  home: 'http://localhost:3000/basket'
  url = 'http://localhost:3000/products'
  urlBasket = 'http://localhost:3000/basket'
  urlOffer = 'http://localhost:3000/newOfferProducts'
  basketOffer = 'http://localhost:3000/basketOffer'

  constructor(private http: HttpClient) {}

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

  getProductFromBasket() {
    return this.http.get<IProduct[]>(this.urlBasket)
  }

  updateFromBasket(product: IProduct) {
    return this.http.put<IProduct>(`${this.urlBasket}/${product.id}`, product)
  }

  deleteItemFromBasket(id: number) {
    return this.http.delete<any>(`${this.urlBasket}/${id}`)
  }

  postOfferProducts(product: IProduct) {
    return this.http.post<any>(this.basketOffer, product)
  }

  postOfferProductsFromBasket(product: IProduct) {
    return this.http.post<any>(this.urlOffer, product)
  }

  getProductFromPersonalBox() {
    return this.http.get<IProduct[]>(this.basketOffer)
  }

  getProductFromPersonalBoxFromBasket() {
    return this.http.get<IProduct[]>(this.urlOffer)
  }
}
