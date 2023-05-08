import { Component, OnInit } from '@angular/core';
import { getDownloadURL, ref, getStorage, list } from '@angular/fire/storage';
import {
  Gallery,
  GalleryItem,
  ImageItem,
} from '@ngx-gallery/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private storage = getStorage();
  private id = localStorage.getItem('id');
  images: GalleryItem[] = [];

  constructor(
    public gallery: Gallery,
    public UTIL: UtilsService
  ) {}

  ngOnInit(): void {
    list(ref(this.storage, `users/${this.id}/profile`))
    .then(result => {
      const items = result.items;
      for (const item of items) {
        getDownloadURL(ref(this.storage,item.fullPath))
        .then(result => this.images.push(new ImageItem({src: result, thumb: result})))
      }
    })
    .catch(error => this.UTIL.showAlert(error.message, 'danger'))

    list(ref(this.storage, `users/${this.id}/imgFront`))
    .then(result => {
      const items = result.items;
      for (const item of items) {
        getDownloadURL(ref(this.storage,item.fullPath))
        .then(result => this.images.push(new ImageItem({src: result, thumb: result})))
      }
    })
    .catch(error => this.UTIL.showAlert(error.message, 'danger'))
    this.openView();
  }

  openView() {
    this.gallery.ref().load(this.images);
  }

}
