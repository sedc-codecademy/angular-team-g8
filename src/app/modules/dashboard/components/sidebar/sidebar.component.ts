import { Component, OnInit } from '@angular/core';
import { DashboardRoutes } from '../../../../classes/dashbard-navigation.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  dashboardRouteClass = new DashboardRoutes;
  routes:Array<any>; 

  constructor() {}

  ngOnInit() {
    this.routes = this.dashboardRouteClass.routes()
  }
}
