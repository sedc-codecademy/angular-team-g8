import { Component, OnInit } from '@angular/core';
import {
  AdminRoutes,
  UserRoutes,
} from '../../../../classes/dashbard-navigation.routes';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  adminDashboard = new AdminRoutes();
  userDashboard = new UserRoutes();
  routes: Array<any>;

  constructor(private _auth: AuthService) {}

  ngOnInit() {
    //this.routes = this.dashboardRouteClass.routes();
    this._auth
      .checkForUser(localStorage.getItem('loggedUser'))
      .subscribe((user) => {
        if (user[0].role.includes('admin')) {
          this.routes = this.adminDashboard.routes();
        } else {
          this.routes = this.userDashboard.routes();
        }
      });
  }
}
