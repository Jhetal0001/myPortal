import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-micv',
  templateUrl: './micv.component.html',
  styleUrls: ['./micv.component.scss'],
})
export class MicvComponent implements OnInit {
  tittle = 'Jr. Developer';
  srcphoto = '../../../assets/perfile.png';

  dateperson = {
    profession: 'Jr. Developer',
    photo: '../../../assets/perfile.png',
    name: 'Jhon Fredy Vásquez García',
    phone: '+57 3195493430',
    email: 'jhetal00@gmail.com',
    address: 'Bogota D.C.',
  };
  contentcv = {
    profilepro: {
      name: 'Perfil Profesional',
      details: {
        paragraph1: `Estudiante de quinto semestre en Ing. de sistemas, con experiencia de seis meses en pruebas funcionales,
          smoke test, pruebas de regresión y metodologías de trabajo ágil scrum.`,
        paragraph2: `Conocimientos básicos en códigos de programación Java,
          Python, PHP, C#, pseudocódigo, bases de datos SQL y Construcción y Ciclo de vida del software. Manejo de JavaScript,
          ECMAScript6, HTML5, CSS3, Git, y GitHub, Terminal y línea de comandos, desarrollo moderno CodeStream, Maquetación Mobile First,
          testing, smoke test, automatización con java. \n`,
        paragraph3: `Actualmente en capacitación continua para mejorar todas las aptitudes como desarrollador FullStack,
          Cuento con aptitudes para un aprendizaje rápido, buen vocabulario, excelente presentación personal, responsabilidad integral,
          empatía, humildad, respeto, tolerancia, compromiso e interés por el desarrollo de software.`,
      },
    },
    studies: {
      name: 'Estudios',
      details: {
        school1: {
          name: 'Escuela Normal Superior Maria Auxiliadora',
          date: '2006 - 2011',
          site: 'Villapizón',
          tittle: 'Bachiller Academico',
        },
        school2: {
          name: 'Corporacion Unificada Nacional CUN',
          date: '2019 - Presente',
          site: 'Bogotá D.C.',
          tittle: 'Ingenieria de Sistemas',
        },
      },
    },
    certificates: {
      name: 'Certificados y Constancias',
      details: {
        certificate1: {
          name: 'Curso Profesional de Scrum',
          school: 'Platzi',
          date: 'Septiembre 2022',
          url: 'https://platzi.com/p/jhetal00/curso/1750-scrum/diploma/detalle/',
        },
        certificate2: {
          name: 'Diploma del Curso de Java SE Orientado a Objetos',
          school: 'Platzi',
          date: 'Noviembre 2022',
          url: 'https://platzi.com/p/jhetal00/curso/1629-java-oop/diploma/detalle/',
        },
        certificate3: {
          name: 'HTML y CSS a Profundidad',
          school: 'Platzi',
          date: 'Noviembre 2022',
          url: 'https://platzi.com/p/jhetal00/ruta/7040-web-frontend/diploma/detalle/',
        },
        certificate4: {
          name: 'Curso de Fundamentos de Pruebas de Software',
          school: 'Platzi',
          date: 'Junio 2022',
          url: 'https://platzi.com/p/jhetal00/curso/1421-pruebas-software/diploma/detalle/',
        },
        certificate5: {
          name: 'Curso Profesional de CSS Grid Layout',
          school: 'Platzi',
          date: 'Mayo 2022',
          url: 'https://platzi.com/p/jhetal00/curso/2222-css-grid-layout/diploma/detalle/',
        },
        certificate6: {
          name: 'Curso de Asincronismo con JavaScript 2019',
          school: 'Platzi',
          date: 'Mayo 2022',
          url: 'https://platzi.com/p/jhetal00/curso/1789-asincronismo-js-2019/diploma/detalle/',
        },
        certificate7: {
          name: 'Curso de ECMAScript 6+',
          school: 'Platzi',
          date: 'Mayo 2022',
          url: 'https://platzi.com/p/jhetal00/curso/1815-course/diploma/detalle/',
        },
        certificate8: {
          name: 'Curso Profesional de Git y GitHub',
          school: 'Platzi',
          date: 'Abril 2022',
          url: 'https://platzi.com/p/jhetal00/curso/1557-git-github/diploma/detalle/',
        },
        certificate9: {
          name: 'Curso de Responsive Design: Maquetación Mobile First',
          school: 'Platzi',
          date: 'Abril 2022',
          url: 'https://platzi.com/p/jhetal00/curso/2030-course/diploma/detalle/',
        },
        certificate10: {
          name: 'Fundamentos de Ingeniería de Software',
          school: 'Platzi',
          date: 'Abril 2022',
          url: 'https://platzi.com/p/jhetal00/curso/1098-course/diploma/detalle/',
        },
      },
    },
    experience: {
      name: 'Experiencia Profesional',
      details: {
        work1: {
          name: 'DIGITALWARE',
          position: 'Analista QA',
          date: 'Enero 2022 - Julio 2022',
        },
        work2: {
          name: 'QUIPUX',
          position: 'Analista Desarrollador',
          date: 'Agosto 2022 - Presente',
        },
      },
    },
  };

  certificates = Object.entries(this.contentcv.certificates.details).map(i => i[1]);
  studies = Object.entries(this.contentcv.studies.details).map(i => i[1]);
  _albums:any = [];
  constructor(private _lightbox: Lightbox) {
    for (let prop in this.dateperson) {
      const src = this.dateperson.photo;
      const caption = 'Photo Perfile';
      const thumb = this.dateperson.photo;
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

  ngOnInit(): void {
    console.log(this.certificates)
    $(document).ready(function () {
      $('.profil').click(function () {
        $('.profile-details').toggle(300);
        $('.profil')
          .children('a')
          .children('i')
          .toggleClass('fa-plus')
          .toggleClass('fa-minus');
      });
      $('.studies').click(function () {
        $('.studies-details').toggle(300);
        $('.studies')
          .children('a')
          .children('i')
          .toggleClass('fa-plus')
          .toggleClass('fa-minus');
      });
      $('.certif').click(function () {
        $('.certif-details').toggle(300);
        $('.certif')
          .children('a')
          .children('i')
          .toggleClass('fa-plus')
          .toggleClass('fa-minus');
      });
      $('.experien').click(function () {
        $('.experien-details').toggle(300);
        $('.experien')
          .children('a')
          .children('i')
          .toggleClass('fa-plus')
          .toggleClass('fa-minus');
      });
    });
  }
}
