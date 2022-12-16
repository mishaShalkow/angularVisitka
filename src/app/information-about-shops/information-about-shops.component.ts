import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {CartServiceService} from '../Service/cart-service.service'
import {IProduct} from '../models/cardProduct'

@Component({
  selector: 'app-information-about-shops',
  templateUrl: './information-about-shops.component.html',
  styleUrls: ['./information-about-shops.component.scss'],
})
export class InformationAboutShopsComponent implements OnInit {
  @Input() productList!: IProduct[]
  @Input() informationProduct: string

  formsBuy = false

  /*   informCarts = products */
  @Output() close = new EventEmitter<void>()

  constructor(private _cartService: CartServiceService) {}

  ngOnInit() {
    /*     this._cartService.getAllProduct().subscribe({
      next: (res: any) => {
        this.productList = res
        console.log(res)
      },
    }) */
  }
}
