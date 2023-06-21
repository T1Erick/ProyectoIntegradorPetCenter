
export interface SectionModel{
  id:string;
  namesection: string;
}

export interface CreateSectionModelDto extends Omit<SectionModel,'id' >{
  
}

export interface UpdateSectionDto extends Partial<SectionModel>{
  id:string;
} 
