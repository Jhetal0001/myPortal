import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  developer = 'En esta seccion encontrara mas acerca de mi experiencia profesional, proyectos y articulos.';
  users = 'Si desea puede registrarse o iniciar seción en un espacio personal';

  constructor() { }

  ngOnInit(): void {
  }

}
