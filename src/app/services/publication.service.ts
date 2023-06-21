import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreatePublicationModelDto, UpdatePublicationDto, PublicationModel } from '../entities/publication.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  readonly API_URL = 'http://localhost:3000/publication';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PublicationModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<PublicationModel[]>(url);
  }

  getOne(id: PublicationModel['id']): Observable<PublicationModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<PublicationModel>(url);
  }

  create(publication: CreatePublicationModelDto): Observable<PublicationModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<PublicationModel>(url, publication);
  }

  update(id: PublicationModel['id'], publication: UpdatePublicationDto): Observable<PublicationModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<PublicationModel>(url, publication);
  }

  delete(id: PublicationModel['id']): Observable<boolean> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => response.rta));
  }
}
