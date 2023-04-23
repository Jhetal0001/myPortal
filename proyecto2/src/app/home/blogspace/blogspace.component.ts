/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Gallery, ImageItem, GalleryItem} from '@ngx-gallery/core';
import { ArticulosService } from '../../services/articulos.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-blogspace',
  templateUrl: './blogspace.component.html',
  styleUrls: ['./blogspace.component.scss'],
})
export class BlogspaceComponent implements OnInit {

  loading$ = this.UTILS.loadind$;
  // Variable para visualizar articulo
  art!: number;
  articles: Array<any> = [];

  constructor(
      public gallery: Gallery,
      private articulosService: ArticulosService,
      private UTILS: UtilsService
    ) {
  }
  imageArrays: GalleryItem[][] = new Array<Array<GalleryItem>>;

  open() {
    this.imageArrays.forEach((array, index) => this.gallery.ref(index.toString()).load(array));
  }

  openLigthbox(src: string){
    this.gallery.ref().setConfig({ thumb: false });
    const image = new ImageItem({ src: src });
    this.gallery.ref().load([image]);
  }

  ngOnInit(): void {
    this.UTILS.showLoad();
    this.articulosService.getArticles()
    .then((data) => {
      data.forEach((element) => this.articles.push(element.data()))
      this.articles.forEach((item, Index: number) => {
        this.imageArrays[Index] = new Array<GalleryItem>(item.content.images.length);
        item.content.images.forEach((image: string, i: number) => {
          this.imageArrays[Index][i] = new ImageItem({ src: image, thumb: image });
        });
      });
      this.open();
      this.UTILS.hideLoad();
      }).catch((error: string) => {
        this.UTILS.showAlert(error, 'danger');
        this.UTILS.hideLoad();
    });
  }
}
