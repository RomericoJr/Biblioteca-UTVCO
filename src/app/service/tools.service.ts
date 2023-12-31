import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  api:string = 'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';

  constructor(
    private http: HttpClient
  ) { }


  setToken(data:string){
    //JSON.parse(localStorage.getItem('favoritos')  || '[]') || [];
    localStorage.setItem('token', data || '[]' );
  }

  getToken(){
    return localStorage.getItem('token' || '[]');
  }

  removeToken(data:string){
    localStorage.removeItem('token');
  }

  validarToken(token: string):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.api}validarToken`, {token});
  }

  getIdUser(){
    return localStorage.getItem('id' || '[]');
  }

  setIdUser(id:number){

    localStorage.setItem('id', id.toString());
  }

  getIdStudent(){
    return localStorage.getItem('id_student' || '[]');
  }

  setIdStudent(id:number){
    localStorage.setItem('id_student', id.toString());
  }

  setRol( rol:string = 'user'){
    localStorage.setItem('rol', rol);
  }

  getRol(){
    return localStorage.getItem('rol' || '[]');
  }

  setNameUser(name:string){
    localStorage.setItem('name', name);
  }
  getNameUser(){
    return localStorage.getItem('name' || '[]');
  }

  setTokenExpiration(expiration:string){
    localStorage.setItem('expiration', expiration);
  }

  getTokenExpiration(){
    return localStorage.getItem('expiration' || '[]');
  }

}
