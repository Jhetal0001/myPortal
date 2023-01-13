import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from '@ngx-gallery/core';

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
    address: 'Bogotá D.C.',
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
        paragraph3: `Actualmente, en capacitación continua para mejorar todas las aptitudes como desarrollador FullStack,
          Cuento con aptitudes para un aprendizaje rápido, buen vocabulario, excelente presentación personal, responsabilidad integral,
          empatía, humildad, respeto, tolerancia, compromiso e interés por el desarrollo de software.`,
      },
    },
    studies: {
      name: 'Estudios',
      details: {
        school1: {
          name: 'Escuela Normal Superior María Auxiliadora',
          date: '2006 - 2011',
          site: 'Villapizón',
          tittle: 'Bachiller Académico',
        },
        school2: {
          name: 'Corporación Unificada Nacional CUN',
          date: '2019 - Presente',
          site: 'Bogotá D.C.',
          tittle: 'Ingeniería de Sistemas',
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
    abilities: {
      name: 'Habilidades Técnicas',
      details: {
        1: {
          name: 'HTML5',
          nivel: 95,
        },
        2: {
          name: 'CSS',
          nivel: 95,
        },
        3: {
          name: 'JavaScript',
          nivel: 70,
        },
        4: {
          name: 'Angular',
          nivel: 50,
        },
        5: {
          name: 'Bootstrap',
          nivel: 85,
        },
        6: {
          name: 'Java EE',
          nivel: 60,
        },
        7: {
          name: 'Spring Framework',
          nivel: 60,
        },
        8: {
          name: 'Git',
          nivel: 80,
        },
        9: {
          name: 'Terminal-Bash',
          nivel: 60,
        },
        10: {
          name: 'Oracle SQL',
          nivel: 60,
        },
        11: {
          name: 'PostgreSQL',
          nivel: 60,
        },
        12: {
          name: 'C#',
          nivel: 50,
        },
        13: {
          name: 'REST',
          nivel: 70,
        },
        14: {
          name: 'Pre-procesadores',
          nivel: 90,
        },
        15: {
          name: 'Linux Server',
          nivel: 50,
        },
        16: {
          name: 'Pruebas Unitarias',
          nivel: 70,
        },
      },
    },
  };

  certificates = Object.entries(this.contentcv.certificates.details).map(
    (i) => i[1]
  );
  studies = Object.entries(this.contentcv.studies.details).map((i) => i[1]);
  abilities = Object.entries(this.contentcv.abilities.details).map((i) => i[1]);

  items: GalleryItem[] = [];
  constructor(public gallery: Gallery) {
    let item = new ImageItem({ src: this.srcphoto, thumb: this.srcphoto });
    this.items.push(item);
  }
  open() {
    const lightboxGalleryRef = this.gallery.ref();
    lightboxGalleryRef.setConfig({ thumb: false });
    lightboxGalleryRef.load(this.items);
  }

  viewTrue = '';
  view(section: string) {
    if (this.viewTrue !== section) {
       this.viewTrue = section;
       $('.'+{section}).fadeIn('slow')
    }else {
       this.viewTrue = '';
    }

  }

  ngOnInit(): void {
    //////////////////////////////////////////////////////////////////////////////////////////

    // 1. Create gallery items
    //this.items = perfile.map(item =>
    //  new ImageItem({ src: this.srcphoto, thumb: this.srcphoto })
    //);

    // Load items into the lightbox
    this.open();
    // Load item into different lightbox instance // diseño donde se corta la imagen pero se expande small img arriba
    // With custom gallery config
    //this.withCustomGalleryConfig();
  }
}
