import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRolModelDto, RolModel, UpdateRolDto } from '../entities/rol.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolServiceService {

  readonly API_URL = 'http://localhost:3000/rol';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<RolModel[]>{
    const url =`${this.API_URL}`;
    return this.httpClient.get<RolModel[]>(url);
  }

  getOne(id:RolModel['id']):Observable<RolModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<RolModel>(url);
  }
  build(rol: CreateRolModelDto): Observable<RolModel>{
    const url= `${this.API_URL}`;
    return this.httpClient.post<RolModel>(url,rol);
  }

  update( id: RolModel['id'],rol:UpdateRolDto):Observable<RolModel>{
    const url= `${this.API_URL}/${id}`;
    return this.httpClient.put<RolModel>(url,rol);
  }

  destroy(id: RolModel['id']):Observable<boolean>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response:{rta:boolean})=>{return response.rta}))
  }
}
