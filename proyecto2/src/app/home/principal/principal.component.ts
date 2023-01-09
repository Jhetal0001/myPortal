import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  developer = 'En esta sección encontrará más acerca de mi experiencia profesional, proyectos y artículos.';
  users = 'Si desea puede registrarse o iniciar sesión en un espacio personal';

  constructor() { }

  ngOnInit(): void {
  }

}
