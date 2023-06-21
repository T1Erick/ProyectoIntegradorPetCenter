import { SectionModel } from "./section.model";

export interface CategoryModel{
  id:string;
  namecategory: string;
  description: string;
  section: SectionModel;
}

export interface CreateCategoryModelDto extends Omit<CategoryModel,'id' | 'section'>{
  sectionId:number
}

export interface UpdateCategoryModelDto extends Partial<CategoryModel>{
  id:string;
  sectionId?:number
}