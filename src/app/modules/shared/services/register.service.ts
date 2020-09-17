import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { iUser } from '../../../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http: HttpClient
  ) { }

  registerUser(user: iUser) {
    return this._http.post(`${environment.baseUrl}users`,
      user
    )
  }
}
