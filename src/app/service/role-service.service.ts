import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(
    private firestore: Firestore
    ) {}

  getRoles() {
    const roles = collection(this.firestore, 'roles');
    return collectionData(roles);
  }

}
