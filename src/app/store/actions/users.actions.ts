import { Action } from '@ngrx/store';
import { iUser } from 'src/app/interfaces/user.interface';

export enum eUserAction
{
	LOAD_USERS = '[Users] Load users',
	ADD_USER = '[User] Add user',
	DELETE_USER = '[User] Delete user'
}

export class LoadUsersAction implements Action
{
	readonly type = eUserAction.LOAD_USERS;

	constructor(public payload:iUser[]){}
}

export class AddUserAction implements Action
{
	readonly type = eUserAction.ADD_USER;

	constructor(public payload:iUser){}
}

export class DeleteUserAction implements Action
{
	readonly type = eUserAction.DELETE_USER;

	constructor(public payload:string){}
}

export type UsersActions = LoadUsersAction | AddUserAction | DeleteUserAction;
