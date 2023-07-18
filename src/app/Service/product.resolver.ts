import {Injectable} from '@angular/core'
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import {catchError, EMPTY, Observable, of} from 'rxjs'
import {IProduct} from '../models/cardProduct'
import {CartServiceService} from './cart-service.service'

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(
    private _cartService: CartServiceService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct> {
    return this._cartService.getProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['base'])
        return EMPTY
      })
    )
  }
}
