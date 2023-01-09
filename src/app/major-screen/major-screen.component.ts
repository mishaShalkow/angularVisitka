import {style} from '@angular/animations'
import {NONE_TYPE} from '@angular/compiler'
import {Component, Directive, OnInit} from '@angular/core'
import {IProduct} from '../models/cardProduct'
import {CartServiceService} from '../Service/cart-service.service'

@Component({
  selector: 'app-major-screen',
  templateUrl: './major-screen.component.html',
  styleUrls: ['./major-screen.component.scss'],
})
export class MajorScreenComponent implements OnInit {
  term = ''
  loading = false
  productList: IProduct
  products: any[] = []

  constructor(public _cartService: CartServiceService) {
    this._cartService.getAllProduct().subscribe(() => {
      this.loading = false
    })
  }

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
}
