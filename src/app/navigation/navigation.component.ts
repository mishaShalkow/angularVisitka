import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  imgLogo = 'https://www.prosvet-auto.ru/';
  urlInterprace = 'https://svet-vitebsk.by/';
  urlAvitoPeopleSay =
    'https://www.avito.ru/user/a60b823205611d6811434c71385044aa/profile?src=search_seller_info#open-reviews-list';
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {}, 3000);
  }
}
