import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { iUser } from '../interfaces/user.interface';
import { UsersHelperClass } from '../classes/users.class';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private _http:HttpClient
  ) { }

  getUsers()
  {
    return this._http.get(`${environment.baseUrl}users`).pipe(
      map((data:iUser[]) => {
        return data.map((user:iUser) => {
          return {
            userId: user.id,
            fullname: user.name,
            isActive: user.active,
            role: user.role,
            email: user.email
          }
        })
      })
    )
  }

  postUser(user:any)
  {
    let apiUser:iUser = UsersHelperClass.convertToAPIUser(user);
    console.log(apiUser)
  }
}
