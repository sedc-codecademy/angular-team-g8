export interface iUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string[];
  active: boolean;
}


export interface iUsersState
{
  list: iUser[],
  error: any
}