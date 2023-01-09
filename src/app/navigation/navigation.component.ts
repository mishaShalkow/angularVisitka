import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  windowContact = false
  CartShops = false
  modalView = false
  urlInterprace = 'https://svet-vitebsk.by/'

  urlAvitoPeopleSay =
    'https://www.avito.ru/user/2b39a169840e3546a459a54665db0018/profile?src=search_seller_info#open-reviews-list'
  constructor() {}

  ngOnInit() {}
}
