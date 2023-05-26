import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductpetService {
  readonly API_URL ='http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getAll():Observable<ProductPetModel[]>
  {
    //obtenemos un aray
    const url=`${this.API_URL}`;
    return this.httpClient.get<ProductPetModel[]>(url);
  }

  getOne(id:ProductPetModel["id"]):Observable<ProductPetModel>
  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProductPetModel>(url);
  }


  store(product:CreateProductPetDto):Observable<ProductPetModel>
  {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProductPetModel>(url, product);
  }

  update(id:ProductPetModel["id"], product:UpdateProductPetDto):Observable<ProductPetModel>
  {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put<ProductPetModel>(url, product);
  }

  destroy(id:ProductPetModel["id"]):Observable<any>
  {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.delete<any>(url).pipe(map((response:{rta:boolean})=>{ return response.rta}));
  }



}
