import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiudadesColombiaService {

  constructor(private http: HttpClient,) {}

  getDepartamento() {
    const query = `$query=SELECT DISTINCT c_digo_dane_del_departamento, departamento ORDER BY c_digo_dane_del_departamento ASC LIMIT 100 OFFSET 0`;
    const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?${query}`;
    return this.http.get(url);
  }
  getCiudades() {
    const query = `$query=SELECT departamento, c_digo_dane_del_municipio, municipio ORDER BY :id ASC NULL FIRST`;
    const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?${query}`;
    return this.http.get(url);
  }

}

