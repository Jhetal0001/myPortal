/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData } from '@firebase/firestore';
import {
  Firestore,
  collection,
  doc,
  setDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {

  private user: CollectionReference<DocumentData>;

  constructor(
    private readonly firestore: Firestore
  ) {
    this.user = collection(this.firestore, 'user');
  }

  newComment(name: string, idcomment: string, comment: object,) {
    return setDoc(doc(this.firestore, 'comments', name, 'comments', idcomment), comment);
  }

}
