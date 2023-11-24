import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';

  constructor(
    private http: HttpClient
  ) { }

  getSubCategory():any{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}subcategoria`, {headers: headers});
  }

  getSubCategoryById(id: number):any{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}subcategoria/${id}`, {headers: headers});
  }

  getSubCategoryByCategory(id: number):any{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}subcategoriaByCategoria/${id}`, {headers: headers});
  }

  postSubCategory(subcategory: any):any{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.API_URL}addSubcategoria`, subcategory, {headers: headers});
  }

  putSubCategoria(subcategory: any, id: number):any{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.API_URL}updateSubcategoria/${id}`, subcategory, {headers: headers});
  }

  deleteSubCategoria(id: string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.API_URL}deleteSubategoria/${id}`, {headers: headers});
  }

}
