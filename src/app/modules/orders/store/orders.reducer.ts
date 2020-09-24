import { iOrderState } from 'src/app/interfaces/order.interface';
import { eOrdersActions, OrdersActions } from './orders.actions';

export function OrdersReducer(state:iOrderState, action:OrdersActions)
{
	switch(action.type)
	{
		case eOrdersActions.LOAD_ORDERS : return {...state, error: undefined};
		case eOrdersActions.LOAD_ORDERS_SUCCESS: return {...state, error:undefined, list: action.payload};
		case eOrdersActions.LOAD_ORDERS_ERROR: return {...state, error: action.payload};
		default: return state;
	}
}