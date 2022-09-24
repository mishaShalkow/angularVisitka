import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/cardProduct';

@Pipe({
  name: 'filterShops',
})
export class FilterShopsPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter((p) =>
      p.titleCard.toLowerCase().includes(search.toLowerCase())
    );
  }
}
