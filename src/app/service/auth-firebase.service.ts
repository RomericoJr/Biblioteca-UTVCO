import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    //private authser: AngularFireAuth,
      private auth: Auth,
      public afAuth: AngularFireAuth
  ) { }


  //async registro(email:string, password:string){
    //try{
      //return await this.auth.createUserWithEmailAndPassword(email, password);
      //console.log('Usuario creado con exito');
    //} catch(error){
      //return error;
    //}
  //}

  register({email, password}: any ){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //loginWithGoogle(){
    //return signInWithPopup(this.auth, new GoogleAuthProvider);
  //}

  logout(){
    return signOut(this.auth);
  }

  async resetPassword(email:string):Promise <void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){
      console.log(error);
    }
  }
}
