import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private _http: HttpClient) {}

  getAllInvoices() {
    return this._http.get(`${environment.baseUrl}invoices`);
  }

  getInvoiceById(id: number) {
    return this._http.get(`${environment.baseUrl}invoices?id=${id}`);
  }

  postInvoice(invoice: Invoice) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this._http.post(
      `${environment.baseUrl}invoices`,
      invoice,
      httpOptions
    );
  }

  putInvoice(invoice: Invoice) {}

  deleteInvoice(id: number) {
    return this._http.delete(`${environment.baseUrl}invoices?id=${id}`);
  }
}
