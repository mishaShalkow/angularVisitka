import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
})
export class CardBuyComponent implements OnInit {
  formsBuy = false;
  @Input() title = 'Информация для заказа';
  @Output() close = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
