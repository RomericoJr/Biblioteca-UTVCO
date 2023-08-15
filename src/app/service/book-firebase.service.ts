import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookFirebaseService {

  constructor(
    private firestore: Firestore
  ) { }

  guardarBook(book: any){
      const bookRef = collection(this.firestore, 'books');
      return addDoc(bookRef, book);
    }

  getBook (filter= ''){
      const bookRef = collection(this.firestore, 'books');
      let q = query(bookRef);
      if(filter){
        q = query(bookRef, where('id', '==', filter))
      }
       return collectionData(q) as unknown as Observable<any[]>;
    }

    async deleteBook(id: any): Promise<void> {
    const bookRef = collection(this.firestore, 'books');
    let q = query(bookRef, where('id', '==', id));
    const bookDoc = await getDocs(q);

    bookDoc.forEach(async(book) => {
      const bookRef = doc(this.firestore, 'books', book.id);
      deleteDoc(bookRef);
    });
  }

  getBookById(id: string){
    const bookRef = collection(this.firestore, 'books');
    let q = query(bookRef, where('id', '==', id));
    return collectionData(q) as unknown as Observable<any[]>
  }


  async updateBook(book: any) {
    const bookRef = collection(this.firestore, 'books');
    const q = query(bookRef, where('id', '==', book.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docSnapshot) => {
      const bookDocRef = doc(this.firestore, 'books', docSnapshot.id);
      await updateDoc(bookDocRef, book); // Assuming you have a function like this to update the document
    });
  }


  guardarPrest(prest: any){
    const prestRef = collection(this.firestore, 'prestamos');
    return addDoc(prestRef, prest);
  }

  guardarApart(apart: any){
    const apartRef = collection(this.firestore, 'apartado');
    return addDoc(apartRef, apart);
  }

  getApart (filter= ''){
    const apartRef = collection(this.firestore, 'apartado');
    let q = query(apartRef);
    if(filter){
      q = query(apartRef, where('isbn', '==', filter))
    }
     return collectionData(q) as unknown as Observable<any[]>;
  }

  async deleteApart(id: any): Promise<void> {
    const apartRef = collection(this.firestore, 'apartado');
    let q = query(apartRef, where('id', '==', id));
    const apartDoc = await getDocs(q);

    apartDoc.forEach(async(apart) => {
      const apartRef = doc(this.firestore, 'apartado', apart.id);
      deleteDoc(apartRef);
    });
  }





}
