import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MajorScreenComponent } from './major-screen/major-screen.component';
import { CardBuyComponent } from './card-buy/card-buy.component';
import { FormsBuyComponent } from './forms-buy/forms-buy.component';
import { WindowContactComponent } from './window-contact/window-contact.component';
import { CardProductComponent } from './card-product/card-product.component';
import { InformationAboutShopsComponent } from './information-about-shops/information-about-shops.component';
import { FilterShopsPipe } from './pipes/filter-shops.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MajorScreenComponent,
    CardBuyComponent,
    WindowContactComponent,
    FormsBuyComponent,
    CardProductComponent,
    InformationAboutShopsComponent,
    FilterShopsPipe,
  ],
  entryComponents: [CardBuyComponent, FormsBuyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule, 
    RouterModule.forRoot([
    { path: '', component: CardProductComponent },
    { path: 'products/:productId', component: InformationAboutShopsComponent },
    { path: 'card-buy', component: CardBuyComponent}
  ])],
  bootstrap: [AppComponent],
})
export class AppModule {}
