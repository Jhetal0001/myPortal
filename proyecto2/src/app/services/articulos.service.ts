import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(
    private readonly firestore: Firestore
  ) {
  }

  async getArticles(){
   return await getDocs(collection(this.firestore, 'articles'));
  }

}
