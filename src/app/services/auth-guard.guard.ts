import { Injectable } from '@angular/core';
import {
  CanActivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
 
  constructor(private auth: AuthService) {}
  canActivate()
  {
    return this.auth.isLoggedIn.getValue();
  }
}
