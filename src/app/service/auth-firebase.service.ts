import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    private auth: AngularFireAuth
  ) { }


  async registro(email:string, password:string){
    try{
      return await this.auth.createUserWithEmailAndPassword(email, password);
      console.log('Usuario creado con exito');
    } catch(error){
      return error;
    }
  }
}
