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
        q = query(bookRef, where('isbn', '==', filter))
      }
       return collectionData(q) as unknown as Observable<any[]>;
    }

    async deleteBook(id: any): Promise<void> {
    const bookRef = collection(this.firestore, 'books');
    let q = query(bookRef, where('isbn', '==', id));
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

  async updateBook(id: any): Promise<void> {
    const bookRef = collection(this.firestore, 'books');
    let q = query(bookRef, where('isbn', '==', id));
    const bookDoc = await getDocs(q);

    bookDoc.forEach(async(book) => {
      const bookRef = doc(this.firestore, 'books', book.id);
      await this.updateBook(bookRef);
    });
  }

  guardarPrest(prest: any){
    const prestRef = collection(this.firestore, 'prestamos');
    return addDoc(prestRef, prest);
  }

}