import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductsHttp } from '../http/products.http';
import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class ProductsResolver implements Resolve<Observable<any>> {
//   constructor(public productsHttp: ProductsHttp) {}

//   resolve():
//     | Observable<any>
//     | Observable<Observable<any>>
//     | Promise<Observable<any>> {
//     return this.productsHttp.getProducts();
//   }
// }

export const ProductsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  productsHttp: ProductsHttp = inject(ProductsHttp)
): Observable<any> => {
  return productsHttp.getProducts();
};
