import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { RxService } from 'src/app/services/rx.service';
import { AddProductAction, AddProductErrorActions, AddProductSuccessAction, eProductsAction, LoadProductsAction, LoadProductsErrorAction, LoadProductsSuccessAction } from '../actions/products.actions';

@Injectable()
export class ProductsEffect
{
	@Effect() loadProducts$ = this.actions$
	.pipe(
		ofType<LoadProductsAction>(eProductsAction.LOAD_PRODUCTS),
		mergeMap(
			() => this.prodService.getProducts()
			.pipe(
				map(data => new LoadProductsSuccessAction(data)),
				catchError(error => of(new LoadProductsErrorAction(error)))
			)
		)
	)
	
	@Effect() addProduct$ = this.actions$
	.pipe(
		ofType<AddProductAction>(eProductsAction.ADD_PRODUCT),
		mergeMap(
			(data) => this.prodService.addProduct(data.payload)
			.pipe(
				map(data => new AddProductSuccessAction(data)),
				catchError(error => of(new AddProductErrorActions(error)))
			)
		)
	)

	constructor(
		private actions$:Actions,
		private prodService:RxService
	){}
}