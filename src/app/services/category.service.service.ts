import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel, CreateCategoryModelDto, UpdateCategoryModelDto } from '../entities/category.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorServiceyService {

  readonly API_URL = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<CategoryModel[]>{
    const url =`${this.API_URL}`;
    return this.httpClient.get<CategoryModel[]>(url);
  }

  getOne(id:CategoryModel['id']):Observable<CategoryModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<CategoryModel>(url);
  }
  build(category: CreateCategoryModelDto): Observable<CategoryModel>{
    const url= `${this.API_URL}`;
    return this.httpClient.post<CategoryModel>(url,category);
  }

  update( id: CategoryModel['id'],category:UpdateCategoryModelDto):Observable<CategoryModel>{
    const url= `${this.API_URL}/${id}`;
    return this.httpClient.put<CategoryModel>(url,category);
  }

  destroy(id: CategoryModel['id']):Observable<boolean>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response:{rta:boolean})=>{return response.rta}))
  }
}
