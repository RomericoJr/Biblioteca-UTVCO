import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL=  'http://localhost:8000/api/Back%%Biblioteca_UTVCO/';

  constructor(
    private http: HttpClient
  ) { }

  getStudent(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}getStudent`, {headers: headers});
  }

  getStudentByMatricula(matricula: string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}getStudentByMatricula/${matricula}`, {headers: headers});
  }

  getStudentById(id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}getStudentById/${id}`, {headers: headers});
  }

  getStudentByEmail(email: string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.API_URL}getStudentByEmail/${email}`, {headers: headers});
  }

  addStudent(student: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.API_URL}registerStudent`, student, {headers: headers});
  }

  updateStudent(email:string, student: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.API_URL}updateStudent/${email}`, student, {headers: headers});
  }

  disableStudent(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.API_URL}disableStudent/${id}`, {headers: headers});
  }

}
