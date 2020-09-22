import { Component } from '@angular/core';
import { UsersHelperClass } from './classes/users.class';
import { UsersService } from './modules/shared/services/users.service';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user:any = UsersHelperClass.getEmptyUser();

  constructor(
    private _testS:TestService
  ){}

  ngOnInit()
  {
    //this._testS.getUsers().subscribe((data) => {console.log(data)})
    //console.log(this._testS.postUser(this.user))
  }
}
