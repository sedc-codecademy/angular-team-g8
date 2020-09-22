import { iUser } from '../interfaces/user.interface';
import { v4 as uuid } from 'uuid';

export class UsersHelperClass
{
	static getEmptyUser()
	{
		return {
			userId: undefined,
            fullname: undefined,
            isActive: undefined,
            role: undefined,
			email: undefined
		}
	}

	static convertToAPIUser(user:any):iUser
	{
		return {
			id: uuid(),
			name: user.fullname,
			email: user.email,
			role: ['user'],
			active: true,
			password: user.password
		}
	}
}