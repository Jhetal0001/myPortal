import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LightboxConfig, Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  //Aqui se digitan los proyectos para cada card
  projectsArray: any[] = [
    {
      name: 'Keyl',
      img : '../../../assets/KeyL.png',
      description : 'Es un proyecto basado en preprocesadores CSS y HTML, se trabaja solo maquetación',
      link : 'http://www.universidadcunaca.somee.com/'
    },
    {
      name: 'Batatabit',
      img : '../../../assets/Batatabit.png',
      description : 'Es un proyecto hecho en clases de platzi basado en la metodología First Mobile',
      link : 'https://jhetal0001.github.io/'
    },
    {
      name: 'Game CSS',
      img : '../../../assets/animaciones-css.png',
      description : 'Es un proyecto hecho en clases de platzi basado en animaciones CSS',
      link : 'https://animaciones-css-jf.web.app/'
    },
  ]



  _albums:any = [];
  constructor(private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox) {
    for (let prop of this.projectsArray) {
      const src = prop.img;
      const caption = prop.name;
      const thumb = prop.img;
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
    this._lightbox.open(this._albums, index, {
      wrapAround: true,
      showImageNumberLabel: true,
      showZoom: true,
      positionFromTop: 70,
      alwaysShowNavOnTouchDevices: true,
      albumLabel: '%1 of %2'
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit(): void {

  }
}
