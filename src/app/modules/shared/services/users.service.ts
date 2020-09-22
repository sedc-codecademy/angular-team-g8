import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { iUser } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getAllUsers(){
    return this._http.get(`${environment.baseUrl}users`)
  }

  getSingleUser(id){
    return this._http.get(`${environment.baseUrl}users?id=${id}`)
  }

  editUser(id:string, user:iUser){
    return this._http.put(`${environment.baseUrl}users/${id}`,
    user
    )
  }

  deleteUser(id:string){
    return this._http.delete(`${environment.baseUrl}users/${id}`)
  }
}
