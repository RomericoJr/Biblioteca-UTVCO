import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenereService {
  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';

  constructor(
    private http: HttpClient
  ) { }

  getGenere(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.API_URL}genere`, {headers});
  }

  getGenereById(id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.API_URL}genere/${id}`,  {headers});
  }

  postGenere(genere:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.API_URL}addGenere`, genere, {headers});
  }

  updateGenere(genere:any, id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.API_URL}editGenere/${id}`, genere, {headers});
  }

  deleteGenere(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.API_URL}delGenere/${id}`, {headers});
  }
}
