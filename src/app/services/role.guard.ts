import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../modules/shared/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private _auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      this._auth
        .checkForUser(localStorage.getItem('loggedUser'))
        .subscribe((user) => {
          const route = next.routeConfig.path;
          if (
            route === 'invoices' ||
            route === 'products' ||
            route === 'users' ||
            route === 'shipping'
          ) {
            if (user[0].role.includes('admin')) {
              resolve(true);
            } else {
              resolve(false);
            }
          } else {
            resolve(true);
          }
        });
    });
  }
}
