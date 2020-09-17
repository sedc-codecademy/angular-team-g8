import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../modules/shared/auth.service';
import { iUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  userLogin() {
    const { email, password } = this.profileForm.value;
    this._auth.loginWithEmail(email, password).subscribe((user: iUser) => {
      if (user) {
        this._auth.isLoggedIn.next(true);
        localStorage.setItem('loggedUser', user[0].email);
        this._router.navigate(['dashboard']);
      }
    });
  }

  ngOnInit() {}
}
