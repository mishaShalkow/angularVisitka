import {Component, OnInit} from '@angular/core'
import {CartServiceService} from '../Service/cart-service.service'
import {IProduct, OfferProduct} from '../models/cardProduct'
import {Subscription, empty, map} from 'rxjs'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import {DialogBoxComponent} from '../dialog-box/dialog-box.component'
import {ActivatedRoute} from '@angular/router'
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
})
export class CardBuyComponent implements OnInit {
  basket: IProduct[]
  basketSubscribe: Subscription
  newOfferProducts: IProduct[]
  newOfferProductsSubscribe: Subscription
  newOfferProductsFromBaket: any
  newOfferProductsFromBaketSub: Subscription

  constructor(
    private _cartService: CartServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.basketSubscribe = this._cartService
      .getProductFromBasket()
      .subscribe((data) => {
        this.basket = data
        console.log(data)
      })
  }

  minusItemFromBasket(item: IProduct) {
    if (item.count === 1) {
      this._cartService.deleteItemFromBasket(item.id).subscribe((date) => {
        let idx = this.basket.findIndex((data: any) => data.id === item.id)
        this.basket.splice(idx, 1)
      })
    } else {
      item.count -= 1
      this._cartService.updateFromBasket(item).subscribe((data) => {})
    }
  }

  plusItemFromBasket(item: IProduct) {
    item.count += 1
    this._cartService.updateFromBasket(item).subscribe((data) => {})
  }

  removeFromCard(item: IProduct) {
    this._cartService.deleteItemFromBasket(item.id).subscribe(() => {
      let idx = this.basket.findIndex((data: any) => data.id === item.id)
      this.basket.splice(idx, 1)
    })
  }

  get total() {
    return this.basket?.reduce(
      (sum: any, product: any) => ({
        count: 1,
        price: sum.price + product.count * product.price,
      }),
      {count: 1, price: 0}
    ).price
  }

  openDialogOfer() {
    this._cartService.getProductFromBasket().subscribe((data) => {
      if (data) this.postOffer(data)
      console.log(data)
    })
    let dialogConf = new MatDialogConfig()
    dialogConf.width = '500px'
    dialogConf.disableClose = true
    const dialogOp = this.dialog.open(DialogBoxComponent, dialogConf)
    dialogOp.afterClosed().subscribe((data) => {
      if (data) this.postOfferFromBasket(data)
    })
  }

  ngOnDestroy() {
    if (this.basketSubscribe) this.basketSubscribe.unsubscribe()
    if (this.newOfferProductsSubscribe)
      this.newOfferProductsSubscribe.unsubscribe()
    if (this.newOfferProductsFromBaketSub)
      this.newOfferProductsFromBaketSub.unsubscribe()
  }

  postOffer(data: any) {
    this._cartService
      .postOfferProducts(data)
      .subscribe((product) => this.newOfferProducts.push(product))
  }

  postOfferFromBasket(data: any) {
    this._cartService
      .postOfferProductsFromBasket(data)
      .subscribe((product) => this.newOfferProductsFromBaket.push(product))
  }
}
