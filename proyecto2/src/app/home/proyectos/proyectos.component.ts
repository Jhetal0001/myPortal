import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import {
  Gallery,
  GalleryItem,
  IframeItem,
} from '@ngx-gallery/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-proyectos',
  animations: [
    trigger('enterAnimation', [
        state('void', style({
          opacity: 0
        })),
        transition(':enter', [
          animate('300ms', style({
            opacity: 1
          }))
        ]),
        transition(':leave', [
          animate('300ms', style({
            opacity: 0
          }))
        ])
      ]
    )
  ],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  comments = false;
  nameProject = '';

  //Aqui se digitan los proyectos para cada card
  projectsArray = [
    {
      name: 'KeyL',
      img_small : '../../../assets/small/KeyL.png',
      img : '../../../assets/KeyL.png',
      description : 'Es un proyecto basado en preprocesadores CSS y HTML, se trabaja solo maquetación',
      link : 'http://www.universidadcunaca.somee.com/'
    },
    {
      name: 'Batatabit',
      img_small : '../../../assets/small/Batatabit.png',
      img : '../../../assets/Batatabit.png',
      description : 'Es un proyecto hecho en clases de platzi basado en la metodología First Mobile',
      link : 'https://jhetal0001.github.io/'
    },
    {
      name: 'GameCSS',
      img_small : '../../../assets/small/animaciones-css.png',
      img : '../../../assets/animaciones-css.png',
      description : 'Es un proyecto hecho en clases de platzi basado en animaciones CSS',
      link : 'https://animaciones-css-jf.web.app/'
    },
  ]
  isAdmin!: boolean;

  items: GalleryItem[] = [];
  constructor(public gallery: Gallery, private UTIL: UtilsService) {}

  openLigthbox(src: string){
    this.gallery.ref().setConfig({ thumb: false });
    const link = new IframeItem({ src: src });
    this.gallery.ref().load([link]);
  }

  sectionHide(e: boolean, name: string){
    this.comments = e;
    this.nameProject = name;
  }

  ngOnInit(): void {
    this.UTIL.role().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }
}
