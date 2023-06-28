import { SectionModel } from "./section.model";

export interface CategoryModel{
  id:string;
  namecategory: string;
  description: string;
  section: SectionModel;
}

export interface CreateCategoryModelDto extends Omit<CategoryModel,'id' | 'section'>{
  section:string
}

export interface UpdateCategoryModelDto extends Omit<CategoryModel, 'section'>{
  id:string;
  section?:string
}
