import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateSectionModelDto, UpdateSectionDto, SectionModel } from '../entities/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionServiceService {

  readonly API_URL = 'http://localhost:3000/section';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<SectionModel[]>{
    const url =`${this.API_URL}`;
    return this.httpClient.get<SectionModel[]>(url);
  }

  getOne(id:SectionModel['id']):Observable<SectionModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<SectionModel>(url);
  }
  build(section: CreateSectionModelDto): Observable<SectionModel>{
    const url= `${this.API_URL}`;
    return this.httpClient.post<SectionModel>(url,section);
  }

  update( id: SectionModel['id'],section:UpdateSectionDto):Observable<SectionModel>{
    const url= `${this.API_URL}/${id}`;
    return this.httpClient.put<SectionModel>(url,section);
  }

  destroy(id: SectionModel['id']):Observable<boolean>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response:{rta:boolean})=>{return response.rta}))
  }
}
