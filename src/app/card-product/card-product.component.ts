import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import {ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs'
import {DialogBoxComponent} from '../dialog-box/dialog-box.component'
import {IProduct} from '../models/cardProduct'
import {CartServiceService} from '../Service/cart-service.service'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  informAbout = false

  @Output() close = new EventEmitter<void>()

  product: IProduct

  productsShop: IProduct[] = []
  subTotal!: any
  term = ''
  loading = false

  constructor(
    private _cartService: CartServiceService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  productList: IProduct[]
  productsSubscribe: Subscription

  basket: IProduct[]
  basketSubscribe: Subscription

  ngOnInit() {
    this.loading = true
    this.productsSubscribe = this._cartService
      .getAllProduct()
      .subscribe((data) => {
        this.productList = data
      })
    this.basketSubscribe = this._cartService
      .getProductFromBasket()
      .subscribe((data) => {
        this.basket = data
      })
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig()
    dialogConfig.width = '700px'
    dialogConfig.disableClose = true
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig)
    dialogRef.afterClosed().subscribe()
  }

  ngOnDestroy() {
    if (this.productsSubscribe) this.productsSubscribe.unsubscribe
    if (this.basketSubscribe) this.basketSubscribe.unsubscribe
  }
  /* 
  addToCart(product: IProduct) {
    if (!this._cartService.productCart(product)) {
      product.count = 1
      this._cartService.addToCart(product)
      this.subTotal = product.price
      console.log(product)
    }
    this.openDialog()
  } */

  addToBasket(product: IProduct) {
    product.count = 1
    let findItem
    if (this.basket.length > 0) {
      findItem = this.basket.find((item) => item.id === product.id)
      if (findItem) this.updateBasket(findItem)
      else this.postToBasket(product)
    } else this.postToBasket(product)
  }

  postToBasket(product: IProduct) {
    this._cartService
      .postToBasket(product)
      .subscribe((data) => this.basket.push(data))
  }

  updateBasket(product: IProduct) {
    product.count += 1
    this._cartService.updateFromBasket(product).subscribe((data) => {})
  }
}
