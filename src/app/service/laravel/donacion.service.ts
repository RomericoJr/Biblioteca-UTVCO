import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';

  constructor(
    private http: HttpClient
  ) { }

  postDonacion(data: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.API_URL}newDonacion`, data, {headers: headers});
  }

  getDonacion() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}donaciones`, {headers: headers});
  }

  getDonacionById(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}donacion/${id}`, {headers: headers});
  }

  putDonacion(id: number,data: any):Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.API_URL}editDonacion/${id}`, data, {headers: headers});
  }

  deleteDonacion(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.API_URL}delDonacion/${id}`, {headers: headers});
  }
}
