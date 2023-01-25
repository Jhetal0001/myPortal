import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { User } from '../models/user.model';

import {
  CollectionReference,
  DocumentData,
} from '@firebase/firestore';

import { Firestore, collection, query, where, getDocs, doc, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: CollectionReference<DocumentData>;

  constructor(
    private auth : Auth,
    private readonly firestore: Firestore
  ) {
    this.user = collection(this.firestore, 'user');
   }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  createUser(id: string, user: User) {
    return setDoc(doc(this.firestore, 'user', id), user);
  }

  updatePhotoProfile(id: string, urlImage: string) {
    return updateDoc(doc(this.firestore, 'user', id), {imgurl: urlImage});
  }

  updatePhotoFront(id: string, urlImage: string) {
    return updateDoc(doc(this.firestore, 'user', id), {imgFront: urlImage});
  }

  //getAll(id: string) {
  //  return onSnapshot(doc(this.firestore, "user", id), (result) => {
  //    console.log("vuelta de data: ", result.data());
  //  });
  //}

  async getUser(id: string): Promise<User|undefined> {
    localStorage.setItem('id', id)
    const q = query(this.user, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    let result;
    querySnapshot.forEach(doc => {
      const data = doc.data();
      result = Object.assign(data);
      //this.idUser = Object.assign(result);
      //this.userProfile$.next(this.idUser);
    });
    return result;
  }

  //getUserProfile$():Observable<User>{
  //  return this.userProfile$.asObservable();
  //}
}
