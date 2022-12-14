import {Component} from '@angular/core'
import {NgModule} from '@angular/core'
import {products as date} from './data/cardObj'
import {IProduct} from './models/cardProduct'
import {OnInit} from '@angular/core'
import {CartServiceService} from './Service/cart-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  term = ''
  products: IProduct[] = date
  constructor() {}

  ngOnInit(): void {}
}
