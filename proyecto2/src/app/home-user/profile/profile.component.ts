/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { onSnapshot, Firestore, doc } from '@angular/fire/firestore';
import { getAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: User | undefined = {};
  private id: string;
  view = false;
  showFront = false;
  showProfile = false;
  infoAuth = {
    displayName: '',
    email: '',
    phone: '',
    photoURL: '',
    emailVerified: false,
  };
  alertActive = '';
  alertMessage = '';

  constructor(
    private firestore: Firestore,
    private userService: UserService
    ) {
    this.id = localStorage.getItem('id')!;
  }

  ngOnInit() {
    onSnapshot(doc(this.firestore, 'user', this.id), (result) => {
      this.userProfile = result.data();
    });

    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      this.infoAuth.displayName = user.displayName!;
      this.infoAuth.email = user.email!;
      this.infoAuth.phone = user.phoneNumber!;
      this.infoAuth.photoURL = user.photoURL!;
      this.infoAuth.emailVerified = user.emailVerified!;
    }
  }

  resetPassword() {
    this.userService.resetPassword(this.infoAuth.email)
      .then(() => {
        this.alertActive = 'info';
        this.alertMessage = `Se ha enviado el link al email: '${this.infoAuth.email}' para restrablecer la contraseña`
        this.hide();
      })
      .catch((error) => {
        this.alertActive = 'danger';
        this.alertMessage = error.message;
        this.hide();
      });
  }

  viewUpload() {
    this.view = !this.view;
  }
  hide(){
    setTimeout(()=>{
    this.alertActive = '';
    this.alertMessage = '';
    }, 5000)
  }
}
