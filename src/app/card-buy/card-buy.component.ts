import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartServiceService } from '../Service/cart-service.service';
import { IProduct } from '../models/cardProduct';
import { products } from '../data/cardObj';

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
})
export class CardBuyComponent implements OnInit {
  items;
  products;
  formsBuy = false;
  @Input() title = 'Информация для заказа';
  @Output() close = new EventEmitter<void>();
  totalPrice: any = 0;
  quantity = 1;

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalSum() {
    this.totalPrice += this.totalPrice;
  }

  constructor(private cartServiceService: CartServiceService) {
    this.items = this.cartServiceService.getItems();
    /*  this.products = this.cartServiceService.getSum(this.price); */

    /* this.items = this.cartServiceService.clearCart(); */
  }
  /*   getsSum(products: IProduct[]) {} */

  ngOnInit(): void {}
}
