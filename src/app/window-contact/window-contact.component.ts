import {Component, OnInit, EventEmitter, Output} from '@angular/core'

@Component({
  selector: 'app-window-contact',
  templateUrl: './window-contact.component.html',
  styleUrls: ['./window-contact.component.scss'],
})
export class WindowContactComponent implements OnInit {
  contactInfo = 'Контактная информация'
  informationForUsers =
    'Мы находимся по адресу: город Москва, улица Иркутская 17с8. График работы: с 9.00-18.00. Всю необходимую информацию можете узнать по телефону: +7 916 337 76 71 - Александр. Наши соц сети:'
  Inst = 'Instagram'
  YouToub = 'YouTube'
  Vkontakte = 'Vkontakte'
  @Output() close = new EventEmitter<void>()
  constructor() {}

  ngOnInit(): void {}
}
