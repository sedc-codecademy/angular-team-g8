import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}
  public isLoggedIn = new BehaviorSubject<boolean>(false);

  loginWithEmail(email: string, password: string) {
    return this._http.get(
      `${environment.baseUrl}users?email=${email}&password=${password}`
    );
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.isLoggedIn.next(false);
    this._router.navigate(['/']);
  }

  checkForUser(email: string) {
    return this._http.get(`${environment.baseUrl}users?email=${email}`);
  }
}
