import { iOrderState } from './order.interface';
import { iProductState } from './product.interface';
import { iUsersState } from './user.interface';

export interface iApplicationState
{
	readonly users:iUsersState,
	readonly products: iProductState,
	readonly orders: iOrderState
}