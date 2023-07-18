import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CardBuyComponent} from './card-buy/card-buy.component'
import {CardProductComponent} from './card-product/card-product.component'
import {ChekingBoxComponent} from './cheking-box/cheking-box.component'
import {InformationAboutShopsComponent} from './information-about-shops/information-about-shops.component'
import {PersonalBoxComponent} from './personal-box/personal-box.component'
import {ProductResolver} from './Service/product.resolver'
import {WindowContactComponent} from './window-contact/window-contact.component'

const routes: Routes = [
  {path: 'baseComponent', component: CardProductComponent},
  {path: 'base', component: WindowContactComponent},
  {
    path: 'product/:id',
    component: InformationAboutShopsComponent,
    resolve: {data: ProductResolver},
  },
  {path: 'basket', component: CardBuyComponent},
  {path: 'chekingArea', component: ChekingBoxComponent},
  {path: 'personalBox', component: PersonalBoxComponent},
  {path: 'informationAboutAs', component: WindowContactComponent},
  {path: '**', redirectTo: '', component: CardProductComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
