import { iUsersState } from 'src/app/interfaces/user.interface';
import { eUserAction, UsersActions } from '../actions/users.actions';

export function UsersReducer(state: iUsersState, action: UsersActions)
{
	switch(action.type)
	{
		case eUserAction.LOAD_USERS : return {...state, list: action.payload};
		case eUserAction.ADD_USER: return {...state, list: [...state.list, action.payload]};
		case eUserAction.DELETE_USER: return {...state, list: [...state.list.filter(user => user.id != action.payload)]};
		default: return {...state};
	}
}