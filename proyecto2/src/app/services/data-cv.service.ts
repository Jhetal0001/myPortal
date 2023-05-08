import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Firestore, collection, addDoc, getDocs, doc, setDoc, updateDoc, deleteDoc, getDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, uploadBytes, Storage, list, deleteObject } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class DataCvService {

  constructor(
    private readonly firestore: Firestore,
    private storage: Storage
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

  async uploadImgCv(file: File) {
    let dataItem = {url: '', path: '' };
    const fileId = uuidv4();
    const imgRef = ref(this.storage, `profileCv/profilePhoto/${fileId}`);
    await uploadBytes(imgRef, file);
    await getDownloadURL(imgRef).then(data => {
      dataItem = {
        path: imgRef.fullPath,
        url: data
      };
    });
    return await dataItem;
  }

  async listPhoto() {
    return await list(ref(this.storage, `profileCv/profilePhoto`));
  }

  async getUrlPhotos(urlPath: string){
    return await getDownloadURL(ref(this.storage, urlPath));
  }

  async deleteitemCv(urlPath: string) {
    return await deleteObject(ref(this.storage, urlPath));
  }

  async selectPhotoCv(url: string){
    const refDoc = doc(this.firestore, 'portal-jf', 'CV', 'profile', 'profileData');
    updateDoc(refDoc, {photo: url});
    return await this.getPhotoCv();
  }

  async getPhotoCv() {
    return await getDoc(doc(this.firestore, 'portal-jf', 'CV', 'profile', 'profileData'));
  }
}
