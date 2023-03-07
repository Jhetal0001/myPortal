import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
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
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  leerMas = '';

  comments = false;
  nameProject = 'Portal-JF';


  principal = {
    intro: `¡Hola! Mi nombre es Jhon Vásquez, Bienvenida/o a mi proyecto de presentación, aquí podrá conocer acerca de mí,
    sobre mis estudios y habilid...`,
    bienvenida: `¡Hola! Mi nombre es Jhon Vásquez, Bienvenida/o a mi proyecto de presentación, aquí podrá conocer acerca de mí,
      sobre mis estudios y habilidades, los proyectos que he realizado como developer y algunos artículos sobre temas
      relacionados sobre el desarrollo web, además encontrará una sección donde podrá registrarse o iniciar sesión con
      su cuenta de Google, ahí podrá subir alguna foto de perfil y de portada, también ver información de la API de Marvel,
      verá  información de todos los comics, personajes y series de Marvel, ya por último os agradezco dejarme un comentario
      en el apartado al pie de página. ¡Gracias por su visita!`,
    introherramientas: `Este proyecto fue creado usando tecnologia Angular 15 'rxjs v7, formularios reactivos, @ngx-gallery, routes',
      bootstrap, typeScript v4, Preproce...`,
    herramientas: `Este proyecto fue creado usando tecnología Angular 15 'rxjs v7, formularios reactivos, @ngx-gallery, routes',
      bootstrap, typeScript v4, Preprocesador CSS 'Sass', firebase v7 'Authentication, firestore, storage de firebase',
      APIs REST 'Api pública de Marvel', Metodologia Firsmobile, Git 'Github', al pie de pagina puede visualizar codigo fuente
      en el icono de Github, npm v8, node v18.`,
    developer:
      'En esta sección encontrará más acerca de mi experiencia profesional, proyectos y artículos.',
    users: 'Si desea puede registrarse o iniciar sesión en un espacio personal',
  };
}
