import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
      description : 'Es un proyecto basado en preprocesadores CSS y HTML, se trabaja solo maquetacion',
      link : 'http://www.universidadcunaca.somee.com/'
    },
    {
      name: 'Batatabit',
      img : '../../../assets/Batatabit.png',
      description : 'Es un proyecto hecho en clases de platzi basado en la metodologia First Mobile',
      link : 'https://jhetal0001.github.io/'
    },
    {
      name: 'Game CSS',
      img : '../../../assets/animaciones-css.png',
      description : 'Es un proyecto hecho en clases de platzi basado en animaciones CSS',
      link : 'https://animaciones-css-jf.web.app/'
    },
  ]



  constructor() {

   }

  ngOnInit(): void {

    for(const project of this.projectsArray){
      $('.projects-sections')
      .append(
        `<div class="card m-2 overflow-hidden bg-dark w-50" style="border-radius:10px; max-width:170px; width: 18rem;">
        <a href="`+project.img+`" ><img class="card-img-top" src="`+project.img+`" alt="Card image cap"></a>
        <div class="card-body p-0 text-center">
          <div class="w-100 p-2">
            <h5 class="card-title">`+project.name+`</h5>
            <p class="card-text" style="font-size: 10px;">`+project.description+`</p>
          </div>
          <div class="btn-group mt-1 w-100">
            <a href="#" class="btn btn-secondary" style="border-right: 2px solid black;"><i class="fa-solid fa-thumbs-up"></i></a>
            <a href="#" class="btn btn-secondary" style="border-right: 2px solid black;"><i class="fa-solid fa-comment"></i></a>
            <a href="`+project.link+`" class="btn btn-secondary"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        </div>`
      );
    }
  }

}
