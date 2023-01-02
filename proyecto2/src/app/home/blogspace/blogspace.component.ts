import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogspace',
  templateUrl: './blogspace.component.html',
  styleUrls: ['./blogspace.component.scss']
})
export class BlogspaceComponent implements OnInit {

  constructor() { }

  articles: any[] = [
    {
      name: '¿Qué es HTML?',
      img : '../../../assets/Que-es-el-HTMLjpg.jpg',
      description : 'Llegó el momento de hablar sobre HTML, el lenguaje con el que crean las páginas web.',
      link : 'https://desarrolloweb.com/articulos/que-es-html.html',
      tag : 'Desarrollo Web'
    },
    {
      name: '¿Qué es CSS?',
      img : '../../../assets/que-es-css.png',
      description : 'Lenguaje de estilos para dotar de aspecto visual',
      link : 'https://lenguajecss.com/css/introduccion/que-es-css/',
      tag : 'Desarrollo Web'
    },
    {
      name: '¿Qué es JavaScript?',
      img : '../../../assets/que-es-javascript.jpg',
      description : 'Qué es JavaScript, para qué sirve y cómo funciona',
      link : 'https://animaciones-css-jf.web.app/',
      tag : 'Desarrollo Web'
    },
    {
      name: '¿Qué son los W3C?',
      img : '../../../assets/estandares-web.jpg',
      description : '¿Por qué es importante cumplhir con estos estándares?',
      link : 'https://www.itcha.edu.sv/blog/950',
      tag : 'Desarrollo Web'
    },
    {
      name: '¿Qué son Angular?',
      img : '../../../assets/que-es-angular.jpg',
      description : '¿Qué es Angular y para qué sirve?',
      link : 'https://www.hiberus.com/crecemos-contigo/que-es-angular-y-para-que-sirve/',
      tag : 'Desarrollo Web'
    },
  ]

  ngOnInit(): void {
    for(const project of this.articles){
      $('.blogspace-articles')
      .append(
        `<div class="card m-2 overflow-hidden bg-dark w-50 position-relative" style="border-radius:10px; min-width:170px; max-width:180px; width: 18rem;">
          <img class="card-img-top z-1 position-absolute h-100" style="opacity: 15%" src="`+project.img+`" alt="Card image cap">
          <div class="card-body p-0 z-2 position-relative">
            <span class="small badge bg-primary" style="font-size: 8px;">`+project.tag+`</span>
            <div class="w-100 text-center p-2">
              <h5 class="card-title">`+project.name+`</h5>
              <p class="card-text" style="font-size: 10px;">`+project.description+`</p>
            </div>
          </div>
        </div>`
      );
    }
  }

}
