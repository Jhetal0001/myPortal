import { Component, OnInit } from '@angular/core';
import { getDownloadURL, ref, getStorage, list } from '@angular/fire/storage';
import {
  Gallery,
  GalleryItem,
  ImageItem,
} from '@ngx-gallery/core';

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
    public gallery: Gallery
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
    .catch(error => console.log(error))

    list(ref(this.storage, `users/${this.id}/imgFront`))
    .then(result => {
      const items = result.items;
      for (const item of items) {
        getDownloadURL(ref(this.storage,item.fullPath))
        .then(result => this.images.push(new ImageItem({src: result, thumb: result})))
      }
    })
    .catch(error => console.log(error))
    this.openView();
  }

  openView() {
    this.gallery.ref().load(this.images);
  }

}
