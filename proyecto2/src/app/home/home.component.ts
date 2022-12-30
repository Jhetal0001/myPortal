import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  developer = 'En esta seccion encontrara mas acerca de mi experiencia profesional, proyectos y articulos.';
  users = 'Si desea puede registrarse o iniciar seción en un espacio personal';

  ngOnInit(): void {
  }

}
