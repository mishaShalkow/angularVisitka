import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { products as date } from '../data/cardObj';

@Component({
  selector: 'app-information-about-shops',
  templateUrl: './information-about-shops.component.html',
  styleUrls: ['./information-about-shops.component.scss'],
})
export class InformationAboutShopsComponent implements OnInit {
  formsBuy = false;

  products: IProduct[] = date;
  @Input() product: IProduct;
  @Output() close = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
