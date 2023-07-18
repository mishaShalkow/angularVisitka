import {style} from '@angular/animations'
import {Component, OnInit} from '@angular/core'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import {ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs'
import {ChekingBoxComponent} from '../cheking-box/cheking-box.component'
import {DialogBoxComponent} from '../dialog-box/dialog-box.component'
import {OfferProduct} from '../models/cardProduct'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}
  /*   windowContact = false
  CartShops = false
  modalView = false */
  status = false
  urlInterprace = 'https://svet-vitebsk.by/'

  urlAvitoPeopleSay =
    'https://www.avito.ru/user/2b39a169840e3546a459a54665db0018/profile?src=search_seller_info#open-reviews-list'

  ChekingBox: OfferProduct[]
  ChekingBoxSubscribe: Subscription

  isDisabled() {
    const url = this.route.url
  }

  openDialogCheck() {
    let dialogConfig = new MatDialogConfig()
    dialogConfig.width = '700px'
    dialogConfig.disableClose = true
    const dialogOpen = this.dialog.open(ChekingBoxComponent, dialogConfig)
    dialogOpen.afterClosed().subscribe((data) => {})
  }

  ngOnDestroy() {
    if (this.ChekingBoxSubscribe) this.ChekingBoxSubscribe.unsubscribe()
  }

  ngOnInit() {}
}
