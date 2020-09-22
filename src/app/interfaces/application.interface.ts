import { iProductState } from './product.interface';
import { iUsersState } from './user.interface';

export interface iApplicationState
{
	readonly users:iUsersState,
	readonly products: iProductState
}