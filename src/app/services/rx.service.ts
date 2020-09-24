import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RxService {

  constructor(
    private _http:HttpClient
  ) { }

  getProducts()
  {
    return this._http.get<Product[]>(`${environment.baseUrl}products`).pipe(delay(2000));
  }

  addProduct(product:Product)
  {
    return this._http.post<Product>(`${environment.baseUrl}products`, product).pipe(delay(2000));
  }
}
