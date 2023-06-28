import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductsModelDto, ProductsModel, UpdateProductsModelDto } from '../entities/products.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly API_URL = 'http://localhost:3000/products';

  constructor( private httpClient: HttpClient) { }

  getAll():Observable<ProductsModel[]>{
    const url =`${this.API_URL}`;
    return this.httpClient.get<ProductsModel[]>(url);
  }

  getOne(id:ProductsModel['id']):Observable<ProductsModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<ProductsModel>(url);
  }
  build(products: CreateProductsModelDto): Observable<CreateProductsModelDto>{
    const url= `${this.API_URL}`;
    return this.httpClient.post<CreateProductsModelDto>(url,products);
  }

  update( id: ProductsModel['id'],products:UpdateProductsModelDto):Observable<ProductsModel>{
    const url= `${this.API_URL}/${id}`;
    return this.httpClient.patch<ProductsModel>(url,products);
  }

  destroy(id: ProductsModel['id']):Observable<boolean>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response:{rta:boolean})=>{return response.rta}))
  }
 }

