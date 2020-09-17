import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  loginWithEmail(email: string, password: string) {
    return this._http.get(
      `${environment.baseUrl}users?email=${email}&password=${password}`
    );
  }
  
  checkForUser(email: string){
    return this._http.get(
      `${baseURL}users?email=${email}`
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
