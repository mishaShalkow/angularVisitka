import {Component, OnInit} from '@angular/core'
import {CartServiceService} from '../Service/cart-service.service'
import {IProduct, OfferProduct} from '../models/cardProduct'
import {Subscription} from 'rxjs'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import {DialogBoxComponent} from '../dialog-box/dialog-box.component'
import {ActivatedRoute} from '@angular/router'
import {HttpBackend, HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
})
export class CardBuyComponent implements OnInit {
  urlBasket = 'http://localhost:3000/basket'
  basket: IProduct[]
  basketSubscribe: Subscription
  newOfferProducts: IProduct[]
  newOfferProductsSubscribe: Subscription
  newOfferProductsFromBaket: IProduct[]
  newOfferProductsFromBaketSub: Subscription

  constructor(
    private _cartService: CartServiceService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.basket = this._cartService.getItem()

    this.basketSubscribe = this._cartService
      .getProductFromBasket()
      .subscribe((data) => {
        this.basket = data
        console.log(data)
        sessionStorage.setItem('cart', JSON.stringify(this.basket))

        /*    sessionStorage.setItem('valueStorage, JSON.stringify(this.basket)) */
      })
  }

  minusItemFromBasket(item: IProduct) {
    if (item.count === 1) {
      this._cartService.deleteItemFromBasket(item.id).subscribe((date) => {
        let idx = this.basket.findIndex((data) => data.id === item.id)
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
      let idx = this.basket.findIndex((data) => data.id === item.id)
      this.basket.splice(idx, 1)
    })
  }

  clearCard() {
    this._cartService.deleteAllProductsFromBasket().subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )

    /* this.http.delete('http://localhost:4200/basket').subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error(error)
      }
    ) */
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

  openDialogOfer() {
    this._cartService.getProductFromBasket().subscribe((data) => {
      if (data) this.postOfferFromBasket(data)
      console.log(data)
    })
    let dialogConf = new MatDialogConfig()
    dialogConf.width = '500px'
    dialogConf.disableClose = true
    const dialogOp = this.dialog.open(DialogBoxComponent, dialogConf)
    dialogOp.afterClosed().subscribe((data) => {
      if (data) this.postOffer(data)
    })
  }

  ngOnDestroy() {
    if (this.basketSubscribe) this.basketSubscribe.unsubscribe()
    if (this.newOfferProductsSubscribe)
      this.newOfferProductsSubscribe.unsubscribe()
    if (this.newOfferProductsFromBaketSub)
      this.newOfferProductsFromBaketSub.unsubscribe()
  }

  postOffer(data: IProduct) {
    this._cartService
      .postOfferProducts(data)
      .subscribe((product) => this.newOfferProducts.push(product))
  }

  postOfferFromBasket(data: any) {
    this._cartService
      .postOfferProductsFromBaskeet(data)
      .subscribe((product) => this.newOfferProductsFromBaket.push(product))
  }
}
