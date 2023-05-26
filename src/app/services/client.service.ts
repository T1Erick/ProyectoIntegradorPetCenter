import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly API_URL ='/api/patients';

  constructor(private httpClient: HttpClient) { }

  getAllPacientes(): Observable<ClientModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ClientModel[]>(url);
  }

  getPacientesById(id: number): Observable<ClientModel[]>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ClientModel[]>(url);
  }

  createPatient(paciente:CreateClientDto): Observable<CreateClientDto>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<CreateClientDto>(url,paciente);

  }
  updatePatient(id:ClientModel['id_paciente'], product: UpdateClientDto) {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put(url, product);
  }

}
