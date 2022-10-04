import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartServiceService } from '../Service/cart-service.service';
import { IProduct } from '../models/cardProduct';
import { products as date } from '../data/cardObj';

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
})
export class CardBuyComponent implements OnInit {
  items;
  products: IProduct[] = date;
  /*   price: typeof products; */
  formsBuy = false;
  @Input() title = 'Информация для заказа';
  @Output() close = new EventEmitter<void>();
  quantity: number = 1;

  getSumShops(product: IProduct) {
    let sumShops = product.count * product.price;
    return sumShops;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getPlusCount() {
    this.quantity++;
  }

  getMinusCount() {
    this.quantity--;
    if (this.quantity <= 1) {
      this.quantity = 1;
    }
  }

  /*   getCountShops() {
    let totalPrice = this.quantity * this.products[].price;
    return totalPrice;
  } */
  /*   getSum() {
    return (this.quantity *= Number(this.price));
  }
 */
  constructor(private cartServiceService: CartServiceService) {
    this.items = this.cartServiceService.getItems();
    /* (this.products = this.cartServiceService.getCountShops()); */
  }

  ngOnInit(): void {}
}
