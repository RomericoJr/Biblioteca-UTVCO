import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetAsaideService {

  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';


  constructor(
    private http: HttpClient
  ) { }

  getSetAsaide(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.API_URL}apartados`, {headers});
  }

  getSetAsaideByIdStudent(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.API_URL}apartadoByStudent/${id}`, {headers});
  }

  postSetAsaide(setAsaide:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.API_URL}addApartado`, setAsaide, {headers});
  }

}
