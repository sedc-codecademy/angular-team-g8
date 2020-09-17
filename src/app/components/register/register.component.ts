import { Component, OnInit } from '@angular/core';
import { iUser } from '../../interfaces/user.interface';
import { v4 as uuid } from 'uuid';
import { AuthService } from "../../modules/shared/auth.service";
import { RegisterService } from '../../modules/shared/services/register.service';

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

  constructor(
    private _reg: AuthService,
    private _regUser: RegisterService) { };

  ngOnInit() {
  }

  reg() {

    this._reg.checkForUser(this.email).subscribe((mail: string) => {

      if (mail.length === 0) {
        this.registerUser()
      }
      else {
        console.log('user exist')
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
    )
  };

}
