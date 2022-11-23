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
  products: IProduct[] = date;
  formsBuy = false;
  items: any;
 title = 'Информация для заказа';
  @Output() close = new EventEmitter<void>();

  constructor(private cartServiceService: CartServiceService) {
    this.items = this.cartServiceService.getItems();

  }

  ngOnInit(): void {}
}
