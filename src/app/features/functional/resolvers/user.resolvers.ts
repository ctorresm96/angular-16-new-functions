import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductsHttp } from '../http/products.http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
  constructor(public productsHttp: ProductsHttp) {}

  resolve():
    | Observable<any>
    | Observable<Observable<any>>
    | Promise<Observable<any>> {
    return this.productsHttp.getProducts();
  }
}

// export const UserResolver: ResolveFn<any> = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot,
//   usersHttp: UsersHttp = inject(UsersHttp)
// ): Observable<any> => {
//   return usersHttp.getUsers();
// };
// this.users.getOne(route.paramMap.get('id')).pipe(
//   filter<Post>((post: Post) => !!post),
//   take(1)
// );
