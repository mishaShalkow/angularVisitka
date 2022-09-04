import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MajorScreenComponent } from './major-screen/major-screen.component';
import { CardBuyComponent } from './card-buy/card-buy.component';
import { FormsBuyComponent } from './forms-buy/forms-buy.component';
import { WindowContactComponent } from './window-contact/window-contact.component';
import { CardProductComponent } from './card-product/card-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MajorScreenComponent,
    CardBuyComponent,
    WindowContactComponent,
    FormsBuyComponent,
    CardProductComponent,
  ],
  entryComponents: [CardBuyComponent, FormsBuyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
