import {Pipe, PipeTransform} from '@angular/core'
import {IProduct} from '../models/cardProduct'
import {filter} from 'rxjs'

@Pipe({
  name: 'filterShops',
})
export class FilterShopsPipe implements PipeTransform {
  transform(product: IProduct[], search: string): IProduct[] {
    return product.filter((p) =>
      p.titleCard.toLowerCase().includes(search.toLowerCase())
    )
  }
}
