import { CategoryModel } from "./category.model";

export interface ProductsModel{
  id:string;
  titulo: string;
  description: string;
  precio: number;
  foto: string;
  fecha_vencimiento: Date;
  category: CategoryModel;
}

export interface CreateProductsModelDto extends Omit<ProductsModel,'id' | 'category'>{
  categoryId:number
}

export interface UpdateProductsModelDto extends Partial<ProductsModel>{
  id:string;
  categoryId?:number
}