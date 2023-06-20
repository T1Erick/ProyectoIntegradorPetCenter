import { RolModel } from "./rol.model";

export interface UsersModel{
  id:string;
  name: string;
  lastname: string;
  photo: string;
  email: string;
  password: string;
  rol: RolModel;
}

export interface CreateUserModelDto extends Omit<UsersModel,'id' | 'rol'>{
  rolId:number
}

export interface UpdateUserModelDto extends Partial<UsersModel>{
  id:string;
  rolId?:number
}
