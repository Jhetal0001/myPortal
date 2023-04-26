import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class InfoJhetalService {

  constructor(
    private readonly firestore: Firestore
  ) { }

  async getInfoJhetal(){
    return await getDocs(collection(this.firestore, 'info_profile'));
   }

  newCertificate(objeto: object,) {
    const refDoc = doc(this.firestore, 'info_profile', 'mi_cv');
    return updateDoc(refDoc, {'contentcv.certificates.details': arrayUnion(objeto)})
  }
  deleteCertificate(objeto: object,) {
    const refDoc = doc(this.firestore, 'info_profile_prueba', 'mi_cv');
    return updateDoc(refDoc, {'contentcv.certificates.details': arrayRemove(objeto)})
  }

}
