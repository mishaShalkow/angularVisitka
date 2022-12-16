import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core'
import {CartServiceService} from '../Service/cart-service.service'
import {IProduct} from '../models/cardProduct'
import {products as date} from '../data/cardObj'

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
})
export class CardBuyComponent implements OnInit {
  productList!: any[]
  productsSum: IProduct[] = []
  subTotal!: any
  productCarts: IProduct[]

  formsBuy = false
  @Output() close = new EventEmitter<void>()

  constructor(private _cartService: CartServiceService) {
    this.productCarts = this._cartService.getProduct()
  }

  clearCard() {
    this.productsSum = []
    this.productCarts = []
  }

  ngOnInit(): void {
    this.productsSum = this._cartService.getProduct()
  }

  removeFromCard(product: any) {
    this._cartService.removeCard(product)
    this.productsSum = this._cartService.getProduct()
  }

  get total() {
    return this.productsSum?.reduce(
      (sum, product) => ({
        count: 1,
        price: sum.price + product.count * product.price,
      }),
      {count: 1, price: 0}
    ).price
  }
}
