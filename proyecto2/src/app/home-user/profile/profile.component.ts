/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component,  OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { onSnapshot, Firestore, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 userProfile: User | undefined = {};
 private id : string;
 view = false;
 showFront = false;
 showProfile = false;



 constructor(
   private firestore: Firestore
   ) {
    this.id = localStorage.getItem('id')!;
   }

  ngOnInit() {
    onSnapshot(doc(this.firestore, "user", this.id), (result) => {
      this.userProfile = result.data();
    });
  }

  viewUpload() {
    this.view = !this.view;
  }

}
