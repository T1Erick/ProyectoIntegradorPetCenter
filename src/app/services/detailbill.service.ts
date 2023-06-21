import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateDetailBillModelDto, DetailBillModel, UpdateDetailBillModelDto } from '../entities/detailbill.model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailbillService {

  readonly API_URL = 'http://localhost:3000/detailbill';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable < DetailBillModel[] > {
    const url = `${this.API_URL}`;
    return this.httpClient.get<DetailBillModel[]>(url);
  }

  getOne(id: DetailBillModel['id']): Observable < DetailBillModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<DetailBillModel>(url);
  }
  build(detailbill: CreateDetailBillModelDto): Observable < DetailBillModel > {
    const url = `${this.API_URL}`;
    return this.httpClient.post<DetailBillModel>(url, detailbill);
  }

  update(id: DetailBillModel['id'], detailbill: UpdateDetailBillModelDto): Observable < DetailBillModel > {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<DetailBillModel>(url, detailbill);
  }

  destroy(id: DetailBillModel['id']): Observable < boolean > {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta }))
  }
}
