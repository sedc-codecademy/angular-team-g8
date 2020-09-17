import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  loginWithEmail(email: string, password: string) {
    return this._http.get(
      `${baseURL}users?email=${email}&password=${password}`
    );
  }

  isLoggedIn(): boolean {
    const logged = localStorage.getItem('loggedUser');
    if (logged) {
      return true;
    } else {
      return false;
    }
  }
}
