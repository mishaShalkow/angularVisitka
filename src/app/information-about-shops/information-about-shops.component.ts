import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/cardProduct';
import { ActivatedRoute } from '@angular/router';
import { products } from '../data/cardObj';
import { products as date } from '../data/cardObj';
import { CartServiceService } from '../Service/cart-service.service';


@Component({
  selector: 'app-information-about-shops',
  templateUrl: './information-about-shops.component.html',
  styleUrls: ['./information-about-shops.component.scss'],
})
export class InformationAboutShopsComponent implements OnInit {
  informAbout = false;
  formsBuy = false;
  @Output() close = new EventEmitter<void>();
  @Input() product: IProduct;
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
    
  }}
