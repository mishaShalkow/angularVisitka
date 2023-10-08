import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {MatInputModule} from '@angular/material/input'
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {NavigationComponent} from './navigation/navigation.component'
import {CardBuyComponent} from './card-buy/card-buy.component'
import {FormsBuyComponent} from './forms-buy/forms-buy.component'
import {WindowContactComponent} from './window-contact/window-contact.component'
import {CardProductComponent} from './card-product/card-product.component'
import {InformationAboutShopsComponent} from './information-about-shops/information-about-shops.component'
import {FilterShopsPipe} from './pipes/filter-shops.pipe'
import {DialogBoxComponent} from './dialog-box/dialog-box.component'
import {PersonalBoxComponent} from './personal-box/personal-box.component'
import {ChekingBoxComponent} from './cheking-box/cheking-box.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardBuyComponent,
    WindowContactComponent,
    FormsBuyComponent,
    CardProductComponent,
    InformationAboutShopsComponent,
    FilterShopsPipe,
    DialogBoxComponent,
    PersonalBoxComponent,
    ChekingBoxComponent,
  ],
  entryComponents: [CardBuyComponent, FormsBuyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
