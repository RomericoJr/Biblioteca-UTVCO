import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadiasFirebaseService {

  constructor(
    private firestore: Firestore
  ) { }

  addEstadiasBook(estadiasBook: any){
    const estBookRef = collection(this.firestore, 'estadiasBook');
    return addDoc(estBookRef, estadiasBook);
  }

  getEstadiasBook(fillter=''){
    const estBookRef = collection(this.firestore, 'estadiasBook');
    let q = query(estBookRef);
    if(fillter){
      q = query(estBookRef, where('id', '==', fillter))
    }
    return collectionData(q) as unknown as Observable<any[]>;
  }

  async deleteEstadiasBook(id:any): Promise<void> {
    const estBookRef = collection(this.firestore, 'estadiasBook');
    let q = query(estBookRef, where('id', '==', id));
    const estBookDoc = await getDocs(q);

    estBookDoc.forEach(async(estadiasBook)=>{
      const estBookRef = doc(this.firestore, 'estadiasBook', estadiasBook.id );
      deleteDoc(estBookRef);
    });
  }

  getEstBookById(id: string){
    const estBookRef = collection(this.firestore, 'estadiasBook');
    let q = query(estBookRef, where('id', '==', id));
    return collectionData(q) as unknown as Observable<any[]>;
  }

  async updateEstBook(estadiasBook: any){
    const estBookRef = collection(this.firestore, 'estadiasBook');
    const q = query(estBookRef, where('id', '==', estadiasBook.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async(docSnapshot)=>{
      const estBookRef = doc(this.firestore, 'estadiasBook', docSnapshot.id);
      await updateDoc(estBookRef, estadiasBook);
    })
  }
}
