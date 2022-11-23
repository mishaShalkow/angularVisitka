import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { CartServiceService } from '../Service/cart-service.service';
import { products as date } from '../data/cardObj';
import { products } from '../data/cardObj';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  informAbout = false;
  @Input () product: IProduct;
  @Output() close = new EventEmitter<void>();

  addToCart(product: IProduct) {
    window.alert('Вы добавили товар в корзину');
    this.cartService.addToCard(product);
  }


  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {}
}
