/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { onSnapshot, Firestore, doc } from '@angular/fire/firestore';
import { getAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

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

  constructor(
    private firestore: Firestore,
    private userService: UserService,
    private UTILS: UtilsService
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
        this.UTILS.showAlert(`Se ha enviado el link al email: '${this.infoAuth.email}' para restrablecer la contraseña` ,'info');
      })
      .catch((error) => {
        this.UTILS.showAlert(error.message ,'danger');
      });
  }

  viewUpload() {
    this.view = !this.view;
  }

}
