import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _albums:any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 3; i++) {
      const src = 'https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
