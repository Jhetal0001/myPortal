/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component,  OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { onSnapshot, Firestore, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 userProfile: User | undefined = {};
 private id : string;

 constructor(
   private userService: UserService,
   private storage: Storage,
   private firestore: Firestore
   ) {
    this.id = localStorage.getItem('id')!;
   }

  ngOnInit() {
    onSnapshot(doc(this.firestore, "user", this.id), (result) => {
      this.userProfile = result.data();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async uploadImg(tag: string, $event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `users/${localStorage.getItem('id')}/${tag}/${file.name}`);

    await uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    getDownloadURL(imgRef)
      .then(urlImage => {
        if (tag === 'profile') {
          this.userService.updatePhotoProfile(this.id, urlImage)
        }else if (tag === 'imgFront') {
          this.userService.updatePhotoFront(this.id, urlImage)
        }
      });
  }


}
