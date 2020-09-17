import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/shared/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: any;
  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this._auth.isLoggedIn.subscribe((data) => {
      this.isLogged = data;
    });
  }

  logoutUser() {
    this._auth.logout();
  }
}
