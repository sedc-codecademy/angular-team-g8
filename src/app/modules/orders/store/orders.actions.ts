import { Action } from '@ngrx/store';
import { iOrder } from 'src/app/interfaces/order.interface';

export enum eOrdersActions
{
	LOAD_ORDERS = '[Orders] Load orders',
	LOAD_ORDERS_SUCCESS = '[Orders] Load orders success',
	LOAD_ORDERS_ERROR = '[Orders] Load orders failure'
}

export class LoadOrdersAction implements Action
{
	readonly type = eOrdersActions.LOAD_ORDERS;
}

export class LoadOrdersSuccessAction implements Action
{
	readonly type = eOrdersActions.LOAD_ORDERS_SUCCESS;

	constructor(public payload:iOrder[]){}
}

export class LoadOrdersErrorAction implements Action
{
	readonly type = eOrdersActions.LOAD_ORDERS_ERROR;

	constructor(public payload:any){}
}

export type OrdersActions = LoadOrdersAction | LoadOrdersSuccessAction | LoadOrdersErrorAction;