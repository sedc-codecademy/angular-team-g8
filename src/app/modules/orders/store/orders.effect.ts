import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OrdersService } from 'src/app/services/orders.service';
import { eOrdersActions, LoadOrdersAction, LoadOrdersErrorAction, LoadOrdersSuccessAction } from './orders.actions';
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable()
export class OrdersEffects
{

	@Effect() loadOrders$ = this.actions$
	.pipe(
		ofType<LoadOrdersAction>(eOrdersActions.LOAD_ORDERS),
		mergeMap(
			() => this._os.getOrders()
			.pipe(
				map(data => new LoadOrdersSuccessAction(data)),
				catchError(error => of( new LoadOrdersErrorAction(error)))
			)
		)
	)

	constructor(
		private actions$:Actions,
		private _os:OrdersService
	){}
}