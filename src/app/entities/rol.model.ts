
export interface RolModel{
  id:string;
  namerol:string
}

export interface CreateRolModelDto extends Omit<RolModel,'id'>{

}

export interface UpdateRolDto extends Partial<RolModel>{
  id: string;
}
