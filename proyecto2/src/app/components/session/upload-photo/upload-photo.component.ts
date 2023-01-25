/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getDownloadURL, ref, uploadBytes, Storage } from '@angular/fire/storage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent {

  @Input() showFront = false;
  @Output() showFrontEvent = new EventEmitter<boolean>();
  @Input() showProfile = false;
  @Output() showProfileEvent = new EventEmitter<boolean>();

  private id: string;
  private idPhoto = Math.random().toString(36).substring(2);

  constructor(
    private userService: UserService,
    private storage: Storage,
  ) {
    this.id = localStorage.getItem('id')!;
  }

  async uploadImg(tag: string, $event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `users/${localStorage.getItem('id')}/${tag}/${tag}_${this.idPhoto}`);

    await uploadBytes(imgRef, file)
    .then(() => console.log('Success'))
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
  show(e: string) {
    if (e === 'front') {
      this.showFrontEvent.emit(false);
      this.showFront = false
    } else if (e === 'profile') {
      this.showProfileEvent.emit(false);
      this.showProfile = false
    }
  }

}
