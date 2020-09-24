import { Component, OnInit } from '@angular/core';
import { iApplicationState } from 'src/app/interfaces/application.interface';
import { Store } from '@ngrx/store';
import { LoadOrdersAction } from '../../store/orders.actions';
import { Observable } from 'rxjs';
import { iOrder, iOrderState } from 'src/app/interfaces/order.interface';
import { LoadProductsAction } from 'src/app/store/actions/products.actions';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orders$:Observable<iOrder[]>;
  products$:Observable<Product[]>;

  allOrders:iOrder[] = [];

  constructor(
    private store:Store<iApplicationState>
  ) { }

  ngOnInit() {

    this.store.dispatch(new LoadOrdersAction());
    this.store.dispatch(new LoadProductsAction())

    this.orders$ = this.store.select(store => store.orders.list);
    this.products$ = this.store.select(store => store.products.list);

    this.store.select(store => store.orders.list).subscribe((orders) => this.allOrders = orders).unsubscribe();
    
    this.orders$.subscribe((data) => {
      //callSOmeOtherMethod(data);
    })
  }

}
