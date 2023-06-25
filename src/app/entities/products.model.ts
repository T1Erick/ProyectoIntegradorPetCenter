import { CategoryModel } from "./category.model";

export interface ProductsModel{
  id:string;
  titulo: string;
  descripcion: string;
  precio: number;
  foto: string;
  fechaVencimiento: string;
  category: CategoryModel;
}

export interface CreateProductsModelDto extends Omit<ProductsModel,'id' | 'category'>{
  category:string
}

export interface UpdateProductsModelDto extends Partial<ProductsModel>{
  id:string;
  categoryId?:string
}
