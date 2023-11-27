import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';


  constructor(
    private http: HttpClient
  ) { }

  getBook():Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}books`, {headers: headers});
  }

  getBookById(id: string):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}book/${id}`, {headers: headers});
  }

  addBook(book: any):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.API_URL}addBook`, book, {headers: headers});
  }

  updateBook(id:number, book: any):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.API_URL}editBook/${id}`, book, {headers: headers});
  }

  deleteBook(id: string):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.API_URL}delBook/${id}`, {headers: headers});
  }

  getBookByCategory(id: string):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}book/category/${id}`, {headers: headers});
  }




}
