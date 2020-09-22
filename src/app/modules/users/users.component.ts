import { Component, OnInit, ViewChild, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { AuthService } from "../../modules/shared/auth.service";

import { UsersService } from '../shared/services/users.service';
import { iUser } from '../../interfaces/user.interface';
import { RegisterService } from '../shared/services/register.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isShown: boolean = false;
  isShown2: boolean = false;
  allUsers: iUser;
  singleUser: iUser;

  id: any;
  firstname: string;
  email: string;
  password: string;
  role: Array<string>;
  address: string;
  active: boolean;

  getUser: any;

  constructor(
    private _getUsers: UsersService,
    private _addUser: RegisterService,
    private _reg: AuthService,
    private _cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getUsers();
    this._cdRef.detectChanges();
  };

  ngAfterViewInit() {

  };

  doSomething(users) {
    this.allUsers = users
    console.log(users)
  };
  //Admin add user manually with checking and reg ***

  //Check Existing Email

  addUser() {
    this._reg.checkForUser(this.email).subscribe((mail: string) => {

      if (mail.length === 0) {
        this.registerUser();
      }
      else {
        alert('User Exist!');
        this.clearInputs();
      }
    })
  };

  //Register user 

  registerUser(): any {

    this._addUser.registerUser(
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
        console.log('Success added user', val);
        this.getUsers();
        this.clearInputs();
      },
      response => {
        console.log("POST call in error", response);
      });
  };


  //Get all users

  getUsers() {
    this._getUsers.getAllUsers().subscribe((user: iUser) => {
      this.allUsers = user;
      console.log(this.allUsers);
    });
  };

  //Get Single user

  getSingleUser(id) {
    console.log(id)
    this.isShown = false;
    this.isShown2 = true;
  
    this._getUsers.getSingleUser(id).subscribe((user: iUser) => {
      
      this.singleUser = user;
      // this.id, this.firstname, this.email, this.password, this.role, this.active = user[0];

      this.id = user[0].id;
      this.firstname = user[0].name;
      this.email = user[0].email;
      this.password = user[0].password;
      this.role = user[0].role;
      this.active = user[0].active;

    });
  };

  //Edit existing user

  editSingleUser(id: any) {
    let newuser: iUser = {
      id: this.id,
      name: this.firstname,
      password: this.password,
      email: this.email,
      role: this.role,
      active: this.active
    };
    this._getUsers.editUser(id, newuser).subscribe(
      (val) => {
        console.log(`edited `, val);
        this.getUsers();
        this.getSingleUser(this.id);
      },
      response => {
        console.log("PUT call in error", response);
      });
  };

  //Delete existing user

  deleteUser(id: string) {
    this._getUsers.deleteUser(id).subscribe(
      (val) => {
        console.log(`deleted `, val);
        this.getUsers();
        this.getSingleUser(this.allUsers[0].id);
      },
      response => {
        console.log("delete call in error", response);
      });
    console.log(id);
  };


  //Helper func to clear inputs

  clearInputs() {
    this.firstname = '';
    this.email = '';
    this.password = '';
  };

  toggleShow() {
    this.isShown2 = false;
    this.isShown = true;
  };
}
