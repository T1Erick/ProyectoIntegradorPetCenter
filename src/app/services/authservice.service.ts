import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsersModel } from '../entities/user.model';
import { UserAuthModel } from '../entities/auth-login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly API_URL: string = "http://localhost:3000/auth/";

  constructor(private  httpclient:HttpClient) { }

  login(dto: UserAuthModel):Observable<any>{
    return this.httpclient.post<any>(this.API_URL + 'login', dto);
  }

  register(dto: UsersModel):Observable<any>{
    return this.httpclient.post<any>(this.API_URL + 'register', dto);
  }
}
