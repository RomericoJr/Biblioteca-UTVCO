import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrerService {
  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';

  constructor(
    private http: HttpClient
  ) { }

  getCarrer(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.API_URL}carrer`, {headers});
  }

  getCarrerById(id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.API_URL}carrer/${id}`,  {headers});
  }

  postCarrer(carrer:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.API_URL}addCarrer`, carrer, {headers});
  }

  updateCarrer(carrer:any, id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.API_URL}updateCarrer/${id}`, carrer, {headers});
  }

  deleteCarrer(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.API_URL}deleteCarrer/${id}`, {headers});
  }
}
