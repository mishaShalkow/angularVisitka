import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartServiceService } from '../Service/cart-service.service';
import { IProduct } from '../models/cardProduct';

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
})
export class CardBuyComponent implements OnInit {
  items;
  formsBuy = false;
  @Input() title = 'Информация для заказа';
  @Output() close = new EventEmitter<void>();

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private cartServiceService: CartServiceService) {
    this.items = this.cartServiceService.getItems();
    /* this.items = this.cartServiceService.clearCart(); */
  }
  /*   getsSum(products: IProduct[]) {} */

  ngOnInit(): void {}
}
