import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { CartServiceService } from '../Service/cart-service.service';
import { cartItem } from '../models/cart';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  condition = false;
  informAbout = false;
  @Input() product: IProduct;
  @Output() close = new EventEmitter<void>();

  addToCart(product: any) {
    window.alert('you add a shops to cart');
    this.cartService.addToCard(product);
  }
  /* modalView = false;
  imgUrlNBB =
    'https://75.img.avito.st/image/1/1.VpyAvLax-nW2C3h4oLEIz2kf-nE8HfB3.kt2OAD6vju7t1M6eamqK5mh-9lGufsGyrtWkWDagKJ4';
  information = 'Подробней';
  titleImg1Card1 = 'Светильник для бани и сауны IP65';
  btnBuy = 'Заказать';
  clickInfo(): any {
    this.titleImg1Card1 =
      'Степень защиты IP65, Мощность: 60 Вт, Источник света Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)'; */
  /*  if ((this.visibleCard = true)) {
      this.titleImg1Card1 =
        'Степень защиты IP65, Мощность: 60 Вт, Источник света Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)';
    } else {
      this.titleImg1Card1 = '';
    } */
  /*   } */
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {}
}
