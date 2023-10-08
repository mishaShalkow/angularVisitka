import {Component, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'
import {IProduct} from '../models/cardProduct'
import {CartServiceService} from '../Service/cart-service.service'

@Component({
  selector: 'app-personal-box',
  templateUrl: './personal-box.component.html',
  styleUrls: ['./personal-box.component.scss'],
})
export class PersonalBoxComponent implements OnInit {
  newOfferProducts: IProduct[]
  newOfferProductsSubscribe: Subscription
  basket: IProduct[]
  basketSubscribe: Subscription
  newOfferProductsFromBaket: IProduct[]
  newOfferProductsFromBaketSub: Subscription
  sum = 0

  constructor(private _cartService: CartServiceService) {}

  ngOnInit(): void {
    this._cartService.getProductFromPersonalBox().subscribe((data) => {
      this.newOfferProducts = data
      for (let i of this.newOfferProducts) {
        this.sum += i.price * i.count
      }
      console.log(data)
      return this.sum
    })

    this.newOfferProductsFromBaketSub = this._cartService
      .getProductFromPersonalBoxFromBasket()
      .subscribe((data) => {
        this.newOfferProductsFromBaket = data
        console.log(data)
      })

    /* this.basketSubscribe = this._cartService
      .getProductFromBasket()
      .subscribe((data) => {
        this.basket = data
      }) */
  }

  get total() {
    return this.basket?.reduce(
      (sum, product) => ({
        count: 1,
        price: sum.price + product.count * product.price,
      }),
      {count: 1, price: 0}
    ).price
  }

  ngOnDestroy() {
    if (this.newOfferProductsSubscribe)
      this.newOfferProductsSubscribe.unsubscribe()

    if (this.basketSubscribe) this.basketSubscribe.unsubscribe()
    if (this.newOfferProductsFromBaketSub)
      this.newOfferProductsFromBaketSub.unsubscribe()
  }
}
