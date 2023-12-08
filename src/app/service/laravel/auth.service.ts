import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { login } from 'src/app/interface/auth';
import { ToolsService } from '../tools.service';

// API path
const API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(
    private http: HttpClient,
    private toolS: ToolsService
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

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state);
  }

  status() {
    const localData: any = localStorage.getItem('token');
    if (!localData) {
      this.isLoggedIn.next(false);
      // console.log('no hay token');
    } else {
      const expirationDate = this.toolS.getTokenExpiration();
      const URL = new Date(expirationDate ? expirationDate : '');
      const currentDate = new Date();
      if (URL < currentDate) {
        this.isLoggedIn.next(false);
        // console.log('token expirado');
      } else {
        this.isLoggedIn.next(true);
        // console.log('token valido');
      }
    }
    return this.isLoggedIn.asObservable();
  }
}
