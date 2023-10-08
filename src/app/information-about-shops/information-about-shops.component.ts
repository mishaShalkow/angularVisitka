import {Component, OnInit} from '@angular/core'
import {IProduct} from '../models/cardProduct'
import {ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-information-about-shops',
  templateUrl: './information-about-shops.component.html',
  styleUrls: ['./information-about-shops.component.scss'],
})
export class InformationAboutShopsComponent implements OnInit {
  product: IProduct
  productSubscribe: Subscription
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productSubscribe = this.route.data.subscribe((data) => {
      this.product = data['data']
      console.log(this.product)
    })
  }
}
