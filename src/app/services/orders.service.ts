import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iOrder } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private _http:HttpClient
  ) { }

  getOrders()
  {
    return this._http.get<iOrder[]>(`${environment.baseUrl}orders`);
  }
}
