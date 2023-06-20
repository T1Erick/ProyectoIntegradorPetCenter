import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserModelDto, UpdateUserModelDto, UsersModel } from '../entities/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly API_URL ='http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<UsersModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<UsersModel[]>(url);
  }

  getUsersById(id: number): Observable<UsersModel[]>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<UsersModel[]>(url);
  }

  createUsers(users:CreateUserModelDto): Observable<CreateUserModelDto>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<CreateUserModelDto>(url,users);

  }
  updateUsers(id:UsersModel['id'], product: UpdateUserModelDto) {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put(url, product);
  }

}
