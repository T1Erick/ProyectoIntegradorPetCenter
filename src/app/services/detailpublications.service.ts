import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateDetailPublicationsModelDto, UpdateDetailPublicationsModelDto, DetailPublicationsModel } from '../entities/detailpublications.model';

@Injectable({
  providedIn: 'root'
})
export class DetailPublicationsService {

  readonly API_URL = 'http://localhost:3000/detailpublications';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<DetailPublicationsModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<DetailPublicationsModel[]>(url);
  }

  getOne(id: DetailPublicationsModel['id']): Observable<DetailPublicationsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<DetailPublicationsModel>(url);
  }

  create(detailPublication: CreateDetailPublicationsModelDto): Observable<DetailPublicationsModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<DetailPublicationsModel>(url, detailPublication);
  }

  update(id: DetailPublicationsModel['id'], detailPublication: UpdateDetailPublicationsModelDto): Observable<DetailPublicationsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<DetailPublicationsModel>(url, detailPublication);
  }

  delete(id: DetailPublicationsModel['id']): Observable<boolean> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => response.rta));
  }
}
