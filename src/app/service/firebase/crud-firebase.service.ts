import { Injectable } from '@angular/core';

 import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {

  constructor(
    private firestore: Firestore
    ) { }

    

  guardarWord( word: any){
    const wordRef = collection(this.firestore, 'words');
    return addDoc(wordRef, word);
  }

  getWord (filter= ''){
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef);
    if(filter){
      q = query(wordRef, where('name', '==', filter))
    }
     return collectionData(q) as unknown as Observable<any[]>;
  }

  getWordById( id: string){
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef, where('id', '==', id));
    return collectionData(q) as unknown as Observable<any[]>;
  }

  async updateWord(word: any){
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef, where('id', '==', word.id));
    const wordDoc = await getDocs(q);

    wordDoc.forEach(async(docu) => {
      const docRef = doc(this.firestore, 'words', docu.id);
      await updateDoc(docRef, {...word});

  });
}

  async deleteWord(id: string): Promise<void> {
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef, where('id', '==', id));
    const wordDoc = await getDocs(q);

    wordDoc.forEach(async(docu) => {
      const docRef = doc(this.firestore, 'words', docu.id);
      deleteDoc(docRef);
    });
  }


  guardarCategory(category: any){
    const cateRef = collection(this.firestore, 'Categorias');
    return addDoc(cateRef, category);
  }

  getCategory (filter= ''){
    const cateRef = collection(this.firestore, 'Categorias');
    let q = query(cateRef);
    if(filter){
      q = query(cateRef, where('id', '==', filter))
    }
     return collectionData(q) as unknown as Observable<any[]>;
  }

  async deleteCate(id: any): Promise<void> {
    const cateRef = collection(this.firestore, 'Categorias');
    let q = query(cateRef, where('id', '==', id));
    const apartDoc = await getDocs(q);

    apartDoc.forEach(async(apart) => {
      const cateRef = doc(this.firestore, 'Categorias', apart.id);
      deleteDoc(cateRef);
    });
  }

  async updateCategory(category: any) {
    const cateRef = collection(this.firestore, 'Categorias');
    const q = query(cateRef, where('id', '==', category.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docSnapshot) => {
      const cateDocRef = doc(this.firestore, 'Categorias', docSnapshot.id);
      await updateDoc(cateDocRef, category); // Assuming you have a function like this to update the document
    });
  }

  getCategoById(id: string){
    const cateRef = collection(this.firestore, 'Categorias');
    let q = query(cateRef, where('id', '==', id));
    return collectionData(q) as unknown as Observable<any[]>
  }
}

