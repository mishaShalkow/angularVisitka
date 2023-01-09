import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core'
import {IProduct} from '../models/cardProduct'
import {CartServiceService} from '../Service/cart-service.service'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  informAbout = false

  @Input() product: IProduct
  @Output() close = new EventEmitter<void>()

  productList: IProduct[]
  products: any[] = []
  subTotal!: any
  term = ''
  loading = false

  constructor(private _cartService: CartServiceService) {}

  ngOnInit() {
    this.loading = true
    this._cartService.getAllProduct().subscribe({
      next: (res: any) => {
        this.productList = res
        console.log(res)
        this.loading = false
      },
      error: (error) => {
        console.log('error', error)
      },
      complete: () => {
        console.log('Request complete')
      },
    })

    this._cartService.loadCart()
    this.products = this._cartService.getProduct()
  }

  addToCart(product: IProduct) {
    window.alert('Вы добавили товар в корзину')
    if (!this._cartService.productCart(product)) {
      product.count = 1
      this._cartService.addToCart(product)
      this.products = [...this._cartService.getProduct()]
      this.subTotal = product.price
      console.log(product)
    }
  }
}
