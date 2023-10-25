import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductsHttp {
  url = 'https://fakestoreapi.com/products?limit=6';
  constructor(public http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
}
