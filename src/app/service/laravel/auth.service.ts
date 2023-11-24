import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from 'src/app/interface/auth';

// API path
const API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(
    private http: HttpClient
  ) { }


  // API: POST /login
  login(login: login):Observable<any>{
    return this.http.post<any>(`${API_URL}login`, login);
  }

  // API: GET /logout
  logout():Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${API_URL}logout`, {headers: headers});
  }

  // API: GET /user-detail
  userDetail():Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${API_URL}user-profile`, {headers: headers});
  }

}
