import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interface/category_subcategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';
  constructor(
    private http: HttpClient
  ) { }

  postCategory(category: Category):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.API_URL}addCategoria`, category, {headers: headers});
  }

  getCategory():Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}categoria`, {headers: headers});
  }

  getCategoryById(id: number):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}categoria/${id}`, {headers: headers});
  }

  putCategory(category: string, id: number):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.API_URL}updateCategoria/${id}`, category, {headers: headers});
  }

  deleteCategory(id: number):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.API_URL}deleteCategoria/${id}`, {headers: headers});
  }


}
