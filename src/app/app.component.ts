import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersHelperClass } from './classes/users.class';
import { iUser, iUsersState } from './interfaces/user.interface';
import { UsersService } from './modules/shared/services/users.service';
import { TestService } from './services/test.service';
import { Store } from '@ngrx/store';
import { iApplicationState } from './interfaces/application.interface';
import { NgForm } from '@angular/forms';
import { v4 as uuid} from 'uuid';
import { AddUserAction, DeleteUserAction, LoadUsersAction } from './store/actions/users.actions';
import { Product } from './interfaces/product.interface';
import { AddProductAction, LoadProductsAction, LoadProductsSuccessAction } from './store/actions/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //user:any = UsersHelperClass.getEmptyUser();

  users$:Observable<iUser[]>;

  productsLoad$:Observable<boolean>;
  products$:Observable<Product[]>;
  productError$:Observable<any>;

  constructor(
    private _testS:TestService,
    private store:Store<iApplicationState>
  ){}

  ngOnInit()
  {
    //this._testS.getUsers().subscribe((data) => {console.log(data)})
    //console.log(this._testS.postUser(this.user))

   
    this.store.dispatch(new LoadUsersAction([]));
    this.store.dispatch(new LoadProductsAction());

    this.productsLoad$ = this.store.select(store => store.products.loading);
    this.productError$ = this.store.select(store => store.products.error);
    this.products$ = this.store.select(store => store.products.list);

    //selector for reading from Store
    this.users$ = this.store.select(store => store.users.list);
  }

  addNewUser(form:NgForm)
  {
    console.log(form.valid, form.value)

    if(form.valid)
    {
      let user:iUser = form.value;
      user.id = uuid();
      user.active = true;
      user.role = ['user'];

      this.store.dispatch(new AddUserAction(user));
    }
  }

  manuallyAddProduct()
  {
    this.store.dispatch(new AddProductAction({id: uuid(), name: 'Custom product', description: 'Blablabla', price: 10, qty: 1, imageUrl: '', shippingId: 1}))
  }

  deleteUser(id:string)
  {
    this.store.dispatch(new DeleteUserAction(id));
  }
}
