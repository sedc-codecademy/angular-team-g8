import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}
  public isLoggedIn = new BehaviorSubject<boolean>(false);

  loginWithEmail(email: string, password: string) {
    const user = this._http.get(
      `${baseURL}users?email=${email}&password=${password}`
    );
    if (user) {
      this.isLoggedIn.next(true);
      return user;
    }
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.isLoggedIn.next(false);
    this._router.navigate(['/']);
  }
}
