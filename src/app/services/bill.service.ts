import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateBillModelDto, BillModel, UpdateBillDto } from '../entities/bill.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  readonly API_URL = 'http://localhost:3000/bill';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable < BillModel[] > {
    const url = `${this.API_URL}`;
    return this.httpClient.get<BillModel[]>(url);
  }

  getOne(id: BillModel['id']): Observable < BillModel > {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<BillModel>(url);
  }
  build(bill: CreateBillModelDto): Observable < BillModel > {
    const url = `${this.API_URL}`;
    return this.httpClient.post<BillModel>(url, bill);
  }

  update(id: BillModel['id'], bill: UpdateBillDto): Observable < BillModel > {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<BillModel>(url, bill);
  }

  destroy(id: BillModel['id']): Observable < boolean > {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta }))
  }
}
