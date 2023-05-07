import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, doc, setDoc, updateDoc, deleteDoc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataCvService {

  constructor(
    private readonly firestore: Firestore
   ) { }

   saveForm(item: object, form: string) {
    return setDoc(doc(this.firestore, 'portal-jf', 'CV', 'profile', form), item);
   }

   addList(item: object, form: string){
    const refDoc = collection(this.firestore, 'portal-jf', 'CV', 'profile', form, 'list');
    return addDoc(refDoc, item)
  }

   updateProfileList(item: object, form: string, id: string){
    const refDoc = doc(this.firestore, 'portal-jf', 'CV', 'profile', form, 'list', id);
    return updateDoc(refDoc, item)
  }

  async deleteDoc(form: string, id: string) {
    return await deleteDoc(doc(this.firestore, 'portal-jf', 'CV', 'profile', form, 'list', id));
  }

  async getProfileStudies() {
    return await getDocs(collection(this.firestore, 'portal-jf', 'CV', 'profile', 'profileStudies', 'list'));
  }

  async getProfileExperience() {
    return await getDocs(collection(this.firestore, 'portal-jf', 'CV', 'profile', 'profileExperience', 'list'));
  }

  async getProfileCertificates() {
    return await getDocs(collection(this.firestore, 'portal-jf', 'CV', 'profile', 'profileCertificates', 'list'));
  }

  async getProfileAbilities() {
    return await getDocs(collection(this.firestore, 'portal-jf', 'CV', 'profile', 'profileAbilities', 'list'));
  }

  async getProfileData() {
    return await getDoc(doc(this.firestore, 'portal-jf', 'CV', 'profile', 'profileData'));
  }

  async getProfileProf() {
    return await getDoc(doc(this.firestore, 'portal-jf', 'CV', 'profile', 'profilePro'));
  }

}
