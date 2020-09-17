import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { iUser } from '../../interfaces/user.interface';
import { v4 as uuid } from 'uuid';
import { AuthService } from "../../modules/shared/auth.service";
import { RegisterService } from '../../modules/shared/services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  id: string;
  firstname: string;
  email: string;
  password: string;
  lastname: string;
  address: string;

  constructor(
    private _reg: AuthService,
    private _regUser: RegisterService,
    private _router: Router) { };

  ngOnInit() {
  }

  reg() {

    this._reg.checkForUser(this.email).subscribe((mail: string) => {

      if (mail.length === 0) {
        this.registerUser()
      }
      else {
        alert('User Exist!')
        this.firstname = ''
        this.email = '';
        this.password = '';
        this.lastname = '';
        this.address = '';
      }
    })
  };


  registerUser(): any {

    this._regUser.registerUser(
      {
        id: uuid(),
        name: this.firstname,
        email: this.email,
        password: this.password,
        role: ['user'],
        active: true
      }
    ).subscribe(
      (val) => {
        this._router.navigate(['dashboard'])
      },
      response => {
        console.log("POST call in error", response);
      });
  };

}
